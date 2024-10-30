// routes/providerRoutes.js
const express = require("express");
const router = express.Router();
const authorizeProvider = require("../middleware/authorizeProvider");
const {
  createNewServiceProvider,
  loginServiceProvider,
  updateServiceProvider,
  getProviderProfile,
  getProviderServices,
} = require("../controllers/providerController");

// Public routes
router.post("/create", createNewServiceProvider);
router.post("/login", loginServiceProvider);

// // Protected routes
// router.put("/update/:providerId", authorizeProvider, updateServiceProvider);
// router.get("/profile/:providerId", authorizeProvider, getProviderProfile);
// router.get("/services/:providerId", authorizeProvider, getProviderServices);

module.exports = router;
