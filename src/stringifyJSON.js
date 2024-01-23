// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "number" || typeof obj === "boolean") {
    return String(obj);
    // AssertionError: expected '"9"' to equal '9'
  }
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }

  if (obj === null) {
    return 'null'
  }

  if (Array.isArray(obj)) {
    var res = [];
    for (var i = 0; i < obj.length; i++) {
      var item = obj[i];
      res.push(stringifyJSON(item));
    }
    return "[" + res.join(',') + "]";
  }

  if (typeof obj === "object") {
    var res = [];
    for (var key in obj) {
      if (typeof obj[key] !== "function" && obj[key] !== undefined) {
      var stringKey = stringifyJSON(key);
      var stringValue = stringifyJSON(obj[key]);
      res.push(stringKey + ":" + stringValue);
    }
  }
    return "{" + res.join(',') + "}";
}
};

// console.log(stringifyJSON({"test": function(){}, "test2": undefined}));
// console.log(stringifyJSON([]));
// console.log("REAL:::", JSON.stringify([]));
// console.log(JSON.stringify(({"test": function(){}, "test2": undefined})));
