

document.addEventListener('DOMContentLoaded', function() {
// START Переключение табов
	var tablist = document.getElementById('tabs');
	tablist.onclick = function (e) {
		e.preventDefault();
		tablist.querySelector('li.active').classList.remove("active");
		e.target.parentElement.className += ' active';
	}
// END Переключение табов

// START Вывод в консоль
 var form = document.getElementById('form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Email - %s, Имя - %s, Запомнить - %s", form.elements.inputEmail.value, form.elements.inputName.value, form.elements.rememberMe.checked);
  });
// END Вывод в консоль

});