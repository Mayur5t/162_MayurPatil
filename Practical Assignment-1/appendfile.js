var fs = require('fs');
fs.appendFile('assignment1', 'Good Morning', function(err) {
    if (err) throw err;
    console.log('File Appended');

});