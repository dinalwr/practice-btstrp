/* Функция скрытия/показа navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

/* функция открытия меню-бургер */
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Банковски карты, функции

document.getElementById('card-number').addEventListener('input', function () {
  // Код для определения логотипа платежной системы
  var cardNumber = this.value.replace(/\D/g, ''); // Убираем все символы, кроме цифр
  var visaRegexp = /^4[0-9]{12}(?:[0-9]{3})?$/;
  var mastercardRegexp = /^5[1-5][0-9]{14}$/;
  var amexRegexp = /^3[47][0-9]{13}$/;
  var discoverRegexp = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  var jcbRegexp = /^(?:2131|1800|35\d{3})\d{11}$/;
  var dinersRegexp = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  var mirRegexp = /^220[0-4][0-9]{12}$/;
  var logo;
  if (visaRegexp.test(cardNumber)) {
    logo = 'images/card/visa-logo.png';
  } else if (mastercardRegexp.test(cardNumber)) {
    logo = 'images/card/mastercard-logo.png';
  } else if (amexRegexp.test(cardNumber)) {
    logo = 'amex-logo.png';
  } else if (discoverRegexp.test(cardNumber)) {
    logo = 'discover-logo.png';
  } else if (jcbRegexp.test(cardNumber)) {
    logo = 'jcb-logo.png';
  } else if (dinersRegexp.test(cardNumber)) {
    logo = 'diners-logo.png';
  } else if (mirRegexp.test(cardNumber)) {
    logo = 'images/card/mir.png';
  } else {
    logo = 'images/card/default-card.png';
  }

  var logoImg = document.createElement('img');
  logoImg.src = logo;
  document.getElementById('logo-container').innerHTML = '';
  document.getElementById('logo-container').appendChild(logoImg);
});

var input = document.getElementById("card-number");
input.addEventListener("input", function () {
  var value = this.value.replace(/\s/g, '');
  var formattedValue = '';
  for (var i = 0; i < value.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formattedValue += ' ';
    }
    formattedValue += value[i];
  }
  this.value = formattedValue;
});


function selectCard(cardType) {
  if (cardType === 'mir') {
    document.getElementById('card-number').value = '2202 2036 2794 2297';
    document.getElementById('card-to-month').value = '12';
    document.getElementById('card-to-year').value = '24';
    document.getElementById('cvv').value = '123';
  } else if (cardType === 'mastercard') {
    document.getElementById('card-number').value = '5478 9012 3456 1234';
    document.getElementById('card-to-month').value = '06';
    document.getElementById('card-to-year').value = '23';
    document.getElementById('cvv').value = '456';
  }
}

// Получаем элементы DOM
const addBlockBtn = document.getElementById('add-block-btn');
const blocksContainer = document.getElementById('blocks-container');
const modal = document.getElementById('modal');
const blockNumberInput = document.getElementById('number');
const blockMonthInput = document.getElementById('month');
const blockYearInput = document.getElementById('year');
const saveBlockBtn = document.getElementById('save-block-btn');
// Обработчик события на нажатие кнопки "Добавить блок"
addBlockBtn.addEventListener('click', () => {
  // Открываем модальное окно
  modal.style.display = 'block';
});
// Обработчик события на нажатие кнопки "Сохранить"
saveBlockBtn.addEventListener('click', () => {
  // Получаем значения полей ввода
  const number = blockNumberInput.value;
  let str = number.toString();
  let lastFourDigits = str.slice(-4);
  const month = blockMonthInput.value;
  const year = blockYearInput.value;
  // Создаем элемент блока
  const block = document.createElement('div');
  block.classList.add('card-item');
  block.innerHTML =
    `
    <p>****${lastFourDigits}</p>
    <span>${month} </span><span>${year}</span>
    <button class="delete-block-btn">Удалить</button>
  `;
  // Добавляем элемент блока на страницу
  blocksContainer.appendChild(block);
  // Закрываем модальное окно
  modal.style.display = 'none';
  // Обработчик события на нажатие кнопки "Удалить" для нового блока
  const deleteBlockBtns = document.querySelectorAll('.delete-block-btn');
  const lastDeleteBlockBtn = deleteBlockBtns[deleteBlockBtns.length - 1];
  lastDeleteBlockBtn.addEventListener('click', () => {
    block.remove();
  });
});
// Обработчик события на нажатие кнопки "Удалить" для существующих блоков
blocksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-block-btn')) {
    event.target.parentNode.remove();
  }
});


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



