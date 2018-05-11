var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "nnz44z70d9zu98cc",
    password: "cjtuqz2d6a8n5vdz",
    database: "b5bglt2lt2w0xdpe"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return
    }
    console.log("connected as ID " + connection.threadId);
});


module.exports = connection;