/* Lord Rex 2012 */
$("document").ready( function() {
snapRandom();


// Draws a shape based on the global variables
function snapRandom(){

  var snapCanvas = 1000;
  var snapSize = 1000;
  var snapColumns = 2;
  var snapColor = "Random";
  var snapR = 128;
  var snapG = 128;
  var snapB = 128;
  var snapA = .9;
  
  
  // Takes a RGB value, returns randomized result
  function snapMakeColor(colorNumber) {
    $variation = colorNumber * .5;
    $randomness = Math.floor((Math.random()*colorNumber)-(colorNumber/2));
    colorNumber += $randomness;
    if (colorNumber > 240) {colorNumber = 240; }
    else if (colorNumber < 15) {colorNumber = 15; }
    return colorNumber;
  }
  function snapMakeSize(sizeNumber) {
    $variation = sizeNumber * .5;
    $randomness = Math.floor((Math.random()*sizeNumber/2)-(sizeNumber/4));
    sizeNumber += $randomness;
    return sizeNumber;
  }
  
  // SET COLOR
  function snapSetColor(){
    snapColor =  $("#snapColor").val();
    if(snapColor == "Red") { 
      snapR = snapMakeColor(212);
      snapG = snapMakeColor(64);
      snapB = snapMakeColor(64);
    }
    else if(snapColor == "Green") {
      snapR = snapMakeColor(64);
      snapG = snapMakeColor(212);
      snapB = snapMakeColor(64);
    }
    else if(snapColor == "Blue") {
      snapR = snapMakeColor(64);
      snapG = snapMakeColor(64);
      snapB = snapMakeColor(212);
    }
    else if(snapColor == "Black") {
      $blackness = snapMakeColor(20);
      snapR = $blackness;
      snapG = $blackness;
      snapB = $blackness;
    }
    else {
      snapR = snapMakeColor(128);
      snapG = snapMakeColor(128);
      snapB = snapMakeColor(128);
    }
    snapColor = 'rgba(' + snapR + ',' + snapG + ',' + snapB + ',' + snapA + ')'; 
  }
  
  // SET SIZE
  function snapSetSize(){
    snapSize  =  20;
    snapColumns = snapCanvas / snapSize;
    snapSize = snapMakeSize(snapSize); 
  }




  quantity = $(".SnapRandom").length;
  load1Image(1);
  function load1Image(q) {
    var $canvas = $('<canvas>Your browser does not support HTML5 Canvas</canvas>');
    $canvas.attr('width',snapCanvas).attr('height', snapCanvas*.8);
    $context = $canvas[0].getContext('2d');
    // First draw a background
    snapSize = snapCanvas;
    snapA = 1;
    snapSetColor();
    snapRectangle(0,0);
    // Next draw rectangles
    snapA = .8;
    for (var i = 0; i < snapColumns; i++) {
      for (var n = 0; n < snapColumns; n++) {
        snapSetSize();
        snapSetColor();
        snapRectangle(n * (snapCanvas/snapColumns), i * ((snapCanvas/snapColumns) * .8));
      }
    }
  	function snapRectangle(snapX,snapY) {
      $context.save();
    	$context.fillStyle = snapColor;
    	$context.fillRect(snapX, snapY, snapSize, snapSize * .8);
      $context.restore();
    }
    var dataURL = $canvas[0].toDataURL();
    var snapImg = $('<img />').attr('src',dataURL);
    // This is needed so that the browser doesn't try 
    // building and loading all the images at once
    snapImg.imagesLoaded(function(){
      $('.SnapRandom:eq(' + (q-1) + ')').append(snapImg);
      if(q < quantity) {
        q++;
        load1Image(q);
      }
    });
  }
}
});