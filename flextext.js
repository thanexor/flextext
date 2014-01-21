/*
 * flextext
 * 1.0, January 14th, 2014
 *
 * Incrementally downsize texts that would normally overflow their container.
 *
 * Copyright 2014 Thane Woidan, thanewoidan.com
 * Released under the MIT License
 */

(function ( $ ) {
        "use strict";

        $.fn.flextext = function( options ) {

            var opts = $.extend({}, $.fn.flextext.defaults, options);

            function fontSize (sizeInt) {
                return '' + sizeInt + 'px'
            }

            return $(this).each(function() {
                var $this = $(this);
                var $parent = $this.parent();

                var origFontSize = $this.css('font-size');
                var currentFontSize = parseInt(origFontSize.replace('px', ''));
                
                // no wrapping, so width can be measured
                $this.css({'white-space': 'nowrap'});
                $this.css({'display': 'inline-block'});

                // decrement font size until the minimum
                for (; currentFontSize >= opts.minFontSize; currentFontSize--) {
                    $this.css({'font-size': fontSize(currentFontSize) });

                    if ($this.width() < $parent.width()) {
                        break;
                    }
                };

                $this.css({'white-space': '' });
                $this.css({'display': '' });
            });
        };

        $.fn.flextext.defaults = {
            allowBreaks: false,
            minFontSize: 5
        };

}(jQuery));