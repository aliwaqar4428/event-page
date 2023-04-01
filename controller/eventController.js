const Event = require("../model/eventModel");
const catchAsync = require("../catchAsync");
const AppError = require("../appError");

//create
exports.createEvent = catchAsync(async (req, res, next) => {
  const event = await Event.create(req.body);

  res.status(201).json({
    message: "Success",
    event,
  });
});

//update
exports.updateEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!event) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    message: "Success",
    event,
  });
});

//getAll
exports.getAllEvent = catchAsync(async (req, res, next) => {
  const events = await Event.find();

  res.status(200).json({
    message: "Success",
    results: events.length,
    events,
  });
});

//getOne
exports.getOneEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  res.status(200).json({
    message: "Success",
    event,
  });
});

//delete
exports.deleteEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findByIdAndDelete(req.params.id);

  if (!event) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(204).json({
    message: "Success",
    data: null,
  });
});
