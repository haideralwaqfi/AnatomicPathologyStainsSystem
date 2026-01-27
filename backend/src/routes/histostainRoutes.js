const express = require("express");
const router = express.Router();
const {
  createRequest,
  updateStatus,
  getAllRequests,
} = require("../controllers/histostainController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Pathologist creates order
router.post("/", protect, authorizeRoles("pathologist"), createRequest);

// Technician updates status
router.put("/:id/status", protect, authorizeRoles("technician"), updateStatus);

// Admin views all
router.get("/", protect, authorizeRoles("admin"), getAllRequests);

module.exports = router;
