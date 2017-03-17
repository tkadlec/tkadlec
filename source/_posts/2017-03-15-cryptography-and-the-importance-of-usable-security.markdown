---
layout: post
title: "Cryptography and the importance of usable security"
date: 2017-03-15 22:01:45 -0500
comments: true
categories: 
tags:
- security
- usability
---
Recently I taught my daughters some extremely basic cryptography, and it was a great reminder of how critical it is for security to be usable.

There are some great ciphers I could have taught them, but they're still little, so I started simple. I  them the rail fence cipher (some may know it as a zigzag cipher which is probably a better description). With a rail fence cipher, you write the message you want to communicate in a zigzag pattern, letter by letter.

For example, let's say we want to use this cipher on the message "hello world". We would do this by placing the letter "H" on the first line, then the letter "e" on the second line. Then we'd move back up and put the "l" on the first line, followed by another "l" on the second line. The result would be something like this:

<pre class="railFence">
H L O O R 
 E L W L D
</pre>

Now that we have the message in two lines, we place the second row of characters after the first row, and we have our encrypted message:

<p class="cipher">HLOORELWLD</p>

The rail fence cipher can involve as many "rails" as we would like. For example, using a three rail cipher our message would look a bit different. We would add another level to our zigzag:

<pre class="railFence">
H  L  O  D
 E  O  R
  L  W  L
</pre>

Our encoded message would end up being a little different:

<p class="cipher">HLODEORLWL</p>

While it offers very minimal security, the rail fence cipher is pretty straightforward and easy to learn. My girls took to it right away and started using it on everything: the names of their siblings, food requests—my eight-year-old even wrote her mom a letter using it.

Compared to the approaches available to us today, it may even feel like a bit of a stretch to call it cryptography. As simple as it seems now, this was once a dominant form of encryption.

In his book, ["The Code Book,"](http://www.penguinrandomhouse.com/books/168002/the-code-book-by-simon-singh/9780385495325/) Simon Singh discusses how cryptography started with simple *transposition* (swapping the order of letters, like the rail fence cipher does) before evolving to *monoalphabetic ciphers*—a cipher that  involves substituting one letter for another.

Probably the most well-known example of a monoalphabetic cipher is the Caeser cipher which involves substituting each letter for a letter a certain number of characters up or down in the alphabet. You may shift each letter, for example, three down. So "H" becomes "K", "E" becomes "H" and so on. "hello world" now looks like this:

<p class="cipher">KHOORZRUOG</p>

It's more secure than a transposition cipher, but only slightly. 

The monoalphabetic cipher supplanted transposition at the forefront of cryptography and remained there for quite some time. A more secure alternative did exist. A few folks realized that you could have a *polyalphabetic cipher*—shifting each letter not by the same amount, but by varying amounts. You were essentially applying different Ceaser shifts for each letter in your message.

A well-known example is the [Vigenére cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher). Using the Vigenére cipher involved looking up each letter that you wanted to substitute in a Vigenére table. The sender created a keyword that would indicate how many letters to shift each letter in the message, and, using the table, walk through the message letter by letter to convert it. 

<table cellspacing="0" class="vigenere">
    <caption>A Vigenére table</caption>
  <thead><tr>
    <th scope="col"></th>
    <th scope="col">A</th>
    <th scope="col">B</th>
    <th scope="col">C</th>
    <th scope="col">D</th>
    <th scope="col">E</th>
    <th scope="col">F</th>
    <th scope="col">G</th>
    <th scope="col">H</th>
    <th scope="col">I</th>
    <th scope="col">J</th>
    <th scope="col">K</th>
    <th scope="col">L</th>
    <th scope="col">M</th>
    <th scope="col">N</th>
    <th scope="col">O</th>
    <th scope="col">P</th>
    <th scope="col">Q</th>
    <th scope="col">R</th>
    <th scope="col">S</th>
    <th scope="col">T</th>
    <th scope="col">U</th>
    <th scope="col">V</th>
    <th scope="col">W</th>
    <th scope="col">X</th>
    <th scope="col">Y</th>
    <th scope="col">Z</th>
    </tr>
  </thead>
  <tbody><tr>
    <th scope="row">A
    </th><td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
  </tr>
  <tr>
    <th scope="row">B
    </th><td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
  </tr>
  <tr>
    <th scope="row">C
    </th><td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
  </tr>
  <tr>
    <th scope="row">D
    </th><td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
  </tr>
  <tr>
    <th scope="row">E
    </th><td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
  </tr>
  <tr>
    <th scope="row">F
    </th><td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
  </tr>
  <tr>
    <th scope="row">G
    </th><td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
  </tr>
  <tr>
    <th scope="row">H
    </th><td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
  </tr>
  <tr>
    <th scope="row">I
    </th><td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
  </tr>
  <tr>
    <th scope="row">J
    </th><td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
  </tr>
  <tr>
    <th scope="row">K
    </th><td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
  </tr>
  <tr>
    <th scope="row">L
    </th><td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
  </tr>
  <tr>
    <th scope="row">M
    </th><td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
  </tr>
  <tr>
    <th scope="row">N
    </th><td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
  </tr>
  <tr>
    <th scope="row">O
    </th><td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
  </tr>
  <tr>
    <th scope="row">P
    </th><td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
  </tr>
  <tr>
    <th scope="row">Q
    </th><td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
  </tr>
  <tr>
    <th scope="row">R
    </th><td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
  </tr>
  <tr>
    <th scope="row">S
    </th><td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
  </tr>
  <tr>
    <th scope="row">T
    </th><td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
  </tr>
  <tr>
    <th scope="row">U
    </th><td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
  </tr>
  <tr>
    <th scope="row">V
    </th><td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
  </tr>
  <tr>
    <th scope="row">W
    </th><td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
  </tr>
  <tr>
    <th scope="row">X
    </th><td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
  </tr>
  <tr>
    <th scope="row">Y
    </th><td>Y</td>
    <td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
  </tr>
  <tr>
    <th scope="row">Z
    </th><td>Z</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
  </tr>
</tbody></table>

If our keyword was "taco" (because why not) and we wanted to encode "hello world", we'd start by finding "h" in our first row, then find the "t" in the first column. Where that row and column intersect, we get our first letter: "a".

Then we would do the same for "e" and "a", "l" and "c", and so on—repeating "taco" as many times as necessary to encode our message. Eventually, we'd end up with:

<p class="cipher">AENZHWQFED</p>

The receiver would have to undo this process, using the keyword to determine the shift and then the table (or some math) to help them decode.

It was much more secure than monoalphabetic ciphers, yet monoalphabetic ciphers remained the most common cipher. For some, monoalphabetic ciphers were still considered "good enough" (despite the many lives lost to decoded messages). The primary reason for the slow uptake of polyalphabetic ciphers, however, was just how much more difficult they were to use. It was much more complicated and took much longer to apply a polyalphabetic cipher than a monoalphabetic cipher. And so the cipher languished mostly unused for nearly two centuries. Usability trumping security.

Security has never been more important than it is today, and general awareness—or at least acknowledgement—of its importance does seem to be trending up. For many, though, security is still perceived to be a bit of a black art. It's a field that has been mostly technically driven, done by some other team within the organization. You know them. They're the ones who always swoop in to tell you why you can't ship that one feature you wanted to build.

This has to change. Security cannot be something that is pushed off to only a select group of people in your organization. Like we're learning over and over, when something is this critical, everyone needs to be involved.

That's particularly true of anyone who is paying attention to the actual experience of using your site (which should be everyone, but that's a battle for a different day). Solving security without consideration to usability simply won't work. That's how you end up with the [most common password being '123456'](http://www.telegraph.co.uk/technology/2016/01/26/most-common-passwords-revealed---and-theyre-ridiculously-easy-to/), and it's how a more secure cipher ends up in obscurity for centuries.

It doesn't matter how secure something is if no one can use it in the first place.