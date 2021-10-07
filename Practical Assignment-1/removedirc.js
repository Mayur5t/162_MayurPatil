var fs = require('fs');

fs.rmdir("./Assignment1", function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Directory successfully Deleted.")
    }
})