// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, rootNode
) {
  // your code here
  var root = rootNode || document.body;
  var result = [];

  if (root.classList && root.classList.contains(className)) {
    result.push(root);
  }

  if (root.hasChildNodes) {
    var children = root.childNodes;
    for (var i = 0; i < children.length; i ++) {
      var child = children[i];
      result = result.concat(getElementsByClassName(className, child))
    }
  }
  return result;
};
