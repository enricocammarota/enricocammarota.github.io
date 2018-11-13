---
layout: post
title:  "Elasticsearch Performance Tuning"
date:   2018-11-13 00:15:00
author:	"Enrico Cammarota"
categories: blog
---

<h3>Elasticsearch Performance Tuning</h3>

![Elasticsearch Logo](https://www.antaresnet.com/wp-content/uploads/2018/07/Elasticsearch-Logo-Color-V.png "Elasticsearch Logo")

During my experience at 7digital, I had the chance to work with Elasticsearch and appreciate its great scalability, speed, automatic
indexing and so on. It is also fairly easy to setup and to use thanks to a very reliable API that allows you to perform 
literaly **anything** you want.

By all means Elasticsearch is described as:

_An open source, RESTful search engine built on top of Apache Lucene and released under an Apache license.
It is Java-based and can search and index document files in diverse formats._

But this "ideal world" unfortunately needs **love** and in particular it might be useful for you to think about tuning its 
performances especially when the amount of documents stored is too high for the clusters to cope with. This is why I decided 
to take few days off from the actual development and to focus on what could have been done in order to improve the performances.

So here it comes, a shortlist of what me and my team decided to apply in order to improve the performances of our ES instance:

1. **Shard merging** - apply whenever is possible using the Optimize API.

2. **Close indexes** that won't be accessed any more. Until they're open, they keep using resources. By closing them the 
only thing that will remain in use is the disk space.

3. Occasionally run a **_flush** across the existing indices to empty the transaction logs.

4. Increase index **refresh interval** from 1 second to 30 seconds (for example) to allow larger segments to flush.

5. **Disable swapping** in order to reduce the time spent by the garbage collector in performing its operations. Given that 
usually Elasticsearch is the only service running on a box and its memory usage is controlled by the JVM options. There should 
be no need to have swap enabled. Use "sudo swapoff - a" to turn it off temporarily. To disable it permanently edit the 
**/etc/fstab** and comment all the lines that contain the word "swap".

6. Ensure the **sysctl** value **vm.swappiness** is set to 1 to reduce kernel's tendency to swap.

7. In the elasticsearch.yml file add "**bootstrap.memory_lock: true**" to try to lock the process address space into RAM 
preventing any ES memory from being swapped out.

8. Give memory to the FS cache - at least half of the machine hosting ES.

9. Increase the indexing buffer size so that it matches 10% of the total JVM memory.

10. **Disable indexing** on the fields you won't need to filter on.

11. **Disable dynamic mapping** - dynamic mapping is the feature of ES that allows you to index a document and automatically 
generate the index, the type and the fields - by default it will index the string fields both with text and keyword.

12. **Increase the shards size** in order to improve the data storage. Larger shards are more efficient at storing data.

13. **Disable the _source field** that usually stores the JSON body of the document. NOTE: this is valid only if you won't 
have to access to _source. Some API won't work anymore if an update like this one is put in place.

14. Use the **Force Merge API** to merge one or more indices through an API. This could be applied to the old data we're storing.

15. **Avoid** join, nested and parent-child queries.

16. Queries that use "**now()**" are typically **non cacheable**. As a result of this, it is better to switch for a rounded 
date that is quite often acceptable from a user prospective. Adding a rounding on the date it's a good thing to improve caching.

17. **Force-merge read-only indices**. All the old indices can merged down into a single segment in order to improve performances.

18. Set **nproc** to 4096 in /etc/security/limits.conf to increase the number of thread pools that can be started.

19. The option **-XX:+UseSerialGC** in the elasticsearch.yml must not be enabled.

20. Use the **Scroll API** in case of retrieving all documents that match a particular query.

21. **Avoid sparsity**: all the documents should have the same fields.

22. **Call the fields** in multiple documents **in the same way** in order to simplify queries and job to ES.

23. **Disable norms** if applied for scoring fields that don't need it - cannot be applied on a live index, unless: REINDEX.

24. Set the "**slowlog**" properties in the elasticsearch.yml in order to retrieve the user queries that fall over a certain threshold.

25. **Try avoiding EBS** - this option is often slower than local instance storage.

26. Consider **increasing indices.store.throttle.max_bytes_per_sec** to 100-200MB/s in the cluster settings to improve 
background merging operations.

27. **Reduce** the number of indices and shards.

28. The **cluster.routing.allocation.cluster_concurrent_rebalance** property determines the number of shards allowed for 
concurrent rebalance. This property needs to be set appropriately depending on the hardware being used, for example the 
number of CPUs, IO capacity, etc. If this property is not set appropriately, it can impact the performance of ES indexing.

29. Consider increasing: **index.translog.flush_threshold_size** from the default 512 MB to something larger, such as 1 GB. 
This allows larger segments to accumulate in the translog before a flush occurs. By letting larger segments build, you 
flush less often, and the larger segments merge less often. All of this adds up to less disk I/O overhead and better indexing 
rates. Of course, you will need the corresponding amount of heap memory free to accumulate the extra buffering space, so 
keep that in mind when adjusting this setting.

30. **Leave** some amount of physical memory unassigned so that the OS file system cache is free to use it for Lucene’s benefit. 
A rule of thumb is to have the Elasticsearch JVM use no more than half of the available memory.

31. Configure the **index_options** as they should be. Remove unneeded settings.

32. **Separate** data nodes from aggregator nodes. In this way a proper separation between search and indexing will take place.


**That's all folks, thanks for reading this post! And I hope it will help you tuning your ES performances!**<br>
In case of any questions please, don't hesitate in emailing me at **cammarota.en@gmail.com**. 

Enrico.