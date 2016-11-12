;
'use strict';
var spa = function() {
  var
  //константы
  html_template = '<div id="main_block">\
                    <ul id="main_menu">\
                      <li><div id="add"  class="button" title="Add a new counrty to the list"><\/div>\
                      <li><div id="info" class="button" title="Get information about added countries and capitals"><\/div>\
                      <li><div id="list" class="button" title="Get the full list"><\/div>\
                      <li><div id="del"  class="button" title="Remove country from the list"><\/div>\
                    <\/ul>\
                  <\/div>',
  //хэши
  countries = {},
  //функции
  initModule, onClickAdd, onClickInfo, onClickList, onClickDel;

  //добавление
  onClickAdd = function() {
    var
    countryName, countryCapital;
    countryName    = prompt('Insert country name...');
    countryCapital = prompt('...and it\'s capital');
    countries[countryName] = countryCapital; // Почему  ( countries.countryName = countryCapital; ) работает как ( countries.'countryName' = countryCapital; ) ?
    alert('Added');
    console.log(countries);
  };
  //удаление
  onClickDel = function() {
    var
    countryName, message;
    countryName = prompt('Insert country name to remove');
    if (countryName in countries) {
      delete countries[countryName]; // И тут тоже countries.countryName === countries.'countryName'
      message ='Removed.';
      } else {
      message = 'Not a country from the list';
    };
    alert(message);
    console.log(countries);
  };
  //вывод списка
  onClickList = function() {
    var
    fullListStr = '';
    for (var K in countries) {
      fullListStr += K +' : '+ countries[K] + '\n';
    };
    alert(fullListStr);
  };
  //инфо по введенной стране
  onClickInfo = function() {
    var
    countryName;
    countryName = prompt('Insert country name to get information');
    if (countryName in countries) {
      alert(countryName + ' : ' + countries[countryName]);
    } else {
      alert('Not a country from the list');
    };
  };

  //Отрисовка HTML и привязка обработчиков событий
  initModule = function() {
  document.body.innerHTML = html_template;
  document.getElementById("add").addEventListener('click', onClickAdd );
  document.getElementById("info").addEventListener('click', onClickInfo );
  document.getElementById("list").addEventListener('click', onClickList );
  document.getElementById("del").addEventListener('click', onClickDel );
  };

  return {initModule : initModule};

}();

document.addEventListener("DOMContentLoaded", function (){ spa.initModule() } );