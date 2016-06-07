var qrLibrary = require('qr-image');
var parser = require('body-parser')
var express = require('express'),
	app = express();
app.use(parser.urlencoded({ extended : true }));
app.use(parser.json());

app.post('/', function (req, res) {
	if(req.body.auth == "prashant"){
		var generatedQR = qrLibrary.image(req.body.data, {type:'png', size: 10});
		res.type('png');
		generatedQR.pipe(res);
	}else{
		res.json({message:"Well, you know you aren't supposed to be here! Do you not understand English, you illiterate fuck?", youDumb:true});
	}
});

app.get('/', function (req, res) {
	res.json({message:"You really shouldn't be here!", author:"Prashant M. Shrestha"});
});

app.listen(1337);
console.log('QR Generator running in *:1337');