const VALIDATION_MESSAGES = {
  required: "This field cannot be empty.",
  string: "This field accepts only string and spaces.",
  numeric: "This field accepts only numbers and spaces.",
};

/**
 * It takes in a type and a value, and returns an object with a boolean and a message.
 * @param type - The type of validation to be performed.
 * @param value - the value of the input
 * @returns An object with two properties: isValid and message.
 */
function executeValidation(type, value) {
  let isValid = false;
  switch (type) {
    case "required":
      isValid = validateEmpty(value);
      return {
        isValid,
        message: VALIDATION_MESSAGES[type]
      };
    case "string":
      isValid = validateString(value);
      return {
        isValid,
        message: VALIDATION_MESSAGES[type]
      };
    case "numeric":
      isValid = validateNumbers(value);
      return {
        isValid,
        message: VALIDATION_MESSAGES[type]
      };
    default:
      return {
        isValid: false,
        message: "Lack of arguments cannot be validated"
      };
  }
}

/**
 * It takes a value and an array of validations, and returns an object with a boolean isValid property
 * and a message property.
 * @param [validations] - an array of strings that represent the validations to be executed.
 * @returns An object with two properties: isValid and message.
 */
function validate({ value }, validations) {
  for (const type of validations) {
    let response = executeValidation(type, value);
    if (!response.isValid) return response
  }
  return {
    isValid: true,
    message: 'Well done!'
  }
}


/**
 * It takes an element and an array of validations, and returns true if the element passes all the
 * validations, and false if it doesn't.
 * @param element - The element that is being validated.
 * @param validations - []
 * @returns the value of isValid.
 */
function startValidate(element, validations = ['required list type validations']) {
  let { isValid, message } = validate(element, validations);
  if (isValid) {
    element.classList.add('form-good');
  } else {
    removeError(element);
    element.classList.add('form-error');
    createError(element, message);
  }
  return isValid;
}