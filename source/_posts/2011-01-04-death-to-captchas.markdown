---
comments: true
date: 2011-01-04 19:47:17
layout: post
slug: death-to-captchas
title: Death to Captchas
wordpress_id: 854
tags:
- accessibility
- usability
- users
---

A brief exchange on Twitter led me to think about one of the things I most definitely do not love about the internet—captchas. While I won’t go quite as far as to say captchas are the spawn of Satan (let’s wait for the DNA tests before we go that far) I will say that I believe they are not only the wrong solution, but an arrogant and inconsiderate one.

Firstly, it is worth pointing out that captchas are nowhere near as secure as you’d like to believe. Back in 2005, the [W3C pointed out](http://www.w3.org/TR/turingtest/) that third party services had demonstrated that most captcha services could be defeated with 88%-100% accuracy by using some simple OCR. I suspect that since then captchas have probably gotten a bit better, but spam bots probably have as well.

Then of course there are the accessibility issues. In particular, visitors who suffer from blindness, dyslexia or low vision will struggle greatly with a captcha system. You can aid them slightly by offering an audio alternative, but the audio used in captcha systems tends to be rather noisy and doesn’t help a great deal. Audio alternatives are particularly useless if you are in a noisy environment such as a coffee shop or office. To make matters worse, these audio alternatives are often not provided in a way that is accessible to the very audience that needs them the most.

Let’s assume, however, that all of our visitors have good vision. Captchas are still the wrong solution because they put the onus on the user to figure them out in order to successfully continue. Spam is not the users problem, it is the problem of the business that is providing the site. It is arrogant and lazy to try and push the problem onto a site’s visitors.

Captchas cause a great deal of frustration for many users. On average, it takes around [10 seconds to solve a captcha correctly](http://www.google.com/recaptcha/learnmore). I have watched many a savvy user struggle 2, 3, even 4 times to correctly solve a captcha. That’s no way to reward someone who is trying to interact with your site.

The cute ‘solution’ to wasting 10 seconds of a users time was to make that time somehow productive. So [reCAPTCHA](http://www.google.com/recaptcha) came into play. reCAPTCHA's show two words. <del>One word can be deciphered using OCR. The second is a word, taken from a book, which OCR failed to decipher.</del> Correction - both words are originally undecipherable by OCR. One word, the 'control' word, is a word that has been identified consistently and is therefore 'solved'. The second word is one that has yet to have a large enough base of consistent answers to correctly determine what word it is.

The idea is that if the user correctly solves the more legible word, the reCAPTCHA system will assume they are probably right about the second word. By showing that second word to a large number of people and comparing results, they can figure out what that word should be. It’s crowd sourcing the digitization of books. Of course it too completely ignores the real issue: the assumed new-found ‘productivity’ doesn’t benefit the user. In fact, reCAPTCHA systems make the user get frustrated for no reason whatsoever about a word that even the reCAPTCHA system itself cannot decipher!

In conclusion, captchas are inaccessible, inconsiderate and frustrating. In addition, most captchas are not as secure as you would like to believe. A far more elegant solution is to use some sort of filtering system (like Akismet). Such a system can run behind the scenes and work without complicating the user experience.

It’s time to kill off captchas and stop punishing users for trying to interact with our sites.
