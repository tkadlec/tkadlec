---
layout: post
title: "Implementing 'Save For Offline' with Service Workers"
date: 2017-01-26 10:42:50 -0600
comments: true
categories: 
tags:
- performance
- service workers
- offline
external-url: https://una.im/save-offline/#💁
---
Una recently added a "Save Offline" button to her blog posts that gives users control over whether an article will be saved offline or not. There was some recent discussion prompted by [Nicholas Hoizey](https://nicolas-hoizey.com/2017/01/how-much-data-should-my-service-worker-put-upfront-in-the-offline-cache.html) about how much data is too much to save offline. Giving users control (whether on an individual post basis or in bulk) seems like one way to deal with that question.