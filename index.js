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

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use("/images", express.static(path.join("images")));
app.use("/api/user", userRoutes, profileRoutes, postRoutes);
// app.get('/api/user',(req,res) => {
//     res.json({
//         msg:"Welcome to API v1"    
//     });
// })
// app.use("/api/user/profile")

module.exports  = app;