/** Path 
 *
 * A good discussion of the issues involved in subclassing Array:
 * http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/
 * The implemented technique isn't perfect; It uses the non-standard __proto__ property
 */

/**
 * Constructor
 *
 * Parameters 
 * Array of points, with each point an array of length 2 
 * Or an SVG path string -- starting with 'M', optionally ending in 'z', with 'L'/'l' in between
 * 
 * Returns
 * Array
 */

function Path(svgPath) {
  
  /*
   * Private helper function to convert SVG path to array
   */
  var pathStringToArray = function(path) {
    
    var pathStr = path.slice(),
        arr = [];

    // parse step 1: onvert M 100 100 L300 100.. to M,100,100,L,300,100,
    var re = /[^0-9]*([MLlz])[^0-9]*([0-9]+)[^0-9]([0-9]+)/g,    
        pointsStr = pathStr.replace(re, "$1,$2,$3,"),
        tempArr = pointsStr.split(',');

    // parse step 2: add points to array based on command
    var i,
        len = tempArr.length;
    for (i = 0; i < len; i++) {

      var x, y;

      switch(tempArr[i]) {
        case 'M':  // absolute moveto
        case 'L':  // absolute lineto
          x = parseInt(tempArr[i+1], 10);
          y = parseInt(tempArr[i+2], 10);
          arr.push([x, y]);
          break;
        case 'l':  // relative lineto
          x = parseInt(tempArr[i-2], 10) + parseInt(tempArr[i+1], 10);
          y = parseInt(tempArr[i-1], 10) + parseInt(tempArr[i+2], 10);
          arr.push([x, y]);
          break;
      }

      i += 2; // move to next point
    }  

    return arr;
  };
  
  /*
   * Return array to use as path
   */
  var arr = [];
  
  if (svgPath instanceof Array) {
    arr = svgPath.slice(); // get independent copy
  } else {
    arr.push.apply(arr, pathStringToArray(svgPath));
  }
  
  arr.__proto__ = Path.prototype;
  
  return arr;
}

/*
 * Inherit from Array
 */
Path.prototype = []; // new Array();

/*
 * Creates a new path from the existing one
 */
Path.prototype.clone = function() {
  return new Path(this.slice());
};

/*
 * Creates an SVG path string
 */
Path.prototype.toString = function() {
  
  var str = 'M';
  
  var i,
      numOfPoints = this.length;
  for(i = 0; i < numOfPoints; i++) {
    var point = this[i];
    str += ' ' + point[0].toString() + ' ' + point[1].toString() + ' L'; 
  }
  
  // back up one and override last 'L' with 'z'
  str = str.slice(0, str.length-1) + 'z'; 
  
  return str;
};

/*
 * Creates a new array with the results of calling a 
 * provided function on every element in this array.
 */
Path.prototype.map = function(callback /*, thisObject */) {
  return new Path(Array.prototype.map.apply(this, arguments));
};

/*
 * Creates a new path with all elements that pass the test 
 * implemented by the provided function.
 */
Path.prototype.filter = function(callback /*, thisObject */) {
  return new Path(Array.prototype.filter.apply(this, arguments));
};

/*
 * Returns a one-level deep copy of a portion of a path.
 */
Path.prototype.slice = function(begin /*, end */) {
  return new Path(Array.prototype.slice.apply(this, arguments));
};