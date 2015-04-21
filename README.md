jQuery Vimeo Cover
====================

Use a placeholder element for Vimeo videos and inject the video embed when it's clicked. This allows you to use a custom cover image until the video is played clicked instead of displaying the Vimeo embed.

##How to use it
Instantiate a new VimeoCover object and pass in your element. You can also pass an options object as your second parameter but this is optional.

````javascript
new VimeoCover($('.vimeo-cover'), {
        selector: '.vimeo-cover', //The vimeo-cover selector. This is used to target all videos on the page to make sure only one video plays at a time.
    });
````

###Multiple instances on the same page

````javascript
$('.vimeo-cover').each(function(index, el) {
    $vimeoCover = new VimeoCover(el);
});
````

##Options

**selector:** The vimeo-cover selector. This is used to target all videos on the page to make sure only one video plays at a time. *Default: .vimeo-cover*
