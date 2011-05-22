window.onload = function() {

  var originalArray = [[5, 10], [10, 20], [5, 15]];
  
  console.log('originalArray; ' + originalArray.toString() + ' length: ' + originalArray.length);
  
  if (originalArray instanceof Path) {
    console.log('originalArray instanceof Path === true');
  }
  else if (originalArray instanceof Array) {
    console.log('originalArray instanceof Array === true');
  }

  var pathOfPoints = new Path(originalArray);
  var pathOfSubpath = new Path('M100 100L 300 100l 200 300'); 
  var pathOfPointsClone = pathOfPoints.clone();
  var pathOfSubpathSlice = pathOfSubpath.slice(1);
  
  
  if (pathOfPoints instanceof Path) {
    console.log('pathOfPoints instanceof Path === true');
  }
  
  if (pathOfSubpath instanceof Array) {
    console.log('pathOfSubpath instanceof Array === true');
  }
  
  console.log('pathOfPoints: ' + pathOfPoints.toString() + ' length: ' + pathOfPoints.length);
  console.log('pathOfPointsClone: ' + pathOfPointsClone.toString() + ' length: ' + pathOfPointsClone.length);
  console.log('pathOfSubpath: ' + pathOfSubpath.toString() + ' length: ' + pathOfSubpath.length);
  console.log('pathOfSubpathSlice: ' + pathOfSubpathSlice.toString() + ' length: ' + pathOfSubpathSlice.length);

  pathOfSubpath.push([0, 0]);
  console.log('pathOfSubpath (after pushed a point): ' + pathOfSubpath.toString() + ' length: ' + pathOfSubpath.length);
  
  if (pathOfSubpath instanceof Path) {
    console.log('pathOfSubpath instanceof Path === true');
  }
  
  if (pathOfSubpath instanceof Array) {
    console.log('pathOfSubpath instanceof Array === true');
  }
  
  console.log('originalArray; ' + originalArray.toString() + ' length: ' + originalArray.length);
  
  if (originalArray instanceof Path) {
    console.log('originalArray instanceof Path === true');
  }
  else if (originalArray instanceof Array) {
    console.log('originalArray instanceof Array === true');
  }
  
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