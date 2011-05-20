window.onload = function() {
/*
  var pathOfPoints = new Path([[5, 10], [10, 20], [5, 15]]);
  var pathOfSubpath = new Path('stringy');
  
  
  if (pathOfPoints instanceof Path) {
    console.log('pathOfPoints instanceof Path === true');
  }
  
  if (pathOfSubpath instanceof Array) {
    console.log('pathOfSubpath instanceof Array === true');
  }
*/

/*
  var pathSlice = pathOfPoints.slice(0);
  if (pathSlice instanceof Path) {
    console.log('pathSlice instanceof Path === true');
  } else if (pathSlice instanceof Array) {
      console.log('pathSlice instanceof Array === true');
  } else {
    console.log('pathSlice is not a Path or Array instance');
  }
*/
  
  var result = pathStringToArrayOfPoints('M 100 100 L 300 100 L 200 300 z');
  var result = pathStringToArrayOfPoints('M100 100L 300 100l 200 300');
  console.log(result.toString());
  
};