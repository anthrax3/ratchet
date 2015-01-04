# Ratchet

**Ratchet is a Chrome extension which hides all [HackerNews](http://news.ycombinator.com) comments that are below an 8th grade reading level.**

More information can be found in [this post](http://micahmcfarland.com/2013/04/13/introducing-ratchet.html).

# Installation

Ratchet is available on the Chrome Web Store.

<a href="https://chrome.google.com/webstore/detail/ratchet/lidjafppolfnemnbgonaiicoojbjbcmn" target="_blank"><img src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_206x58.png" alt="Get Ratchet on the Chrome Web Store" ></a>

## Alternate Installation

Clone this repository and load it into Chrome by going to Tools > Extensions and clicking "Load Unpacked Extension"

# Important Note

This works best for just browsing HN (maybe on your work computer), and I in no way suggest using it while actually trying to participate in conversations. It can break the “parent-child” style of comments, as well as make you miss important parts of the discussion. Just because a comment is easy to read does not mean it’s inherently worthless, and in some cases these are the most important ones. Such is the case when trying to explain something really technical in simple terms. Conversely, some of the most inane comments of all can escape this filter by not using any punctuation (the script will read it as one long sentence).

# To Do

- Add a small "configuration" panel
- Add an on/off switch
- Expand this to other popular sites. I would have done YouTube, except by definition, it would have hidden every single comment.