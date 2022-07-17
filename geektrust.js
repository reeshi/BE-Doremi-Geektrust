const fs = require("fs");
const userSubscriptions = require("./controllers/userSubscriptions");
const filename = process.argv[2];



fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err;
    // learn regex.
    let inputLines = data.toString().split(/\r?\n/);
    // store all the user subcription and topup plans.
    userSubscriptions.userSubscriptions(inputLines);
});

