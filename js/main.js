window.onload = function() {
  var pathOfPoints = new Path([[5, 10], [10, 20], [5, 15]]);
  var pathOfSubpath = new Path('stringy');
  
  if (pathOfPoints instanceof Path) {
    console.log('pathOfPoints instanceof Path === true');
  }
  
  if (pathOfSubpath instanceof Array) {
    console.log('pathOfSubpath instanceof Array === true');
  }
  
};