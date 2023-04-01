const express = require("express");
const {
  createEvent,
  updateEvent,
  getAllEvent,
  getOneEvent,
  deleteEvent,
} = require("../controller/eventController");

const router = express.Router();

router.route("/create").post(createEvent);

router.route("/update/:id").patch(updateEvent);

router.route("/getAllEvent").get(getAllEvent);

router.route("/getEvent/:id").get(getOneEvent);

router.route("/delete/:id").delete(deleteEvent);

module.exports = router;
