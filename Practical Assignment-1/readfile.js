const fs = require('fs')

fs.readFile('assignment1', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})