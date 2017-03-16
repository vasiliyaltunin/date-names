var hasKey = Object.prototype.hasOwnProperty;

function testLocale(localeObj, name, assert) {

    assert.ok(localeObj.__locale === name, "Locale name " + name);

    assert.ok(hasKey.call(localeObj, 'months'), name + " locale months");
    assert.ok(hasKey.call(localeObj, 'abbreviated_months'), name + " locale abbreviated_months");
    assert.ok(hasKey.call(localeObj, 'days'), name + " locale days");
    assert.ok(hasKey.call(localeObj, 'abbreviated_days'), name + " locale abbreviated_days");
    assert.ok(hasKey.call(localeObj, 'am'), name + " locale am");
    assert.ok(hasKey.call(localeObj, 'pm'), name + " locale pm");

    assert.ok(localeObj.months.length === 12, name + ' has 12 month');
    assert.ok(localeObj.abbreviated_months.length === 12, name + ' has 12 abbreviated_months');

    var isAllStrings = true;
    localeObj.months.forEach(function (name) {
        if (typeof name !== "string")
        {
            isAllStrings = false;
        }
    });
    assert.ok(isAllStrings, name + " all month are strings");


    isAllStrings = true;
    localeObj.abbreviated_months.forEach(function (name) {
        if (typeof name !== "string")
        {
            isAllStrings = false;
        }
    });
    assert.ok(isAllStrings, name + " all abbreviated_months are strings");


    assert.ok(localeObj.days.length === 7, name + ' has 7 days');
    assert.ok(localeObj.abbreviated_days.length === 7, name + ' has 7 abbreviated_days');


    isAllStrings = true;
    localeObj.days.forEach(function (name) {
        if (typeof name !== "string")
        {
            isAllStrings = false;
        }
    });
    assert.ok(isAllStrings, name + " all days are strings");


    isAllStrings = true;
    localeObj.abbreviated_days.forEach(function (name) {
        if (typeof name !== "string")
        {
            isAllStrings = false;
        }
    });
    assert.ok(isAllStrings, name + " all abbreviated_days are strings");

    assert.ok(typeof localeObj.am === "string", name + " am is string");
    assert.ok(localeObj.am.length > 0, name + "  am have length");

    assert.ok(typeof localeObj.pm === "string", name + " pm is string");
    assert.ok(localeObj.pm.length > 0, name + "  pm have length");

}


QUnit.test("Date-names-ex test", function (assert) {

    testLocale(date_names_en, "en", assert);
    testLocale(date_names_de, "de", assert);
    testLocale(date_names_fi, "fi", assert);
    testLocale(date_names_pt_br, "pt-br", assert);
    testLocale(date_names_ru, "ru", assert);
    testLocale(date_names_es, "es", assert);

    assert.ok(hasKey.call(date_names, 'en'), "date_names have en locale");
    assert.ok(hasKey.call(date_names, 'de'), "date_names have de locale");
    assert.ok(hasKey.call(date_names, 'fi'), "date_names have fi locale");
    assert.ok(hasKey.call(date_names, 'pt_br'), "date_names have pt_br locale");
    assert.ok(hasKey.call(date_names, 'ru'), "date_names have ru locale");
    assert.ok(hasKey.call(date_names, 'es'), "date_names have es locale");


});
