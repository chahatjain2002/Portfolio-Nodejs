/*var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var enquiry = req.body.enquiry;

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "enquiry" : enquiry
    }

    db.collection('name').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
	return res.redirect('success.html')
})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('home.html');
}).listen(3000);
console.log("Listen on PORT 3000");*/
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener( "click", ()=>{
	document.querySelector('.sidebar').classList.toggle('sidebargo');
	if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
		document.querySelector('.ham').style.display = 'inline'
		document.querySelector('.cross').style.display = 'none'
	}
	else{
		document.querySelector('.ham').style.display = 'none'
		setTimeout(() => {
			document.querySelector('.cross').style.display = 'inline'
		}, 300);
	}
})