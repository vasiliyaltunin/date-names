/*! Date-names-ex - v0.0.1 - 2017-03-16
* https://github.com/vasiliyaltunin/date-names-ex
* Copyright (c) 2017 Vasiliy Altunin (skyr@altunin.online); Licensed MPL-2.0 */
var date_names_de = { 
  __locale: "de",
  days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  abbreviated_days: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  abbreviated_months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  am: 'vormittags',
  pm: 'nachmittags'
};
;var date_names_en = { 
  __locale: "en",
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  abbreviated_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  abbreviated_months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  am: 'AM',
  pm: 'PM'
};
;var date_names_es = { 
  __locale: "es",
  days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  abbreviated_days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  abbreviated_months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  am: 'AM',
  pm: 'PM'
};
;var date_names_fi = { 
  __locale: "fi",
  days: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
  abbreviated_days: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
  months: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
  abbreviated_months: ['Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko', 'Kesä', 'Heinä', 'Elo', 'Syys', 'Loka', 'Marras', 'Joulu'],
  am: 'a.m.',
  pm: 'p.m.'
};
;var date_names_pt_br = { 
  __locale: "pt-br",
  days: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quita-feira', 'Sexta-feira', 'Sábado'],
  abbreviated_days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  abbreviated_months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  am: 'AM',
  pm: 'PM'
};
;var date_names_ru = { 
  __locale: "ru",
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  abbreviated_days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  abbreviated_months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  am: 'до полудня',
  pm: 'после полудня'
};

;/*global date_names_ru, date_names_en, date_names_de, date_names_es, date_names_fi, date_names_pt_br*/

'use strict';

var date_names = { ru : date_names_ru, en : date_names_en, de : date_names_de, es : date_names_es,  fi : date_names_fi, pt_br: date_names_pt_br};
