var fs = require('fs');
fs.unlink('assignment1', function(err) {
    if (err) throw err;
    console.log('File Deleted');

});