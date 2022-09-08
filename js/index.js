const $ = (selector) => document.querySelector(selector);

function spanError(message) {
  const container = document.createElement("div");
  container.innerHTML = `<small class="text-error">Error: ${message}</small>`;
  return container.firstChild;
}

function createError(element, message = "Error found.") {
  element.parentElement.appendChild(spanError(message));
}

function removeError(event) {
  let element = (event instanceof HTMLElement) ? event : event.target;
  let hasError = element.nextElementSibling;
  if (!hasError) return;
  hasError.remove();
  element.classList.remove('form-error');
  element.classList.remove('form-good');
}

button.addEventListener("click", function () {
  let corrects = [];
  corrects.push(startValidate($("#card-holder-name"), ["required", "string"]));
  corrects.push(startValidate($("#card-number"), ["required", "numeric"]));
  corrects.push(startValidate($("#date-exp-yy"), ["required", "numeric"]));
  corrects.push(startValidate($("#date-exp-mm"), ["required", "numeric"]));
  corrects.push(startValidate($("#cvc"), ["required", "numeric"]));
  
  if (!corrects.includes(false)) {
    $('#inputs').dataset.display = 'hidden';
    $('#form-submitted').dataset.display = 'show';
    $('#button').setAttribute('disabled', true);
    setTimeout(resetValues, 5000)
  }
});

function handleKeyUp(event) {
  const $container = document.querySelector(`[data-${event.target.id}]`);
  $container.textContent = event.target.value;
  removeError(event);
}

function resetValues() {
  $('#inputs').dataset.display = 'show';
  $('#form-submitted').dataset.display = 'hidden';
  $('#button').removeAttribute('disabled');
  $("#card-holder-name").value = '';
  $("#card-number").value = '';
  $("#date-exp-yy").value = '';
  $("#date-exp-mm").value = '';
  $("#cvc").value = '';
  $('[data-card-holder-name]').textContent = '-';
  $('[data-card-number]').textContent = '0000 0000 0000 0000';
  $('[data-date-exp-yy]').textContent = '00';
  $('[data-date-exp-mm]').textContent = '00';
  $('[data-cvc]').textContent = '000';
}