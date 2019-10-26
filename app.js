const   express     = require("express"),
        mongoose    = require("mongoose");
        bodyParser  = require("body-parser");
var app             = express(),
    Fact            = require("./models/fact"),
    Source          = require("./models/source");

var fact_routes     = require("./routes/fact_routes"),
    source_routes   = require("./routes/source_routes"),
    index_routes    = require("./routes/index_routes");

var seedDatabase    = require("./seed")
var config = require("./config");

// set global app variable
app.locals.services = config.services;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));  // serve static files (images, css, js)

mongoose.connect('mongodb+srv://augusthalverson:fight23@cluster0-2k2og.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// seedDatabase();


// ROUTES


app.use("/sources", source_routes);
app.use("/", index_routes);
app.use("/facts", fact_routes);






app.listen(8080, function(){
    console.log("fight-for-the-climate dev version live on 8080")
});

