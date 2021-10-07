var fs = require('fs');

fs.mkdir("./Assignment1", function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("New directory successfully created.")
    }
})