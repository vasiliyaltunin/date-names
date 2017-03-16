# date-names-ex [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![Build Status](https://travis-ci.org/vasiliyaltunin/date-names-ex.svg?branch=master)](https://travis-ci.org/vasiliyaltunin/date-names-ex)   [![GetBadges Game](https://vasiliyaltunin-date-names-ex.getbadges.io/shield/company/vasiliyaltunin-date-names-ex)](https://vasiliyaltunin-date-names-ex.getbadges.io/?ref=shield-game)   [![GitHub license](https://img.shields.io/badge/license-MPL2-green.svg)](https://raw.githubusercontent.com/vasiliyaltunin/date-names-ex/master/LICENSE)   [![dependencies Status](https://david-dm.org/vasiliyaltunin/date-names-ex/status.svg)](https://david-dm.org/vasiliyaltunin/date-names-ex)   [![devDependencies Status](https://david-dm.org/vasiliyaltunin/date-names-ex/dev-status.svg)](https://david-dm.org/vasiliyaltunin/date-names-ex?type=dev)

Repository of localized month and day names. Usable for sites, have minified version and separate minified locale files.

Based on Martin Andert code [(https://github.com/martinandert/date-names)](https://github.com/martinandert/date-names)

## Installation

Install via npm:

```bash
% npm install date-names-ex
```

## Usage

Add script to you webpage

```html

<script src="../build/date-names-ex.min.js" type="text/javascript"></script>
```

Now to get locale you can use `date_names` variable.

```js

var en_date_locale = date_names.en;

en_date_locale.months              // => ['January', 'February', 'March', ...]
en_date_locale.abbreviated_months  // => ['Jan', 'Feb', 'Mar', 'Apr', ...]

en_date_locale.days                // => ['Sunday', 'Monday', 'Tuesday', ...]
en_date_locale.abbreviated_days    // => ['Sun', 'Mon', 'Tue', 'Wed', ...]

en_date_locale.am                  // => 'AM'
en_date_locale.pm                  // => 'PM'
```

You can fetch a different translation like that:

```js

var de_date_locale = date_names.en;

de_date_locale.months              // => ['Januar', 'Februar', 'März', ...]
de_date_locale.abbreviated_months  // => ['Jan', 'Feb', 'Mär', 'Apr', ...]

de_date_locale.days                // => ['Sonntag', 'Montag', 'Dienstag', ...]
de_date_locale.abbreviated_days    // => ['So', 'Mo', 'Di', 'Mi', ...]

de_date_locale.am                  // => 'vormittags'
de_date_locale.pm                  // => 'nachmittags'
```

If you need only `Ru` locale, for example, you can use just this local file like that:

```html
<script src="../build/date-names-ex.ru.min.js" type="text/javascript"></script>
```

Adn then use it like that:

```js

date_names_ru.months              // => ['Январь', 'Февраль', 'Март', ...]
date_names_ru.abbreviated_months  // => ['Янв', 'Фев', 'Мар', 'Апр', ...]

date_names_ru.days                // => ['Воскресенье', 'Понедельник', 'Вторник', ...]
date_names_ru.abbreviated_days    // => ['Вс', 'Пн', 'Вт', 'Ср', ...]

date_names_ru.am                  // => 'до полудня'
date_names_ru.pm                  // => 'после полудня'
```

English (en), German (de), Finnish (fi), Brazilian Portuguese (pt-br), Russian (ru) and Spanish (es) are currently the only supported locales. Pull requests welcome.


## Contributing

Here's a quick guide:

1. Fork the repo 

2. `npm install`

3. `grunt`

4. Make you changes and add test for you functionality if you add new language. Look into `/test` folder.

5. Check that all test passed by running `grunt`

6. Push to your fork and submit a pull request.


## Licence

Released under Mozilla Public License Version 2.0
