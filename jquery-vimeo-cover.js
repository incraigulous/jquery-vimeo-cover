/**
 * Created by Craig Wann on 2/16/15.
 */
var VimeoCover = new Class({
    defaults: {
        selector: '.vimeo-cover'
    },
    options: {},
    element: null,
    lastWidth: 0,

    initialize: function (element, options) {
        jQuery(element).data('vimeoCover', this);
        this.options = $.extend({}, this.defaults, options);
        (new Image()).src = jQuery(element).attr('vimeo-placeholder');

        this.resize(element);
        this.loadBackground(element);

        jQuery(element).click($.proxy(function (event) {
            this.turnOn(element);
        },this));

        jQuery(window).resize($.proxy(function (event) {
            this.resize(element);
        },this));
    },

    loadBackground: function(element) {
        jQuery(element).css('transition', 'opacity 2s ease-out');
        jQuery(element).css('opacity', 0);
        var imageUrl = jQuery(element).attr('vimeo-placeholder');
        var preload = [imageUrl];
        var promises = [];
        for (var i = 0; i < preload.length; i++) {
            (function(url, promise) {
                var img = new Image();
                img.onload = function() {
                    promise.resolve();
                };
                img.src = url;
            })(preload[i], promises[i] = $.Deferred());
        }
        $.when.apply($, promises).done(function() {
            jQuery(element).removeClass('preloader');
            jQuery(element).css('background-image', "url('"+imageUrl+"')");
            jQuery(element).css('background-size', 'cover');
            jQuery(element).css('opacity', 1);
        });
    },

    resize: function(element) {
        if ((this.lastWidth == jQuery(element).width()) && (jQuery(element).height())) {
            return;
        }
        this.lastWidth = jQuery(element).width();
        jQuery(element).css('height', (56.22/100*jQuery(element).width()));
        this.turnOff(element);
    },

    turnOn: function (element) {
        var self = this;
        $(this.options.selector).each(function(index) {
            self.turnOff(this);
        });
        jQuery(element).html('<iframe src="https://player.vimeo.com/video/' + jQuery(element).attr('vimeo-id') + '?title=0&byline=0&portrait=0&autoplay=1" width="' + jQuery(element).width() + '" height="' + jQuery(element).height() + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen autoplay=true></iframe>');
        jQuery(element).addClass('on');
    },

    turnOff: function (element) {
        jQuery(element).removeClass('on');
        jQuery(element).empty();
    }

});
