// Q: How best to subclass Array? 
// A: There is no one right way. Must take into account length property. 
//    This way relies on non-standard __proto__ property.
//    ...see http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/
function Path(arg) {
  
  var arr = [];
  
  if (arg instanceof Array) {
    arr = arg;
  } else {
    arr.push.apply(arr, pathStringToArrayOfPoints(arg));
  }
  
  arr.__proto__ = Path.prototype;
  
  return arr;
}

Path.prototype = new Array();

Path.prototype.last = function() {
  return this[this.length - 1];
};

// returns a new Path with the same points
Path.prototype.clone = function() {
  var arr = [];
  
  var i = this.length;
  while (i--) {
    arr.unshift(this[i]);
  }
  
  return new Path(arr);
};

// returns an SVG path string
Path.prototype.toString = function() {
  
  var str = 'M';
  
  var i;
  var numOfPoints = this.length;
  for(i = 0; i < numOfPoints; i++) {
    var point = this[i];
    str += ' ' + point[0].toString() + ' ' + point[1].toString() + ' L'; 
  }
  
  str = str.slice(0, str.length-1) + 'z'; // back up one and override last 'L' with 'z'
  
  return str;
};

Path.prototype.map = function() {
  return new Path(Array.prototype.map.apply(this, arguments));
};

Path.prototype.filter = function() {
  return new Path(Array.prototype.filter.apply(this, arguments));
};

Path.prototype.slice = function() {
  return new Path(Array.prototype.slice.apply(this, arguments));
};

var pathStringToArrayOfPoints = function(path) {

  var arr = [];

  // convert M  100 100 L300 100.. to M,100,100,L,300,100,
  var re = /[^0-9]*([MLlz])[^0-9]*([0-9]+)[^0-9]([0-9]+)/g;    
  var pointsStr = new String(path).replace(re, "$1,$2,$3,"); 
  var tempArr = pointsStr.split(',');

  var i=0;
  var len = tempArr.length;
  for (i = 0; i < len; i++) {
    
    var x, y;

    switch(tempArr[i]) {
      case 'M': 
      case 'L':
        x = parseInt(tempArr[i+1]);
        y = parseInt(tempArr[i+2]);
        break;
      case 'l':
        // get last point [x0, y0], add to point [x1, x2], then push [x0+x1, y0+y1] to array
        x = parseInt(tempArr[i-2]) + parseInt(tempArr[i+1]);
        y = parseInt(tempArr[i-1]) + parseInt(tempArr[i+2])
        break;  
    }
    
    i += 2;
    arr.push([x, y]);
  }  
    
  return arr;
};