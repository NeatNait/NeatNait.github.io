var storage = require('node-persist'),
	express = require("express"),
	app = express();


//you must first call storage.init or storage.initSync
storage.initSync();

app.use(express.bodyParser()); // Automatically parses form data


/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('index.html')
});


app.post('/contact', function(req, res){ // Specifies which URL to listen for

	var contactInfo = {
	    headers: req.headers,
	    body: req.body,
	    remoteAddress: req.connection.remoteAddress
	};

	storage.setItem(Date.now()+'_contactInfo.json', contactInfo);

	res.redirect('/')
});


/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
	//console.log('static file request : ' + req.params);
	res.sendfile( __dirname + req.params[0]); 
});



var port = process.env.PORT || 3000;
	app.listen(port, function() {
	console.log("Listening on " + port);
});