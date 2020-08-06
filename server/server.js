const express = require('express');
const app = express();

// app.use(function(req, res, next) {
//     console.log('I am in');
//     next();
// })

// app.get('/',function(req,res){
//     res.sendFile(__dirname + '/predict.html');
// });

app.use(express.static("../static"));

app.listen(3000, function() {
    console.log("server running on port 3000");
})