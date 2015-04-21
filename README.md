jQuery Vimeo Cover
====================

Use a placeholder element for Vimeo videos and inject the video embed when it's clicked. This allows you to use a custom cover image until the video is played clicked instead of displaying the Vimeo embed.

##Demo
Check out the demo here: [https://cdn.rawgit.com/incraigulous/jquery-vimeo-cover/master/demo.html](https://cdn.rawgit.com/incraigulous/jquery-vimeo-cover/master/demo.html)
##Installation
````
    bower install jquery-vimeo-cover
````

##How to use it
**Add your placeholder element.**

````
    <div class="vimeo-cover" vimeo-id="77091919" vimeo-placeholder="http://placehold.it/920x517"></div>
````

####Required Attributes

**vimeo-id:** The Vimeo ID. You can get this from the Vimeo video URL.
**vimeo-placeholder:** The path to your placeholder image.

**Instantiate a new VimeoCover object and pass in your element. You can also pass an options object as your second parameter but this is optional.**


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

#####Options

**selector:** The vimeo-cover selector. This is used to target all videos on the page to make sure only one video plays at a time. *Default: .vimeo-cover*
