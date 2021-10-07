var fs = require('fs');

fs.readFile('assignment1', 'utf-8', function(err, data) {
    if (err) throw err;

    var newValue = data.replace(/Good Morning/gim, 'Good Afternoon');

    fs.writeFile('assignment1', newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Data Updated!');
    })
})