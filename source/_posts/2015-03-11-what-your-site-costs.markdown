---
layout: post
title: "What your site costs users"
date: 2015-03-11 14:59
comments: true
categories: 
tags:
- performance
- global
---
As our understanding of performance on the web improves, we are starting to shift from the traditional metrics we've focused on. Things like load time and page weight are rightfully being given less focus as we move to more mature metrics like SpeedIndex that provide a better understanding of perceived performance. 

But that doesn't mean we can dismiss page weight altogether. The web is not free. Data has a cost and that cost varies around the world. We've always sort of guessed that sites could be a little expensive in some areas, but other than a few helpful people tweeting how much certain sites cost while roaming, there wasn't much in the way of hard data. So, I built [What Does My Site Cost?](http://whatdoesmysitecost.com).

The [ITU](http://www.itu.int/en/Pages/default.aspx) has data about the cost of mobile data in various countires and [World Bank](http://data.worldbank.org/) provides some great information about the economic situation around the world. Pairing the two together, we can get an idea of how much things might cost—and what that means in relation to the overall economy in those countries. I'm not particularly good with economics, but thankfully for me [Victoria Ryan](https://twitter.com/wizardpants) is and she was willing to help me work through the details to make sure the numbers actually *mean* something.

For starters, the site is going to report three metrics.

1. **Cost in USD**<br/>What is the approximate cost to the user of loading that page around the world (based on information about the cost of 500MB of data).
2. **Cost in USD, PPP**<br/>What is the approximate cost to the user of loading that page around the world (based on information about the cost of 500MB of data), with Purchasing Power Parity factored in. This gives a better representation of relative costs based on the differences in values of currency.
3. **Cost as a % of GNI, PPP**<br/>Using the <abbr title="Purchasing Power Parity">PPP</abbr> cost already calculated, this metric compares that value to the daily Gross National Income per capita to factor in affordability. 

## Running Tests
Thanks to the always helpful [Pat Meenan](https://twitter.com/patmeenan), the site is powered by everyone's favorite performance testing tool: [WebPageTest.org](http://webpagetest.org). You can choose to run the test directly from [What Does My Site Cost?](http://whatdoesmysitecost.com). If you do, WebPageTest will run the test using Chrome mobile over a 3G network and you'll be able to jump to those results once the test has completed.

{% fig Figure 1: Site cost indicators are now available directly in WebPageTest results. lg-right %}
	{% img /images/wpt-sitecost.png Site costs within WebPageTest %}
{% endfig %}

But what really has me excited is the integration directly into WebPageTest. If you use WebPageTest to analyze your site, you'll see a new "Cost" column in your test results giving you an indicator of how (relatively) expensive your site is. Following the link there will bring you back to What Does My Site Cost for a deeper dive. In other words, you don't have to go out of your way to find out how much a site might cost—the information will be seamlessly presented to you whenever you test a page.

## What's Next?
For starters, I want to get more countries in there. I'm working on that. I also hope to add in information about roaming costs (almost scared to see how bad those numbers will be) but I have to track down more reliable data there first. That's a little trickier (so it seems), but I'm sure it can be found somewhere.

As I mentioned before, I'm not very good with economics so if one of you out there are and have recommendations for additional metrics to show definitely let me know.





