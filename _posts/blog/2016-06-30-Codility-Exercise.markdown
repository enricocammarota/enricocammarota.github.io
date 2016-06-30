---
layout: post
title:  "Codility Exercise - Reverse String & Factorial + digits sum"
date:   2016-07-01 00:10:00
categories: blog
---

This evening I had to face an interesting challenge on Codility. One of the companies I'm interviewing with proposed me to perform this test to assess my knowledge in Java.

The test was split in two tasks to be executed in one hour time.

The tasks:

1. Reverse String

This task proposed me the challenge to "reverse" the words in a string and to print them out again. Consider for example the string "we test coders" the output of the 

String solution(String S) method should be: "ew tset sredoc". Here: - repository link - you'll find the solution to the exercise.

2. Factorial + digits sum

This second task instead proposed me the challenge of performing a factorial + sum the digits of the final number. Let's consider for example the factorial of "4321":

it will be "24". The final result of the method should be "6" since the sum of "2+4" it's equal to "6" in fact. For this particular exercise I strongly advice you to 

use the BigInteger class and its related methods since as soon as we try to calculate a factorial of a number > 16 we'll start to note "weird" behaviours in our code

due to a value that goes over the integer upper limit.
