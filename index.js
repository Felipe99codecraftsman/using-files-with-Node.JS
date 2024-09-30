const fs = require("fs");

fs.readFile('./felipe.txt', 'utf8', (err, data) => {
    if (err)  {
        console.error("An error occurred:", err.message);
        return; // Stop execution if an error is encountered
    }

    console.log(data);
});