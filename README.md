SnapRandom
===========

A random image generator.  

SnapRandom allows you to include dynamically generated images in a web page. 

## Requirements

SnapRandom requires jQuery and the [ImagesLoaded](https://github.com/desandro/imagesloaded) jQuery plugin. ImagesLoaded forces SnapRandom to generate one image at a time, instead of trying to generate them all at once. This allows you to include many SnapRandom images in a page without slowing or even crashing the browser. 

## Installation

Include the jQuery, ImageLoaded and SnapRandom JavaScript files in your document. There are several ways to do this, but here is one: 

    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="jquery.imagesloaded.min.js"></script>
    <script src="snaprandom.js"></script>

## Including a Simple Image

Simply include a div tag with the class "SnapRandom" and SnapRandom will fill that div with 200px square image. 

    <div class="SnapRandom"></div>
    
### Options

You can set a variety of options for the image that is generated using data attributes. 

#### data-red, data-green and data-blue

The attributes `data-red`, `data-green` and `data-blue`provide a rough guideline for the colors in the image. The colors are randomized, but adjusting these numbers can skew the image more into one color than another. The value for these attributes must be a number between 0 and 256. If no number is provided, the default number is 128. For example, to make an image greener, set the value of `data-green` higher that 128 and /or set the values of `data-red` and `data-blue`lower than 'data-green'.
 
#### data-width and data-height

You can set the width and height of a SnapRandom image using the `data-width` and `data-height` attributes. The number included will be the width or height of the image in pixels. If no value is provided SnapRandom assumes a value of 200px.

#### Example

    <div class="SnapRandom" data-red="160" data-green="50" data-blue="180" data-width="400" data-height="300"></div>

This will produce purple-ish 400x300 image. 

See more examples in the `index.html` file included when downloading SnapRandom.
