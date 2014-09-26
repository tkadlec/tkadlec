---
layout: post
title: "Performance Budgeting with Grunt"
date: 2014-05-22 10:13
comments: true
categories: 
tags:
- performance
- grunt
---
It seems like the idea of [performance budgeting](http://timkadlec.com/2013/01/setting-a-performance-budget/) has been gaining quite a bit of traction over the past year. This is awesome! The best way to improve web performance is to prioritize it from the get-go, and that's exactly what a performance budget helps you do. 

But having the budget set in a document somewhere doesn't accomplish much. It needs to be enforced to really matter.

I'm a big fan of [Grunt.js](http://gruntjs.com/) and use it on pretty much every project at this point. I did a lot of digging and while there are some plugins that come close, nothing quite fit what I wanted: different connection speeds, various metrics to budget, and the ability to fail a build if those thresholds aren't met. 

I'm also a big fan of [WebPageTest](http://www.webpagetest.org/), which has a slick [Node API](https://github.com/marcelduran/webpagetest-api) courtesy of Marcel Duran. So, armed with the API and Jeff Lembeck's helpful guide to [creating a grunt plugin](http://www.jefflembeck.com/how-do-i-release-my-own-grunt-plugin), I decided to throw together a simple little task for performance budgeting.

## Introducing grunt-perfbudget

[grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget) is a task for Grunt.js that helps you to enforce a performance budget. Using WebPagetest in the background, the task lets you set budgets for a number of different metrics: SpeedIndex, visually complete, load time, etc.

For example, if you wanted to make sure the SpeedIndex of Google was below 1000, you would add the following to your Gruntfile.js:

<pre>
<code class="language-javascript">
perfbudget: {
	foo: {
		options: {
			url: 'http://google.com',
			key: 'YOUR_API_KEY',
			budget: {
				SpeedIndex: '1000'
			}
		}
	}
},
</code>
</pre>

When run, grunt-perfbudget tests the URL's you specify using WebPagetest and compares the results with the defined budget. If the budget passes, it outputs the results to the console and goes on it's merry way. If the budget fails, it errors telling you what failed and provides a link to the full results on WebPagetest so you can dig deeper if you'd like.

I haven't exposed everything in the WPT Node API at the moment, but there is some ability to customize your budget tests beyond metrics. You can:

- Specify a private instance of WebPagetest (Highly recommended! So much power there.)
- Specify a test location
- Specify a preset connection type
- Specify your own custom connection settings

## Getting started
grunt-perfbudget is a Grunt.js task which means you will need to have Grunt installed to use it. From there you can install grunt-perfbudget using [NPM](https://www.npmjs.org/), the Node.js package manage utility. You can find more information on the [readme](https://github.com/tkadlec/grunt-perfbudget).

It does take a few moments for the test to run, so I don't recommend using the task in any sort of watch process. Instead, using it in a more deliberate deploy/build process makes more sense. It also works nicely as a standalone task for quick checks in between formal builds.

## Going forward
At the moment, grunt-perfbudget is super simple and does just enough to fit what I needed. Hopefully it's useful for you as well.

There's a *ton* of potential for improvement. WebPagetest is incredibly powerful so there are a lot of different things we could do here. There are also some simple things that need doing. This is my first attempt at a Grunt task and no doubt there are plenty of things that could probably be cleaned up. For example, because I am a horrible person I haven't actually written any tests for the plugin. (I know. I'm disappointed in me as well.)

If you have any ideas on what to do to improve the tool, or want to roll up your sleeves and tackle a few improvements yourself, hop on over to Github and [jump right in](https://github.com/tkadlec/grunt-perfbudget/issues).