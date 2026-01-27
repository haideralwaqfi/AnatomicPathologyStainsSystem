const HistostainRequest = require("../models/HistostainRequest");

// Pathologist creates a stain order
exports.createRequest = async (req, res) => {
  try {
    const request = await HistostainRequest.create({
      ...req.body,
      orderedBy: req.user._id,
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Technician updates status
exports.updateStatus = async (req, res) => {
  try {
    const request = await HistostainRequest.findById(req.params.id);

    if (!request) return res.status(404).json({ message: "Request not found" });

    request.status = req.body.status;
    request.assignedTo = req.user._id;

    await request.save();
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin can see all requests
exports.getAllRequests = async (req, res) => {
  const requests = await HistostainRequest.find()
    .populate("orderedBy", "name email")
    .populate("assignedTo", "name email");

  res.json(requests);
};
