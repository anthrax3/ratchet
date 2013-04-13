# Ratchet

**Ratchet is a Chrome extension which hides all [HackerNews](http://news.ycombinator.com) comments that are below an 8th grade reading level.**

# Installation

[Click here](http://mam-cdn.s3.amazonaws.com/ratchet/ratchet-0_1.crx) to download the .crx file, which I've hosted in an S3 bucket.

To install, you'll have to drag and drop this file into your Extensions window in Chrome, found under Tools > Extensions. Chrome will complain if you just click on it. That's a security thing.

It will warn you that this extension can "access your data on news.ycombinator.com" -- this is about half true. It doesn't do anything with YOUR data, specifically. Just traverses the DOM tree looking for `span` elements with class `comment`, then acts upon them depending on what's inside.

## Alternate Installation

Clone this repository and load it into Chrome by going to Tools > Extensions and clicking "Load Unpacked Extension"

# To Do

- Add a small "configuration" panel
- Expand this to other popular sites. I would have done YouTube, except by definition, it would have hidden every single comment.