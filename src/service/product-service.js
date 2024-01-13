import {
  addProductValidation,
  getIdProductValidation,
} from "../validation/product-validate.js";
import { validate } from "./../validation/validation.js";
import { prisma } from "./../app/database.js";
import { ResponseError } from "../error/responseError.js";

const add = async (request) => {
  request = validate(addProductValidation, request);

  return prisma.product.create({
    data: {
      productName: request.productName,
      price: request.price,
      stockQuantity: request.stockQuantity,
      description: request.description,
    },
  });
};

const get = async (idProduct) => {
  idProduct = validate(getIdProductValidation, idProduct);

  const searchProductInDb = await prisma.product.findFirst({
    where: {
      id: idProduct,
    },
    select: {
      description: true,
      id: true,
      price: true,
      productName: true,
      stockQuantity: true,
    },
  });

  if (!searchProductInDb) {
    throw new ResponseError(404, "product not found");
  }

  return searchProductInDb;
};

const list = async () => {
  return prisma.product.findMany({
    select: {
      id: true,
      description: true,
      price: true,
      productName: true,
      stockQuantity: true,
    },
  });
};

export default { add, list,get };
