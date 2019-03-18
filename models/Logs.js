const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema ({
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
    temp: {
        type: Number,
        required: true 
    },
    weight: {
        type: Number,
        required: true
    },
    sleep: {
        type: Number,
        required: true
    },
    spotting: {
        type: Number,
        required: true
    },
    hungover: {
        type: Boolean,
        required: true
    },
    bc: {
        type: Boolean,
        required: true
    },
    symptoms: {
        type: String,
        required: false
    },
    date: { 
        type: Date, 
        default: Date.now 
    }

});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;