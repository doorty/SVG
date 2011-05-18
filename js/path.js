var Path = function(path) {

  if (isArray(path)) {
    
    console.log('array of points');
    
  } else if (isString(path)) {
    
    console.log('string of path');
    
  } else {
    
    console.log('Path: invalid argument');
    
  }

};

Path.prototype = new Array();
Path.prototype.pathFromPoints = computePathFromPoints;
Path.prototype.pathFromPathSubset = computePathFromPathSubset;
Path.prototype.clone = null;
Path.prototype.toString = null;

// accepts: array of points (which are arrays themselves of length two)
// returns: ..
var computePathFromPoints = function(points) {

};

// accepts: subset of an SVG path string (see http://www.w3.org/TR/SVG/paths.html), 
// where only the moveto, closepath and lineto commands are accepted
// returns: ...
var computePathFromPathSubset = function(path) {

};

// returns a new Path with the same points
var clone = function() {
  
};

// returns an SVG path string representing the Path
var toString = function() {
  
}

// map, filter, and slice must return Path objects rather than pure arrays
var map;
var filter;
var slice;


/* cursory type validation */

function isString(arg) {
  return (typeof arg === 'string')
}

function isArray(arg) {
  return (arg instanceof Array)
}