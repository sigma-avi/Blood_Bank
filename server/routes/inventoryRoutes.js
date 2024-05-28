const express = require("express");
const authMiddelware=require("../middlerwares/authMiddelware")
const {
  createInventoryController,
  getInventoryController,
  getRecentInventoryController,
  getInventoryHospitalController,
  getDonarsController,
  getOrgnaisationController,
  getHospitalController,
  getOrgnaisationForHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory",authMiddelware, createInventoryController);
router.get("/get-inventory",authMiddelware,getInventoryController)

router.get("/get-recent-inventory",authMiddelware,getRecentInventoryController)
router.post("/get-inventory-hospital",authMiddelware,getInventoryHospitalController)
router.get("/get-hospitals",authMiddelware,getHospitalController)
router.get("/get-orgnaisation",authMiddelware,getOrgnaisationController)
router.get("/get-donars",authMiddelware,getDonarsController)
router.get("/get-orgnaisation-for-hospital",authMiddelware,getOrgnaisationForHospitalController)


module.exports = router;
