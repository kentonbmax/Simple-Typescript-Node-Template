var fs = require("fs");

try{
  var config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
} catch(exception) {
  console.trace(exception)
}

export default config