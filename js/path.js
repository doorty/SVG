var Path = function() {
  
  var arg = arguments[0];
  
  if (isArray(arg)) {
    
    console.log('array');
    
  } else if (isString(arg)) {
    
    console.log('string');
    
  } else {
    
    console.log('Path: invalid argument');
    
  }


  // accepets: array of points (which are arrays themselves of length two)
  // returns: ..
  this.arrayOfPoints = function(points) {
  
  }


  // accepts: subset of an SVG path string (see http://www.w3.org/TR/SVG/paths.html), 
  // where only the moveto, closepath and lineto commands are accepted
  // returns: ...
  this.pathString = function(path) {
  
  }

};

/* cursory type validation */

function isString(arg) {
  return (typeof arg === 'string')
}

function isArray(arg) {
  return (arg instanceof Array)
}