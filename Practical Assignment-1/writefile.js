var fs = require('fs');
fs.writeFile('assignment1', 'Hello Sir!', function(err) {
    if (err) throw err;
    console.log('File Created');

});