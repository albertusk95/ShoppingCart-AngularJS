/*
	Server code for shoppinglist application
*/

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/',function(req,res){
    res.sendFile('main.html',{'root':__dirname + '/public'});
});

app.listen(app.get('port'),function(){
    console.log('Server is running at port ', app.get('port'));
});

