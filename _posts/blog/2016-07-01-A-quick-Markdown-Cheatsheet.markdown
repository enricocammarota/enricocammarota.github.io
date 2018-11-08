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

An alternative way to do so can be the usage of 3 back-tick in sequence like:

``` 
This is a code block too!
```

<h4>Headers</h4>

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

And the result will be:

# H1
## H2
### H3
#### H4
##### H5
###### H6

<h4>Text Formatting</h4>

```
Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~
```

And the result will be:

Emphasis, aka italics, with *asterisks* or _underscores_. <br>
Strong emphasis, aka bold, with **asterisks** or __underscores__. <br>
Combined emphasis with **asterisks and _underscores_**. <br>
Strikethrough uses two tildes. ~~Scratch this.~~


<h4>Lists</h4>

Apart from using a simple numeric combination, it is possible to use also other alternatives like the following:

```

1. Generic number with sublist associated
··1. Sublist element
4. Other Generic number

Other ways to use unordered lists are:
* Asterisks
- Minuses
+ Pluses

```

The result of the previous code block will be:

1. Generic number with sublist associated <br>
··1. Sublist element
4. Other Generic number


Other ways to use unordered lists are:
* Asterisks
- Minuses
+ Pluses


<h4>Links</h4>

There are several ways to create links, in the next code block you'll find my favourites that are also the most diffused:

<pre><code>
[Inline Link](https://enricocammarota.github.io/blog/2018/11/06/Blog-entry-two.html)
[Inline Link with Title](https://enricocammarota.github.io/blog/2018/11/06/Blog-entry-two.html "Second Blog post")
</code></pre>

And the result is:

[Inline Link](https://enricocammarota.github.io/blog/2018/11/06/A-quick-Markdown-Cheatsheet.html) <br>
[Inline Link with Title](https://enricocammarota.github.io/blog/2018/11/06/A-quick-Markdown-Cheatsheet.html "Second Blog post")

<h4>Images</h4>

There are two ways of representing an image:

```
Inline-style: 
![alt text](../../assets/img/markdown.png "This is the Markdown logo 1")

Reference-style: 
![alt text][logo]

[logo]: ../../assets/img/markdown.png "This is the Markdown logo 2"
```
<br>

Inline-style: 
![Markdown Logo 1](../../assets/img/markdown.png "This is the Markdown logo 1")

Reference-style: 
![Markdown Logo 2][logo]

[logo]: ../../assets/img/markdown.png "This is the Markdown logo 2"
<br>

<h4>Realizing Tables</h4>

Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them. They are an easy 
way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

That generates a result like:


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<br>
There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.
<br>

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<h4>Blockquotes</h4>

Particularely handy to highlight text blocks and to simulate email responses and quotes. The syntax is described in the next
code block:

```
> Blockquotes are very handy to highlight text blocks and simulate email responses.
> This line is part of the same quote.

```

And the result is:

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

A particularity of the Blockquote is that in case of very long lines, the text will keep being wrapped as a blockquote when rendered:

```
> Hello my name is Enrico Cammarota, I'm 29 years old. I'm an italian software developer passionate in technologies, sport and music. 
Feel free to contact me at any time at **cammarota.en@gmail.com**! 
```

> Hello my name is Enrico Cammarota, I'm 29 years old. I'm an italian software developer passionate in technologies, sport and music. 
Feel free to contact me at any time at **cammarota.en@gmail.com**! 

<h4>Inline HTML</h4>

It is however possible to include inline HTML inour Markdown in order to create particular structures:

```
<ul>
    <li>A simple list</li>
    <li>Commonly used</li>
</ul>
```

That gets rendered as:

<ul>
    <li>A simple list</li>
    <li>Commonly used</li>
</ul>

<br>

**That's all folks, thanks for reading this post!**

Credits:

[Adam P. Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) <br>
[Daring Fireball Markdown Syntax Documentation](https://daringfireball.net/projects/markdown/syntax)