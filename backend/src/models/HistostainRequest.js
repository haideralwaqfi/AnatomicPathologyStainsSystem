const mongoose = require("mongoose");

const histostainRequestSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    patientId: {
      type: String,
      required: true,
    },
    specimenType: {
      type: String,
      required: true,
    },
    stainsRequested: [
      {
        type: String,
        required: true,
      },
    ],
    clinicalNotes: String,

    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["requested", "assigned", "processing", "completed"],
      default: "requested",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("HistostainRequest", histostainRequestSchema);
