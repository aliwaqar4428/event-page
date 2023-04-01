const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  registrationLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return validator.isURL(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },

  when: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  aboutTheEvent: {
    type: String,
    required: true,
  },

  speaker: [
    {
      name: String,
      about: String,
      image: {
        type: String,
        default: "default.jpg",
      },
    },
  ],

  moderator: [
    {
      name: String,
      about: String,
      image: {
        type: String,
        default: "default.jpg",
      },
    },
  ],

  readingMaterialAndResources: [
    {
      information: {
        type: String,
      },
      title: {
        type: String,
      },
      bulletList: [
        {
          type: String,
        },
      ],
      image: {
        type: Buffer,
      },
      document: {
        type: Buffer,
      },
      attachment: {
        data: Buffer,
        contentType: String,
      },
      video: {
        type: Buffer,
      },
    },
  ],

  joiningInfo: [
    {
      information: {
        type: String,
      },
      title: {
        type: String,
      },
      bulletList: [
        {
          type: String,
        },
      ],
      image: {
        type: Buffer,
      },
      document: {
        type: Buffer,
      },
      attachment: {
        data: Buffer,
        contentType: String,
      },
      video: {
        type: Buffer,
      },
    },
  ],

  organisedBy: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],

  tags: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
