Meeks-PRF-web
=============

Count votes for a Meek's method RCV / STV election contest entirely in
your own browser with a standalone web page.

## Table of Contents

  * [Quick start](#quick-start)
  * [Introduction](#introduction)
  * [Version](#version)
  * [Features](#features)
  * [Repository structure](#repository-structure)
  * [Browser support](#browser-support)
  * [Licensing](#licensing)


## Quick start

Visit the
[tabulation web page
](https://davidcary.github.com/Meeks-PRF-web/count-votes/)
which is also linked to from
[this project's GitHub web pages
](https://davidcary.github.com/Meeks-PRF-web/).
Those pages also provide links to other helpful resources.

To start doing a tabulation,
just go to the tabulation web page,
then click on the "Count Votes" button
to tabulate the small, pre-loaded sample contest.
Scroll down to view the results.

Data for other sample contests are
in the __`samples`__ directory of this project
and are linked to from this project's GitHub web pages.

For your own election contest, you can:

+ Read data from a file on your computer.
  
+ Copy and paste data from another source.
  
+ Manually enter or adjust parameters in existing data.

Additional information about how to use the tabulation web page
is in the tabulation web page's "Help" panel.


## Introduction

With the tabulation web page, you can provide information
describing candidates, ballots, and other parameters
for a ranked choice voting (RCV) / single transferable vote (STV)
election contest.
You can then count the votes using
the Proportional Representation Foundation's
[reference rule for Meek's method
](https://prfound.org/resources/reference/reference-meek-rule/)
and various optional extensions to that rule.

The web page can be used as a standalone tool.
The vote counting is done entirely client-side in your browser.
Other than initially providing the web page resources
(HTML, CSS, and Javascript files) the web page is not dependent on
any web server and does not communicate across networks
with other computers.

The web page uses the 
[Meeks-PRF-js](https://github.com/DavidCary/Meeks-PRF-js) tabulation engine
which is also available to developers as an NPM package,
[meeks-prf-js](https://www.npmjs.com/package/meeks-prf-js).

Meek's method is a form of RCV / STV that supports proportional
representation in multi-winner elections.
It can provide a fairer and more comprehensive transfer of surplus
than other forms of STV,
including variations of the weighted inclusive Gregory method (WIGM)
which also involves transfers of surplus as fractions of a vote.
Any form of STV tends to provide fairer results than other
traditional election methods
and greatly reduces the practical opportunities for tactical
voting.
However Meek's method tends to accomplish these goals
better than other forms of STV.
However the trade-off is that
Meek's method is more computationally intensive,
to the extent that it is typically not practical to count votes with
Meek's method without the assistance of a computer for contests with
more than a few winners.

The reference rule published by the Proportional Representation
Foundation is particularly significant because it ensures that
independent but conforming implementations will always produce the same
result, provided that any ties are consistently resolved.


## Version

This is version 1.0.0 of the Meeks-PRF-web project. It has stable, well
tested functionality.
Unlike earlier versions, this version is intended for general use.


## Features

The tabulation web page
provides an easy, self-serve approach
to independently tabulate votes using Meek's Method.
Some of its noteworthy features include:

 + It is easy to use and only requires basic computer skills.

 + It provides three levels of detail for results reporting:
 
     + Who won.

     + Candidate statuses -- who was elected or defeated in which rounds
       and with how many votes.

     + A table of round-by-round vote totals.

 + Results that can be easily copied and pasted into a spreadsheet
   program for other customized formatting of results and graphical
   presentations.

 + Support for vacancy re-tabulations by designating some candidates
   as being either excluded from the contest or protected from defeat.
 
 + Automated conversion of ballot files from an ElectionBuddy format.
 
 + High levels of availability, reliability, accountability, and security
   with a browser-based, open source solution 
   from an independently hosted repository.
 

## Repository structure

The __`src`__ directory contains the Javascript programs that handle
the web page interactions and that do the vote counting.

The __`docs`__ directory contains the Github web pages.
The tabulation web page is in the __`docs/count-votes`__ subdirectory.
Its javascript files are built from the files in the __`src`__ directory
using Webpack and Babel developer tools.

Several sample files are stored in the __`samples`__ directory.


## Browser support

The tabulation web page will work best in a
modern, standards-compliant web browser. 
The following are the supported browsers
and their lowest supported version numbers:

+ Android: 4
+ Chrome: 49
+ Edge: 17
+ Firefox: 66
+ IE: 11
+ IOS: 9.3
+ Opera: 60
+ Safari: 11.1
+ Samsung: 4

Tabulations running in the background are not available
with Internet Explorer.

## Licensing

This project is licensed under
the Apache License, Version 2.0 (the "License"),
except for those files that are labeled as being in the public domain.
You may not use contents of this repository except in
compliance with the License.
A copy of the License is in the LICENSE file and may also be obtained at:

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Copyright 2016-2019 David Cary; licensed under Apache License, Version 2.0

