const express = require("express");
const router = express.Router();

const { checkAuth } = require('../middlewares/authentication.js')


router.get("/device", checkAuth, (req, res) => {

  console.log(req.userData);

  const toSend = {
    status: "success",
    data: "[4 , 5 , 5 , 6 ]"
}
return res.status(200).json(toSend);
});

router.post("/device", (req, res) => {
  
});

router.delete("/device", (req, res) => {
  
});

router.put("/device", (req, res) => {
  
});

module.exports = router;