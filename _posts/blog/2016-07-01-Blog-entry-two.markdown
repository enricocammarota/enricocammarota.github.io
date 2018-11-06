---
layout: post
title:  "A quick Markdown cheatsheet"
date:   2018-11-06 00:15:00
author:	"Enrico Cammarota"
categories: blog
---

<h3>Introduction to Markdown</h3>

**Markdown** is a *text-to-HTML* conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write 
plain text format, then convert it to structurally valid XHTML (or HTML).

Thus, “Markdown” is two things: 

(1) a plain text formatting syntax; and <br>
(2) a software tool, written in Perl, that converts the plain text formatting to HTML. <br>
 
See below for details pertaining to Markdown’s formatting syntax.

The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a 
Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags 
or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters, the 
single biggest source of inspiration for Markdown’s syntax is the format of plain text email.

The best way to get a feel for Markdown’s formatting syntax is simply to look at a Markdown-formatted document. 
For example, you can view the Markdown source for the article text on this page [here](http://daringfireball.net/projects/markdown/index.text). 


It is possible to use the *.text suffix trick to view the Markdown source for the content of a *.md page.

Markdown is free software, available under a BSD-style open source license. See the License page for more information.

<h3>Most common Markdown usages</h3>

<h4>Code Block</h4>

For me as a developer is fundamental to be able to define a code block using the markdown syntax. To do so the specification
defines two tags that must be used in order to define a code block. The **pre** and **code** tags. An example of its usage is 
the following:

<pre><code>This is a code block</code></pre>

<h4>Headers</h4>

<pre><code>
# H1
## H2
### H3
#### H4
##### H5
###### H6
</code></pre>

And the result will be:

# H1
## H2
### H3
#### H4
##### H5
###### H6