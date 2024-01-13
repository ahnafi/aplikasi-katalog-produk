import productService from "../service/product-service.js";

const add = async (req, res, next) => {
  try {
    const request = req.body;
    await productService.add(request);
    res.status(200).render("add", {
      info: "data success",
    });
  } catch (err) {
    next(err);
  }
};

const get = async (req, res, next) => {
  try {
    const idProduct = req.params.id;
    const result = await productService.get(idProduct);
    res.render("index", {
      title: "aplikasi-katalog-produk",
      data: result,
    });   
  } catch (error) {
    next(error);
  }
};

// views
const list = async (req, res, next) => {
  try {
    const result = await productService.list();
    res.status(200).render("index", {
      title: "aplikasi-katalog-produk",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const viewAdd = (req, res, next) => {
  try {
    res.render("add", {});
  } catch (error) {
    next(error);
  }
};

export default {
  add,
  list,
  viewAdd,
  get,
};
