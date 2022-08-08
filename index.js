const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user-routes");
const profileRoutes = require("./routes/profile-routes");
const postRoutes = require("./routes/post-routes");
const path = require("path");

connectDB();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use("/images", express.static(path.join("images")));
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(  
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use("/api/user", userRoutes, profileRoutes, postRoutes);
app.get("",(req,res) => {
    res.json({
        msg:"Welcome to API v1",
        impMsg:"Head over to /api/user routes"    
    });
})

module.exports  = app;