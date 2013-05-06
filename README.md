# Ratchet

**Ratchet is a Chrome extension which hides all [HackerNews](http://news.ycombinator.com) comments that are below an 8th grade reading level.**

More information can be found in [this post](http://micahmcfarland.com/2013/04/13/introducing-ratchet.html).

# Installation

[Click here](http://mam-cdn.s3.amazonaws.com/ratchet/ratchet-0_1.crx) to download the .crx file, which I've hosted in an S3 bucket.

To install, you'll have to drag and drop this file into your Extensions window in Chrome, found under Tools > Extensions. Chrome will complain if you just click on it. That's a security thing.

It will warn you that this extension can "access your data on news.ycombinator.com" -- this is about half true. It doesn't do anything with YOUR data, specifically. Just traverses the DOM tree looking for `span` elements with class `comment`, then acts upon them depending on what's inside.

## Alternate Installation

Clone this repository and load it into Chrome by going to Tools > Extensions and clicking "Load Unpacked Extension"

# Important Note

This works best for just browsing HN (maybe on your work computer), and I in no way suggest using it while actually trying to participate in conversations. It can break the “parent-child” style of comments, as well as make you miss important parts of the discussion. Just because a comment is easy to read does not mean it’s inherently worthless, and in some cases these are the most important ones. Such is the case when trying to explain something really technical in simple terms. Conversely, some of the most inane comments of all can escape this filter by not using any punctuation (the script will read it as one long sentence).

# To Do

- Add a small "configuration" panel
- Add an on/off switch
- Expand this to other popular sites. I would have done YouTube, except by definition, it would have hidden every single comment.