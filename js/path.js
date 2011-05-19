// Q: How best to subclass Array? ...see http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/
// A: There is no one right way. This way relies on non-standard __proto__ property
function Path(arg) {
  var arr = [];
  if (arg.isArray) {
    arr.push.apply(arr, arg);
  } else {
    arr.push.apply(arr, pathStringToArrayOfPoints(arg));
  }
  arr.__proto__ = Path.prototype;
  return arr;
}

Path.prototype = new Array();

Path.prototype.last = function() {
  return this[this.length -1];
};

Path.prototype.clone = null;
Path.prototype.toString = null;
Path.prototype.map = map;
Path.prototype.filter = filter;
Path.prototype.slice = slice;

// accepts: subset of an SVG path string (see http://www.w3.org/TR/SVG/paths.html), 
// where only the moveto, closepath and lineto commands are accepted
// returns: array of points (which are arrays themselves of length two)
var pathStringToArrayOfPoints = function(path) {
  
  var arr = [];
  
  switch('') {
    case 'M':  // absolute moveto    
      // push next [x, y] to array
      break;
    case 'L':  // absolute lineto
      // push next [x, y] to array
      break;
    case 'l':  // relative lineto
      // get last [x0, y0], add [x1, x2], push [x0+x1, y0+y1] to last 
      break;
    case 'z':  // closepath. this is optional. should always close path when drawn (do not add to array?)
      break;
  }
  
  
  return [[0, 1]];
};

// returns a new Path with the same points
var clone = function() {
  return new Path(this.arrayOfPoints);
};

// returns an SVG path string representing the Path
var toString = function() {
  
};

var map = function() {

};

var filter = function() {

};

var slice = function() {
 
};