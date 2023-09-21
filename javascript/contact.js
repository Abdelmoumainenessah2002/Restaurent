var textarea = document.getElementById('myTextarea');
var footer = document.getElementById('myFooter');

textarea.addEventListener('input', function() {
  footer.style.marginTop = textarea.scrollHeight + 'px';
});