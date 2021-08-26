//Librería para verificar data
const joi = require("joi");

const dataVerification = joi.object({
  //Esta validación está por encima de lo que se puso en el html
  //Tienen que estar todos los campos de la validación
  nombre: joi.string().required(),
  apellido: joi.string().required(),
  edad: joi.number().min(20).required(),
  email: joi.string().email({ tlds: { allow: false } }),
});

async function validateData(req, res, next) {
  const { body } = req;
  try {
    await dataVerification.validateAsync(body);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = validateData;
