---
layout: post
title: "HSTS and Let's Encrypt"
date: 2016-01-04 12:52:33 -0600
comments: true
categories: 
tags:
 - security
 - https
---
I recently gave the [Let’s Encrypt](https://letsencrypt.org/) client a try and [wrote up how that went](https://timkadlec.com/2015/12/taking-lets-encrypt-for-a-spin/). One of the follow-up questions that popped up was about HTTP Strict Transport Security (HSTS) and whether Let’s Encrypt’s helps with it. Since the question came up several times, I thought it would be worth writing up.

## What is HSTS?
While the SSL certificate is a big boost for security in its own right, there is still a potential hole if you are redirecting HTTP content to HTTPS content.

Let's say someone tries to request [wpostats.com](https://wpostats.com) (diagrammed below). They may type it into the URL bar without the protocol (defaulting the request to HTTP) or they have it bookmarked from before it used HTTPS. In this case, the browser first makes the request to the server using a non-secure link (step 1). Then the server responds by redirecting the browser to the HTTPS version instead (step 2). The browser then repeats the request, this time using a secure URL (step 3). Finally, the browser responds with the secure version of the site (step 4).

{% fig Trying to load a secure asset using a non-secure URL exposes a gap in security. banner %}
	{% img /images/hsts-vulnerability.svg Diagram of a non-secure request being redirected to HTTPS %}
{% endfig %}

During the initial exchange, the user is communicating with the non-encrypted version of the site.  This little gap could potentially be used to conduct a man-in-the-middle attack and send the user to a malicious site instead of the intended HTTPS version. This gap can occur every single time that person tries to access an asset using a non-secure URL.

HTTP Strict Transport Security (HSTS) helps to fix this problem by telling the browser that it should never request content from your site using HTTP. To enable HSTS, you set a `Strict-Transport-Security` header whenever your site is accessed over HTTPS. Here's the line I added to my virtualhost configuration for [wpostats.com](https://wpostats.com):

`Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains; preload"`

With this line added to my server configuration, any asset served over HTTPS will include the following header:

`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

The header will only be applied if sent over HTTPS. If it’s sent over HTTP it’s unreliable (an attacker could be injecting/removing it) and so the browser will choose to ignore it. As a result, that initial redirect still has to take place. The difference is that now, after the browser requests the content using a secure URL, the server can attach the HSTS header telling the browser to never bother asking for something over HTTP again, sealing off that vulnerability for any future access from that user. As an added bonus, with the redirect out of the way we get a little performance boost as well.

The header has three options (each of which were used in my example above):

`Strict-Transport-Security: max-age=expireTime [; includeSubDomains] [;preload]`

### max-age
The `max-age` parameter is mandatory and specifics how long the browser should remember that this site is only supposed to be accessed over HTTPS.

The longer the better here. Let’s say you set a short `max-age` of one hour. The user accesses your secure site in the morning and the browser now seals up the vulnerability. If they then go to your site using a non-secure URL in the afternoon, the `Strict-Transport-Security` header is outdated, meaning the vulnerability is wide open again.

Twitter sets their `max-age` to a whopping 20 years. I chose two years for mine, which most likely says something about me having committment issues or something.

### includeSubDomains
The `includeSubDomains` parameter is optional. When included, it tells the browser that the HSTS rules should apply to all subdomains as well.

### preload
Some of you may have noticed a kink in the HSTS armor. If a user has a fresh local state for any reason (`max-age` expires, haven’t visited the site before) then that first load is still vulnerable to an attack until the server has passed back the HSTS header.

To counter this, each major modern browser has a preloaded HSTS list of domains that are _hardcoded in the browser_ as being HTTPS only. This allows the browser to know to request only HTTPS assets from your URL without having to wait for your web server to tell them. This seals up that last little kink in the armor, but it does carry some significant risk.

If the browser has your domain hardcoded in the HSTS list and you need it removed, it may take months for the deletion to make its way out to users in a browser update. It’s not a simple process. 

For this reason, getting your domain included in the preload list requires that you [manually submit the domain](https://hstspreload.appspot.com/) and that your HSTS header includes both the `includeSubdomains` parameter as well as this final `preload` parameter.

## Does the Let’s Encrypt client enable HSTS?
The Let’s Encrypt client _can_ enable HSTS if you include the (currently undocumented) `hsts` flag.

`./letsencrypt-auto --hsts`

The reason why it’s not enabled by default is that if things go wrong HSTS can cause some major headaches.

Let’s say you have HSTS enabled. At some point something (pick a scary thing…any scary thing will do) goes wrong with your SSL configuration and your server is unable to serve a secure request. Your server cannot fulfill the secure request, but the browser (because of the HSTS header) cannot request anything that is insecure. You're at an impasse and your visitor cannot see the content or asset in question. This remains the case until either your SSL configuration is restored or the HSTS header expires. Now imagine you're running a large site with multiple teams and lots of moving parts and you see just how scary this issue could be.

Because of this risk, HSTS has to be an option that a user must specify in Let’s Encrypt—despite its importance.

## Room for improvement
That’s not to say the process couldn’t be improved. The GUI version of the client currently asks you a variety of questions as you setup your certificate. One of those questions asks if you would like to redirect all HTTP traffic to HTTPS.

{% fig An example of the Let's Encrypt GUI asking the developer to decide whether to make everything HTTPS or keep HTTP around. banner %}
	{% img /images/gui-secure.png Screenshot of GUI for Secure everywhere choice on Let's Encrypt %}
{% endfig %}

If the developer decides to redirect all HTTP traffic to HTTPS, I would love to see the very next question be: “Would you like Let’s Encrypt to setup HSTS?”, probably with a warning encouraging the developer to make sure they have all content on HTTPS.

Defaults matter and most people will [stick with them](http://www.dangoldstein.com/papers/DefaultsScience.pdf). HSTS is important and HTTPS is...well...incomplete without it. If we're serious about HTTPS Everywhere then we need to be just as serious about enabling HSTS as we are about making sure everyone is serving content over HTTPS. Finding a way to encourage its use whenever possible would go a long way towards boosting security on the web as well as adhere to one of the primary principles of the Let’s Encrypt initiative (emphasis mine): 

> Let’s Encrypt will serve as a platform for advancing TLS security best practices, both on the CA side **and by helping site operators properly secure their servers.**

<div class="note">
	Icons used in the illustration are from The Noun Project: <a href="https://thenounproject.com/term/computer/115/">Computer by Edward Boatman</a>, <a href="https://thenounproject.com/term/lock/163450/">Unlocked Lock by Marta Ambrosetti</a>, <a href="https://thenounproject.com/term/lock/163449/">Lock by Marta Ambrosetti</a> and <a href="https://thenounproject.com/term/server/156852/">Server by Riccardo Avanzi</a>.
</div>