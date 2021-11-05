const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const db = require("./db/bookreview");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/test", (req, res) => {
  res.json({ success: true });
});

app.get("/reviews", async (req, res) => {
  try {
    const result = await db.getAllReviews();
    res.send(result);
  } catch (error) {
    res.json(error);
  }
});

app.get("/reviews/:id", async (req, res) => {
  try {
    const parameter = req.params.id;
    console.log(parameter);
    const result = await db.getAllReviewsPerUser(parameter);
    res.send(result);
  } catch (error) {
    res.json(error);
  }
});

app.post("/reviews", async (req, res) => {
  try {
    const result = await db.createReview(req.body);
    res.send({ id: result[0] });
  } catch (error) {
    res.json(error);
  }
});

app.patch("/reviews/:id", async (req, res) => {
    try {
    const parameter = req.params.id;
      const result = await db.updateReview(parameter,req.body);
      res.status(200).json({ result });
    } catch (error) {
      res.json(error);
    }
  });
  

app.delete("/reviews/:id", async (req, res) => {
    try {
      const parameter = req.params.id;
      await db.deleteReview(parameter);
      res.send({ success: true });
    } catch (error) {
      res.json(error);
    }
  });

// demo post
// {
//     id: 'r1',
//     bookTitle: 'REKKAN',
//     bookAuthor: 'Nazim Uddin',
//     description: 'The best crime/psychological thriller i have ever read. Recommended',
//     bookImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578208691l/50279253.jpg',
//     creator: 'u1'

// }

app.listen(port, () => {
  console.log("running");
});
