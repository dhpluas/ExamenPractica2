const express = require("express");
const userSchema = require("../models/Stores");
const router = express.Router();

//tienda
router.post("/store", (req, res) => {
    const stores = userSchema(req.body);
    stores
    .save()
    .then((data) => res.json(data))
    .catch((error) =>res.json({message: error}));

  });

//obtener todas las tiendas
router.get("/store", (req, res) => {
  userSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) =>res.json({message: error}));

});
// obtener tienda
router.get("/store/:Storeid", (req, res) => {
  const { Storeid } = req.params;
  userSchema
  .findById(Storeid)
  .then((data) => res.json(data))
  .catch((error) =>res.json({message: error}));

});

// Eliminar tienda
router.delete("/store/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Cambiar tienda
router.put("/store/:id", (req, res) => {
  const { id } = req.params;
  const { Storeid, Store_Area, Items_Available,Daily_Customer_Count,Store_Sales} = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { Storeid, Store_Area, Items_Available,Daily_Customer_Count,Store_Sales } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;