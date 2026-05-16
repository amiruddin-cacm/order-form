var fs = require("fs");
var path = require("path");
function size(dir) {
  var s = 0;
  try {
    fs.readdirSync(dir).forEach(function(f) {
      var p = path.join(dir, f);
      try { var st = fs.statSync(p); s += st.isDirectory() ? size(p) : st.size; } catch(e) {}
    });
  } catch(e) {}
  return s;
}
function mb(d) { return (size(d) / 1048576).toFixed(1) + " MB"; }
function kb(d) { return (size(d) / 1024).toFixed(0) + " KB"; }
console.log("node_modules:", mb("node_modules"));
console.log(".next       :", mb(".next"));
console.log("src         :", kb("src"));
console.log("Total       :", mb("."));
