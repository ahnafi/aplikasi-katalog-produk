import Joi from "joi";

const addProductValidation = Joi.object({
  productName: Joi.string().max(100).required(),
  description: Joi.string().max(350).optional(),
  price: Joi.number().required().positive(),
  stockQuantity: Joi.number().optional().positive(),
});

const getIdProductValidation = Joi.number().positive().min(1).required();

export { addProductValidation,getIdProductValidation };
