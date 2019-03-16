const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema ({
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
    log_temp: {
        type: Number,
        required: true 
    },
    log_weight: {
        type: Number,
        required: true
    },
    log_sleep: {
        type: Number,
        required: true
    },
    log_spotting: {
        type: Number,
        required: true
    },
    log_hungover: {
        type: Boolean,
        required: true
    },
    log_bc: {
        type: Boolean,
        required: true
    },
    log_symptoms: {
        type: String,
        required: false
    }
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;