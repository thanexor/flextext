flextext
========

A tiny jQuery plugin to shrink text size when overflow would normally occur.  It's intention is to shrink the size of varying-width localized texts to fit inside small spaces.

#### It's logic is, more or less:
Is the text wider than it's container when on one line?

* Yes -- downsize it by one pixel.
* No -- keep it at the size it currently is.

## Usage
Just call .flextext() on your jQuery selected elements:

    $(document).ready(function() {
        $('p').flextext();
    });

## Options
Right now, options are just:

* minFontSize -- integer, default 5