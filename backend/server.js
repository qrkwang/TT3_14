const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./queries");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our DBSSEED Backend Application." });
});
app.post("/user/login", db.loginUser);
app.get("/user", db.getUsers);
app.get("/user/:id", db.getUsersById);
app.post("/user/create", db.createUser);

app.get("/hotel/hotellistingWithDetail", db.getHotelListingWithDetails);
app.get("/hotel/hotellistingWithDetail/:id", db.getHotelListingWithDetailsById);

app.get("/hotel/hotellisting", db.getHotelListing);
app.get("/hotel/hotellisting/:id", db.getHotelListingById);

app.get("/hotel/hotellistingdetail", db.getHotelListingDetails);
app.get("/hotel/hotellistingdetail/:id", db.getHotelListingDetailsById);

app.get("/hotel/hotelreview", db.getHotelReview);
app.get("/hotel/hotelreview/:id", db.getHotelReviewById);

app.get("/booking", db.getBooking);
app.get("/booking/:id", db.getBookingById);
app.get("/booking/customer/:id", db.getBookingByCustomerId);

app.post("/booking/create", db.createBooking);
app.post("/listing/create", db.createListing);
app.post("/listingDetail/create", db.createListingDetails);
app.post("/review/addReview", db.createHotelReview);

app.post("/user/update", db.updateUser);
app.post("/booking/update", db.updateBooking);
app.post("/listing/update", db.updateListing);
app.post("/listingDetail/update", db.updateListingDetails);
app.post("/review/update", db.updateHotelReview);

//
app.post("/post/create", db.createPost);
app.put("/post/update/:id", db.updatePost);
app.get("/post/getall",db.getAll);
app.get("/post/user/:id",db.getPostByUserID);
app.get("/post/postbyid/:id",db.getPostByPostID);
//

app.get("/comment/getallcomments",db.getAllComments);
app.get("/comment/commentid/:id", db.getCommentById);
app.get("/comment/userid/:id", db.getCommentByUserId);
app.get("/comment/postid/:id", db.getCommentByPostId);
app.post("/comment/create/:id", db.createComment);
app.put("/comment/update/:id", db.updateCommentbyId);
app.put("/comment/update/postid/:id", db.updateCommentbyPostId);
app.put("/comment/update/userid/:id", db.updateCommentbyUserId);

app.get("/user/delete/:id", db.deleteUser);
app.get("/booking/delete/:id", db.deleteBooking);
app.get("/listing/delete/:id", db.deleteListing);
app.get("/listingDetail/delete/:id", db.deleteListingDetails);
app.get("/review/delete/:id", db.deleteHotelReview);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
