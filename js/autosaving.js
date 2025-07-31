document.addEventListener("DOMContentLoaded", () => {
const editableElements = document.querySelectorAll("[contenteditable='true']");

editableElements.forEach((el, index) => {
    const saved = localStorage.getItem(`editable-${index}`);
    if (saved) el.innerHTML = saved;
    el.dataset.index = index;
});

editableElements.forEach((el) => {
    el.addEventListener("blur", () => {
    const index = el.dataset.index;
    localStorage.setItem(`editable-${index}`, el.innerHTML);
    });
});
});

