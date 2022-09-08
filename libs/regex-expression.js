function validateEmpty(string) {
  return String(string).trim().length !== 0;
}

function validateString(value) {
  let regex = new RegExp(/([a-zA-Z]+\s?)+/);
  const test = regex.exec(value);
  if (!test ) return false;
  return test [0] === value;
}

function validateNumbers(value) {
  let newValue = String(value).replace(/\s/g, '');
  let regex = new RegExp(/[0-9\s?]+/, 'g');
  const test = regex.exec(newValue);
  if (!test) return false;
  return test [0] === newValue;
}