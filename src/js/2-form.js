
const form = document.querySelector(".feedback-form");

const localStorageKey = "feedback-form-state";

const objectLocalStorage = {
  email: "",
  message: "",
};

function loadFromLS(key) {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }

}

form.addEventListener("input", (evt) => {
  evt.preventDefault();
  const userEmail = form.elements.email.value;
  const userMessage = form.elements.message.value;
  

  objectLocalStorage.email = userEmail;
  objectLocalStorage.message = userMessage;
  localStorage.setItem(localStorageKey, JSON.stringify(objectLocalStorage));
});

function restoreData() {
  const data = loadFromLS(localStorageKey) || {};
  form.elements.email.value = data.email || "";
  form.elements.message.value = data.message || "";
}

restoreData();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = loadFromLS(localStorageKey) || {};
  localStorage.removeItem(localStorageKey)
  form.reset();
})

///////////////////////////////////////////
