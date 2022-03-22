const database = require("../db/db");

class ProductManagerDB {
  getAll = async () => {
    let products = await database("products").select("*");
    return { status: "success", payload: products };
  };

  add = async (product) => {
    let products = await database("products").insert(product);
    return { status: "success", payload: products };
  };
}

module.exports = ProductManagerDB;
