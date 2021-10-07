var fs = require('fs');

fs.rename('assignment1', 'PracticalAssignment1', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
});