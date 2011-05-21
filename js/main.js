window.onload = function() {

  var pathOfPoints = new Path([[5, 10], [10, 20], [5, 15]]);
  var pathOfSubpath = new Path('M100 100L 300 100l 200 300'); 
  
  if (pathOfPoints instanceof Path) {
    console.log('pathOfPoints instanceof Path === true');
  }
  
  if (pathOfSubpath instanceof Array) {
    console.log('pathOfSubpath instanceof Array === true');
  }
  
  console.log('pathOfPoints: ' + pathOfPoints.toString());
  console.log('pathOfSubpath: ' + pathOfSubpath.toString());

  /*
  var pathOfSubpathClone = pathOfSubpath.clone();
  console.log(pathOfSubpathClone.toString());
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

};