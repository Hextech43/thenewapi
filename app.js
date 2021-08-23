require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5660;

const app = express();
app.use(express.json());

const studentData = [
  { id: 1, name: "Adeniran", course: "Commerce" },
  { id: 2, name: "Chris", course: "Biotechnology" },
  { id: 3, name: "Esther", course: "Pharmacy" },
  { id: 4, name: "Romanus", course: "Dentistry" },
  { id: 5, name: "Judith", course: "Government" },
];

app.get("/", (req, res) => {
  res.status(200).json("Local DB");
});

app.get("/studentData", (req, res) => {
  res.status(400).json(studentData);
});

app.get("/studentData/:id", (req, res) => {
  const studentId = studentData.find((t) => t.id === parseInt(req.params.id));
  if (!studentId) {
    console.log(`no user with this id`);
  } else {
    res.status(200).json(studentId);
  }
});
// app.post("/studentData", (req, res) => {
//   const student = {
//     id: studentData.length + 1,
//     name: req.body.name,
//     course: req.body.course,
//   };
//   studentData.push(student);
//   res.status(200).json(studentData);
// });

app.listen(port, () => {
  console.log(`sever is running at port ${port}`);
});
