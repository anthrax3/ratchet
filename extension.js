
    $("span.comment").each(

    function () {
        var allwords = $(this).text().split(" "); // all words in the comment
        var wordCount = allwords.length; // word count of comment
        var syllableCounter = new Array(); // initialize the syllable counter

        // this is the syllable counter
        allwords.forEach(function (word) {
            word = word.toLowerCase();
            word = word.replace(/[^a-z0-9\s]/gi, ''); // remove punctuation
            if (word.length <= 3) { // if a word has 3 or fewer letters...
                syllableCounter.push(1); // ...chalk up "1" syllable...
            } else if (word.length > 3) { // ...then go to the next one.
                word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
                word = word.replace(/^y/, '');
                word = word.match(/[aeiouy]{1,2}/g);
                if ( word == null ) {
                	syllableCounter.push(1);
                } else {
	                word = word.length;
  	 	            syllableCounter.push(word);
  	 	        }
            }
        });

        // this bit is for adding up the amount of syllables in an element
        var syllableCount = 0;
        $.each(syllableCounter, function () {
            syllableCount += this;
        });

        // now attempting to count the number of sentences

        sentenceCounter = new Array();
        allwords.forEach(function (sentence) {
            /* TODO: Improve this sentence matching RegExp. There's a really nice suggestion here: http://stackoverflow.com/questions/5032210/php-sentence-boundaries-detection
            */
            sentence = sentence.match(/[^\s](\.|\!|\?)(?!\w)/g);
            if( sentence !== null ) {
                sentenceCounter.push(sentence);
            }
        });
        
        var sentenceCount = sentenceCounter.length;

        // this is a roundabout way of doing this, but I'm close
        // to finished and tired of messing with it.
        var wordsOverSentence = wordCount/sentenceCount;
        var syllablesOverWords = syllableCount/wordCount;
        var flesch1 = 0.39*wordsOverSentence;
        var flesch2 = 11.8*syllablesOverWords;
        var fleschTotal = flesch1 + flesch2 - 15.59;
        var GradeLevel = Math.round(fleschTotal);

        if ( GradeLevel <= 8 ) {
        	// on HN, we have to go a few levels up the DOM tree
        	// so that we can hide the entire table cell
        	// $(this).parent().parent().parent().parent().parent().parent().addClass("hidden")
            // this is only for testing
             $(this).addClass("attention");
        };

    });
