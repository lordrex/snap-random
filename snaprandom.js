/* Lord Rex 2012 */
$("document").ready( function() {
snapRandom();


// Draws a shape based on the global variables
function snapRandom(){
  var snapWidth = 1000;
  var snapSize = 1000;
  var snapColumns = 2;
  var snapColor = "Random";
  var snapR = 128;
  var snapG = 128;
  var snapB = 128;
  var snapA = .9;
  
  
  // Takes a RGB value, returns randomized result
  function snapMakeColor(colorNumber) {
    $variation = colorNumber * .5; //If color =200, variation is 100
    $randomness = Math.floor((Math.random()*$variation) - $variation/2); // 0-100, -50 = -50 to 50
    colorNumber = colorNumber - $randomness; // 200 
    if (colorNumber > 240) { colorNumber = 240; }
    else if (colorNumber < 15) { colorNumber = 15; }
    return colorNumber;
  }
  function snapMakeSize(sizeNumber) {
    $variation = sizeNumber * .5;
    $randomness = Math.floor((Math.random()*$variation)-($variation));
    sizeNumber = sizeNumber + $randomness;
    return sizeNumber;
  }
  
  // SET COLOR
  function snapSetColor($R,$G,$B){
    snapRed = snapMakeColor($R);
    snapGreen = snapMakeColor($G);
    snapBlue = snapMakeColor($B);
    snapColor = 'rgba(' + snapRed + ',' + snapGreen + ',' + snapBlue + ',' + snapA + ')'; 
    //alert(snapGreen);
  }
  
  // SET SIZE
  function snapSetSize(){
    snapSize  =  snapWidth/2;
    snapColumns = snapWidth / snapSize;
    snapSize = snapMakeSize(snapSize); 
  }

  // How many images are needed?
  quantity = $(".SnapRandom").length;
  
  //Draw the first image
  load1Image(1);
  // Here is where the images are drawn
  function load1Image(q) {
    var $canvas = $('<canvas>Your browser does not support HTML5 Canvas</canvas>');
    $canvas.attr('width',snapWidth).attr('height', snapWidth*.8);
    $context = $canvas[0].getContext('2d');
    $thisSnap = $('.SnapRandom:eq(' + (q-1) + ')');
    // Set colors based on div properties, if they exist.
    if($thisSnap.attr('data-red')) {snapR = $thisSnap.attr('data-red');}
    if($thisSnap.attr('data-green')) {snapG = $thisSnap.attr('data-green');}
    if($thisSnap.attr('data-blue')) {snapB = $thisSnap.attr('data-blue');}
    if($thisSnap.attr('data-width')) {snapWidth = $thisSnap.attr('data-width');}

    // First draw a background
    snapSize = snapWidth;
    snapSetColor(snapR,snapG,snapB);
    snapRectangle(0,0);
    // Next draw rectangles
    for (var i = 0; i < snapColumns; i++) {
      for (var n = 0; n < snapColumns; n++) {
        snapSetSize();
        snapSetColor(snapR,snapG,snapB);
        snapRectangle(n * (snapWidth/snapColumns), i * ((snapWidth/snapColumns) * .8));
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