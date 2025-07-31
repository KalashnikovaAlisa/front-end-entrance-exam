document.querySelectorAll('.name[contenteditable="true"], .role[contenteditable="true"], .role-name[contenteditable="true"], .company-name[contenteditable="true"], .info[contenteditable="true"]').forEach(el => {
  const maxChars = 40; 
  el.addEventListener('input', () => {
    if (el.innerText.length > maxChars) {
      el.innerText = el.innerText.slice(0, maxChars);
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(el);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });

  el.addEventListener('keydown', e => {
    if ((e.key === 'Enter') || 
       (e.key === ' ' && el.innerText.length >= maxLength)) {
      e.preventDefault();
    }
  });
});

