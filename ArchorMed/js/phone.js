/*!
* phone-codes/phone.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.1-48
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "../inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("../inputmask")) : factory(window.Inputmask);
}(function(Inputmask) {
    return Inputmask.extendAliases({
        phone: {
            alias: "abstractphone",
            phoneCodes: [ {
                mask: "+247-____",
                cc: "AC",
                cd: "Ascension",
                desc_en: "",
                name_ru: "Остров Вознесения",
                desc_ru: ""
            }, {
                mask: "+376-___-___",
                cc: "AD",
                cd: "Andorra",
                desc_en: "",
                name_ru: "Андорра",
                desc_ru: ""
            }, {
                mask: "+971-5_-___-____",
                cc: "AE",
                cd: "United Arab Emirates",
                desc_en: "mobile",
                name_ru: "Объединенные Арабские Эмираты",
                desc_ru: "мобильные"
            }, {
                mask: "+971-_-___-____",
                cc: "AE",
                cd: "United Arab Emirates",
                desc_en: "",
                name_ru: "Объединенные Арабские Эмираты",
                desc_ru: ""
            }, {
                mask: "+93-__-___-____",
                cc: "AF",
                cd: "Afghanistan",
                desc_en: "",
                name_ru: "Афганистан",
                desc_ru: ""
            }, {
                mask: "+1(268)___-____",
                cc: "AG",
                cd: "Antigua & Barbuda",
                desc_en: "",
                name_ru: "Антигуа и Барбуда",
                desc_ru: ""
            }, {
                mask: "+1(264)___-____",
                cc: "AI",
                cd: "Anguilla",
                desc_en: "",
                name_ru: "Ангилья",
                desc_ru: ""
            }, {
                mask: "+355(___)___-___",
                cc: "AL",
                cd: "Albania",
                desc_en: "",
                name_ru: "Албания",
                desc_ru: ""
            }, {
                mask: "+374-__-___-___",
                cc: "AM",
                cd: "Armenia",
                desc_en: "",
                name_ru: "Армения",
                desc_ru: ""
            }, {
                mask: "+599-___-____",
                cc: "AN",
                cd: "Caribbean Netherlands",
                desc_en: "",
                name_ru: "Карибские Нидерланды",
                desc_ru: ""
            }, {
                mask: "+599-___-____",
                cc: "AN",
                cd: "Netherlands Antilles",
                desc_en: "",
                name_ru: "Нидерландские Антильские острова",
                desc_ru: ""
            }, {
                mask: "+599-9___-____",
                cc: "AN",
                cd: "Netherlands Antilles",
                desc_en: "Curacao",
                name_ru: "Нидерландские Антильские острова",
                desc_ru: "Кюрасао"
            }, {
                mask: "+244(___)___-___",
                cc: "AO",
                cd: "Angola",
                desc_en: "",
                name_ru: "Ангола",
                desc_ru: ""
            }, {
                mask: "+672-1__-___",
                cc: "AQ",
                cd: "Australian bases in Antarctica",
                desc_en: "",
                name_ru: "Австралийская антарктическая база",
                desc_ru: ""
            }, {
                mask: "+54(___)___-____",
                cc: "AR",
                cd: "Argentina",
                desc_en: "",
                name_ru: "Аргентина",
                desc_ru: ""
            }, {
                mask: "+1(684)___-____",
                cc: "AS",
                cd: "American Samoa",
                desc_en: "",
                name_ru: "Американское Самоа",
                desc_ru: ""
            }, {
                mask: "+43(___)___-____",
                cc: "AT",
                cd: "Austria",
                desc_en: "",
                name_ru: "Австрия",
                desc_ru: ""
            }, {
                mask: "+61-_-____-____",
                cc: "AU",
                cd: "Australia",
                desc_en: "",
                name_ru: "Австралия",
                desc_ru: ""
            }, {
                mask: "+297-___-____",
                cc: "AW",
                cd: "Aruba",
                desc_en: "",
                name_ru: "Аруба",
                desc_ru: ""
            }, {
                mask: "+994-__-___-__-__",
                cc: "AZ",
                cd: "Azerbaijan",
                desc_en: "",
                name_ru: "Азербайджан",
                desc_ru: ""
            }, {
                mask: "+387-__-_____",
                cc: "BA",
                cd: "Bosnia and Herzegovina",
                desc_en: "",
                name_ru: "Босния и Герцеговина",
                desc_ru: ""
            }, {
                mask: "+387-__-____",
                cc: "BA",
                cd: "Bosnia and Herzegovina",
                desc_en: "",
                name_ru: "Босния и Герцеговина",
                desc_ru: ""
            }, {
                mask: "+1(246)___-____",
                cc: "BB",
                cd: "Barbados",
                desc_en: "",
                name_ru: "Барбадос",
                desc_ru: ""
            }, {
                mask: "+880-__-___-___",
                cc: "BD",
                cd: "Bangladesh",
                desc_en: "",
                name_ru: "Бангладеш",
                desc_ru: ""
            }, {
                mask: "+32(___)___-___",
                cc: "BE",
                cd: "Belgium",
                desc_en: "",
                name_ru: "Бельгия",
                desc_ru: ""
            }, {
                mask: "+226-__-__-____",
                cc: "BF",
                cd: "Burkina Faso",
                desc_en: "",
                name_ru: "Буркина Фасо",
                desc_ru: ""
            }, {
                mask: "+359(___)___-___",
                cc: "BG",
                cd: "Bulgaria",
                desc_en: "",
                name_ru: "Болгария",
                desc_ru: ""
            }, {
                mask: "+973-____-____",
                cc: "BH",
                cd: "Bahrain",
                desc_en: "",
                name_ru: "Бахрейн",
                desc_ru: ""
            }, {
                mask: "+257-__-__-____",
                cc: "BI",
                cd: "Burundi",
                desc_en: "",
                name_ru: "Бурунди",
                desc_ru: ""
            }, {
                mask: "+229-__-__-____",
                cc: "BJ",
                cd: "Benin",
                desc_en: "",
                name_ru: "Бенин",
                desc_ru: ""
            }, {
                mask: "+1(441)___-____",
                cc: "BM",
                cd: "Bermuda",
                desc_en: "",
                name_ru: "Бермудские острова",
                desc_ru: ""
            }, {
                mask: "+673-___-____",
                cc: "BN",
                cd: "Brunei Darussalam",
                desc_en: "",
                name_ru: "Бруней-Даруссалам",
                desc_ru: ""
            }, {
                mask: "+591-_-___-____",
                cc: "BO",
                cd: "Bolivia",
                desc_en: "",
                name_ru: "Боливия",
                desc_ru: ""
            }, {
                mask: "+55-__-____-____",
                cc: "BR",
                cd: "Brazil",
                desc_en: "",
                name_ru: "Бразилия",
                desc_ru: ""
            }, {
                mask: "+55-__-_____-____",
                cc: "BR",
                cd: "Brazil",
                desc_en: "",
                name_ru: "Бразилия",
                desc_ru: ""
            }, {
                mask: "+1(242)___-____",
                cc: "BS",
                cd: "Bahamas",
                desc_en: "",
                name_ru: "Багамские Острова",
                desc_ru: ""
            }, {
                mask: "+975-17-___-___",
                cc: "BT",
                cd: "Bhutan",
                desc_en: "",
                name_ru: "Бутан",
                desc_ru: ""
            }, {
                mask: "+975-_-___-___",
                cc: "BT",
                cd: "Bhutan",
                desc_en: "",
                name_ru: "Бутан",
                desc_ru: ""
            }, {
                mask: "+267-__-___-___",
                cc: "BW",
                cd: "Botswana",
                desc_en: "",
                name_ru: "Ботсвана",
                desc_ru: ""
            }, {
                mask: "+375(__)___-__-__",
                cc: "BY",
                cd: "Belarus",
                desc_en: "",
                name_ru: "Беларусь (Белоруссия)",
                desc_ru: ""
            }, {
                mask: "+501-___-____",
                cc: "BZ",
                cd: "Belize",
                desc_en: "",
                name_ru: "Белиз",
                desc_ru: ""
            }, {
                mask: "+243(___)___-___",
                cc: "CD",
                cd: "Dem. Rep. Congo",
                desc_en: "",
                name_ru: "Дем. Респ. Конго (Киншаса)",
                desc_ru: ""
            }, {
                mask: "+236-__-__-____",
                cc: "CF",
                cd: "Central African Republic",
                desc_en: "",
                name_ru: "Центральноафриканская Республика",
                desc_ru: ""
            }, {
                mask: "+242-__-___-____",
                cc: "CG",
                cd: "Congo (Brazzaville)",
                desc_en: "",
                name_ru: "Конго (Браззавиль)",
                desc_ru: ""
            }, {
                mask: "+41-__-___-____",
                cc: "CH",
                cd: "Switzerland",
                desc_en: "",
                name_ru: "Швейцария",
                desc_ru: ""
            }, {
                mask: "+225-__-___-___",
                cc: "CI",
                cd: "Cote d’Ivoire (Ivory Coast)",
                desc_en: "",
                name_ru: "Кот-д’Ивуар",
                desc_ru: ""
            }, {
                mask: "+682-__-___",
                cc: "CK",
                cd: "Cook Islands",
                desc_en: "",
                name_ru: "Острова Кука",
                desc_ru: ""
            }, {
                mask: "+56-_-____-____",
                cc: "CL",
                cd: "Chile",
                desc_en: "",
                name_ru: "Чили",
                desc_ru: ""
            }, {
                mask: "+237-____-____",
                cc: "CM",
                cd: "Cameroon",
                desc_en: "",
                name_ru: "Камерун",
                desc_ru: ""
            }, {
                mask: "+86(___)____-____",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "Китайская Н.Р.",
                desc_ru: ""
            }, {
                mask: "+86(___)____-___",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "Китайская Н.Р.",
                desc_ru: ""
            }, {
                mask: "+86-__-_____-_____",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "Китайская Н.Р.",
                desc_ru: ""
            }, {
                mask: "+57(___)___-____",
                cc: "CO",
                cd: "Colombia",
                desc_en: "",
                name_ru: "Колумбия",
                desc_ru: ""
            }, {
                mask: "+506-____-____",
                cc: "CR",
                cd: "Costa Rica",
                desc_en: "",
                name_ru: "Коста-Рика",
                desc_ru: ""
            }, {
                mask: "+53-_-___-____",
                cc: "CU",
                cd: "Cuba",
                desc_en: "",
                name_ru: "Куба",
                desc_ru: ""
            }, {
                mask: "+238(___)__-__",
                cc: "CV",
                cd: "Cape Verde",
                desc_en: "",
                name_ru: "Кабо-Верде",
                desc_ru: ""
            }, {
                mask: "+599-___-____",
                cc: "CW",
                cd: "Curacao",
                desc_en: "",
                name_ru: "Кюрасао",
                desc_ru: ""
            }, {
                mask: "+357-__-___-___",
                cc: "CY",
                cd: "Cyprus",
                desc_en: "",
                name_ru: "Кипр",
                desc_ru: ""
            }, {
                mask: "+420(___)___-___",
                cc: "CZ",
                cd: "Czech Republic",
                desc_en: "",
                name_ru: "Чехия",
                desc_ru: ""
            }, {
                mask: "+49(____)___-____",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(___)___-____",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(___)__-____",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(___)__-___",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49(___)__-__",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+49-___-___",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "Германия",
                desc_ru: ""
            }, {
                mask: "+253-__-__-__-__",
                cc: "DJ",
                cd: "Djibouti",
                desc_en: "",
                name_ru: "Джибути",
                desc_ru: ""
            }, {
                mask: "+45-__-__-__-__",
                cc: "DK",
                cd: "Denmark",
                desc_en: "",
                name_ru: "Дания",
                desc_ru: ""
            }, {
                mask: "+1(767)___-____",
                cc: "DM",
                cd: "Dominica",
                desc_en: "",
                name_ru: "Доминика",
                desc_ru: ""
            }, {
                mask: "+1(809)___-____",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "Доминиканская Республика",
                desc_ru: ""
            }, {
                mask: "+1(829)___-____",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "Доминиканская Республика",
                desc_ru: ""
            }, {
                mask: "+1(849)___-____",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "Доминиканская Республика",
                desc_ru: ""
            }, {
                mask: "+213-__-___-____",
                cc: "DZ",
                cd: "Algeria",
                desc_en: "",
                name_ru: "Алжир",
                desc_ru: ""
            }, {
                mask: "+593-__-___-____",
                cc: "EC",
                cd: "Ecuador ",
                desc_en: "mobile",
                name_ru: "Эквадор ",
                desc_ru: "мобильные"
            }, {
                mask: "+593-_-___-____",
                cc: "EC",
                cd: "Ecuador",
                desc_en: "",
                name_ru: "Эквадор",
                desc_ru: ""
            }, {
                mask: "+372-____-____",
                cc: "EE",
                cd: "Estonia ",
                desc_en: "mobile",
                name_ru: "Эстония ",
                desc_ru: "мобильные"
            }, {
                mask: "+372-___-____",
                cc: "EE",
                cd: "Estonia",
                desc_en: "",
                name_ru: "Эстония",
                desc_ru: ""
            }, {
                mask: "+20(___)___-____",
                cc: "EG",
                cd: "Egypt",
                desc_en: "",
                name_ru: "Египет",
                desc_ru: ""
            }, {
                mask: "+291-_-___-___",
                cc: "ER",
                cd: "Eritrea",
                desc_en: "",
                name_ru: "Эритрея",
                desc_ru: ""
            }, {
                mask: "+34(___)___-___",
                cc: "ES",
                cd: "Spain",
                desc_en: "",
                name_ru: "Испания",
                desc_ru: ""
            }, {
                mask: "+251-__-___-____",
                cc: "ET",
                cd: "Ethiopia",
                desc_en: "",
                name_ru: "Эфиопия",
                desc_ru: ""
            }, {
                mask: "+358(___)___-__-__",
                cc: "FI",
                cd: "Finland",
                desc_en: "",
                name_ru: "Финляндия",
                desc_ru: ""
            }, {
                mask: "+679-__-_____",
                cc: "FJ",
                cd: "Fiji",
                desc_en: "",
                name_ru: "Фиджи",
                desc_ru: ""
            }, {
                mask: "+500-_____",
                cc: "FK",
                cd: "Falkland Islands",
                desc_en: "",
                name_ru: "Фолклендские острова",
                desc_ru: ""
            }, {
                mask: "+691-___-____",
                cc: "FM",
                cd: "F.S. Micronesia",
                desc_en: "",
                name_ru: "Ф.Ш. Микронезии",
                desc_ru: ""
            }, {
                mask: "+298-___-___",
                cc: "FO",
                cd: "Faroe Islands",
                desc_en: "",
                name_ru: "Фарерские острова",
                desc_ru: ""
            }, {
                mask: "+262-_____-____",
                cc: "FR",
                cd: "Mayotte",
                desc_en: "",
                name_ru: "Майотта",
                desc_ru: ""
            }, {
                mask: "+33(___)___-___",
                cc: "FR",
                cd: "France",
                desc_en: "",
                name_ru: "Франция",
                desc_ru: ""
            }, {
                mask: "+508-__-____",
                cc: "FR",
                cd: "St Pierre & Miquelon",
                desc_en: "",
                name_ru: "Сен-Пьер и Микелон",
                desc_ru: ""
            }, {
                mask: "+590(___)___-___",
                cc: "FR",
                cd: "Guadeloupe",
                desc_en: "",
                name_ru: "Гваделупа",
                desc_ru: ""
            }, {
                mask: "+241-_-__-__-__",
                cc: "GA",
                cd: "Gabon",
                desc_en: "",
                name_ru: "Габон",
                desc_ru: ""
            }, {
                mask: "+1(473)___-____",
                cc: "GD",
                cd: "Grenada",
                desc_en: "",
                name_ru: "Гренада",
                desc_ru: ""
            }, {
                mask: "+995(___)___-___",
                cc: "GE",
                cd: "Rep. of Georgia",
                desc_en: "",
                name_ru: "Грузия",
                desc_ru: ""
            }, {
                mask: "+594-_____-____",
                cc: "GF",
                cd: "Guiana (French)",
                desc_en: "",
                name_ru: "Фр. Гвиана",
                desc_ru: ""
            }, {
                mask: "+233(___)___-___",
                cc: "GH",
                cd: "Ghana",
                desc_en: "",
                name_ru: "Гана",
                desc_ru: ""
            }, {
                mask: "+350-___-_____",
                cc: "GI",
                cd: "Gibraltar",
                desc_en: "",
                name_ru: "Гибралтар",
                desc_ru: ""
            }, {
                mask: "+299-__-__-__",
                cc: "GL",
                cd: "Greenland",
                desc_en: "",
                name_ru: "Гренландия",
                desc_ru: ""
            }, {
                mask: "+220(___)__-__",
                cc: "GM",
                cd: "Gambia",
                desc_en: "",
                name_ru: "Гамбия",
                desc_ru: ""
            }, {
                mask: "+224-__-___-___",
                cc: "GN",
                cd: "Guinea",
                desc_en: "",
                name_ru: "Гвинея",
                desc_ru: ""
            }, {
                mask: "+240-__-___-____",
                cc: "GQ",
                cd: "Equatorial Guinea",
                desc_en: "",
                name_ru: "Экваториальная Гвинея",
                desc_ru: ""
            }, {
                mask: "+30(___)___-____",
                cc: "GR",
                cd: "Greece",
                desc_en: "",
                name_ru: "Греция",
                desc_ru: ""
            }, {
                mask: "+502-_-___-____",
                cc: "GT",
                cd: "Guatemala",
                desc_en: "",
                name_ru: "Гватемала",
                desc_ru: ""
            }, {
                mask: "+1(671)___-____",
                cc: "GU",
                cd: "Guam",
                desc_en: "",
                name_ru: "Гуам",
                desc_ru: ""
            }, {
                mask: "+245-_-______",
                cc: "GW",
                cd: "Guinea-Bissau",
                desc_en: "",
                name_ru: "Гвинея-Бисау",
                desc_ru: ""
            }, {
                mask: "+592-___-____",
                cc: "GY",
                cd: "Guyana",
                desc_en: "",
                name_ru: "Гайана",
                desc_ru: ""
            }, {
                mask: "+852-____-____",
                cc: "HK",
                cd: "Hong Kong",
                desc_en: "",
                name_ru: "Гонконг",
                desc_ru: ""
            }, {
                mask: "+504-____-____",
                cc: "HN",
                cd: "Honduras",
                desc_en: "",
                name_ru: "Гондурас",
                desc_ru: ""
            }, {
                mask: "+385-(__)-___-___",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "Хорватия",
                desc_ru: ""
            }, {
                mask: "+385-(__)-___-____",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "Хорватия",
                desc_ru: ""
            }, {
                mask: "+385-1-____-___",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "Хорватия",
                desc_ru: ""
            }, {
                mask: "+509-__-__-____",
                cc: "HT",
                cd: "Haiti",
                desc_en: "",
                name_ru: "Гаити",
                desc_ru: ""
            }, {
                mask: "+36(___)___-___",
                cc: "HU",
                cd: "Hungary",
                desc_en: "",
                name_ru: "Венгрия",
                desc_ru: ""
            }, {
                mask: "+62(8__)___-____",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "Индонезия ",
                desc_ru: "мобильные"
            }, {
                mask: "+62-__-___-__",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "Индонезия",
                desc_ru: ""
            }, {
                mask: "+62-__-___-___",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "Индонезия",
                desc_ru: ""
            }, {
                mask: "+62-__-___-____",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "Индонезия",
                desc_ru: ""
            }, {
                mask: "+62(8__)___-___",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "Индонезия ",
                desc_ru: "мобильные"
            }, {
                mask: "+62(8__)___-__-___",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "Индонезия ",
                desc_ru: "мобильные"
            }, {
                mask: "+353(___)___-___",
                cc: "IE",
                cd: "Ireland",
                desc_en: "",
                name_ru: "Ирландия",
                desc_ru: ""
            }, {
                mask: "+972-5_-___-____",
                cc: "IL",
                cd: "Israel ",
                desc_en: "mobile",
                name_ru: "Израиль ",
                desc_ru: "мобильные"
            }, {
                mask: "+972-_-___-____",
                cc: "IL",
                cd: "Israel",
                desc_en: "",
                name_ru: "Израиль",
                desc_ru: ""
            }, {
                mask: "+91(____)___-___",
                cc: "IN",
                cd: "India",
                desc_en: "",
                name_ru: "Индия",
                desc_ru: ""
            }, {
                mask: "+246-___-____",
                cc: "IO",
                cd: "Diego Garcia",
                desc_en: "",
                name_ru: "Диего-Гарсия",
                desc_ru: ""
            }, {
                mask: "+964(___)___-____",
                cc: "IQ",
                cd: "Iraq",
                desc_en: "",
                name_ru: "Ирак",
                desc_ru: ""
            }, {
                mask: "+98(___)___-____",
                cc: "IR",
                cd: "Iran",
                desc_en: "",
                name_ru: "Иран",
                desc_ru: ""
            }, {
                mask: "+354-___-____",
                cc: "IS",
                cd: "Iceland",
                desc_en: "",
                name_ru: "Исландия",
                desc_ru: ""
            }, {
                mask: "+39(___)____-___",
                cc: "IT",
                cd: "Italy",
                desc_en: "",
                name_ru: "Италия",
                desc_ru: ""
            }, {
                mask: "+1(876)___-____",
                cc: "JM",
                cd: "Jamaica",
                desc_en: "",
                name_ru: "Ямайка",
                desc_ru: ""
            }, {
                mask: "+962-_-____-____",
                cc: "JO",
                cd: "Jordan",
                desc_en: "",
                name_ru: "Иордания",
                desc_ru: ""
            }, {
                mask: "+81-__-____-____",
                cc: "JP",
                cd: "Japan ",
                desc_en: "mobile",
                name_ru: "Япония ",
                desc_ru: "мобильные"
            }, {
                mask: "+81(___)___-___",
                cc: "JP",
                cd: "Japan",
                desc_en: "",
                name_ru: "Япония",
                desc_ru: ""
            }, {
                mask: "+254-___-______",
                cc: "KE",
                cd: "Kenya",
                desc_en: "",
                name_ru: "Кения",
                desc_ru: ""
            }, {
                mask: "+996(___)___-___",
                cc: "KG",
                cd: "Kyrgyzstan",
                desc_en: "",
                name_ru: "Киргизия",
                desc_ru: ""
            }, {
                mask: "+855-__-___-___",
                cc: "KH",
                cd: "Cambodia",
                desc_en: "",
                name_ru: "Камбоджа",
                desc_ru: ""
            }, {
                mask: "+686-__-___",
                cc: "KI",
                cd: "Kiribati",
                desc_en: "",
                name_ru: "Кирибати",
                desc_ru: ""
            }, {
                mask: "+269-__-_____",
                cc: "KM",
                cd: "Comoros",
                desc_en: "",
                name_ru: "Коморы",
                desc_ru: ""
            }, {
                mask: "+1(869)___-____",
                cc: "KN",
                cd: "Saint Kitts & Nevis",
                desc_en: "",
                name_ru: "Сент-Китс и Невис",
                desc_ru: ""
            }, {
                mask: "+850-191-___-____",
                cc: "KP",
                cd: "DPR Korea (North) ",
                desc_en: "mobile",
                name_ru: "Корейская НДР ",
                desc_ru: "мобильные"
            }, {
                mask: "+850-__-___-___",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-___-____-___",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-___-___",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-____-____",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+850-____-_____________",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "Корейская НДР",
                desc_ru: ""
            }, {
                mask: "+82-__-___-____",
                cc: "KR",
                cd: "Korea (South)",
                desc_en: "",
                name_ru: "Респ. Корея",
                desc_ru: ""
            }, {
                mask: "+965-____-____",
                cc: "KW",
                cd: "Kuwait",
                desc_en: "",
                name_ru: "Кувейт",
                desc_ru: ""
            }, {
                mask: "+1(345)___-____",
                cc: "KY",
                cd: "Cayman Islands",
                desc_en: "",
                name_ru: "Каймановы острова",
                desc_ru: ""
            }, {
                mask: "+7(___)___-__-__",
                cc: "KZ",
                cd: "Kazakhstan",
                desc_en: "",
                name_ru: "Казахстан",
                desc_ru: ""
            }, {
                mask: "+7(7__)___-__-__",
                cc: "KZ",
                cd: "Kazakhstan",
                desc_en: "",
                name_ru: "Казахстан",
                desc_ru: ""
            }, {
                mask: "+856(20__)___-___",
                cc: "LA",
                cd: "Laos ",
                desc_en: "mobile",
                name_ru: "Лаос ",
                desc_ru: "мобильные"
            }, {
                mask: "+856-__-___-___",
                cc: "LA",
                cd: "Laos",
                desc_en: "",
                name_ru: "Лаос",
                desc_ru: ""
            }, {
                mask: "+961-__-___-___",
                cc: "LB",
                cd: "Lebanon ",
                desc_en: "mobile",
                name_ru: "Ливан ",
                desc_ru: "мобильные"
            }, {
                mask: "+961-_-___-___",
                cc: "LB",
                cd: "Lebanon",
                desc_en: "",
                name_ru: "Ливан",
                desc_ru: ""
            }, {
                mask: "+1(758)___-____",
                cc: "LC",
                cd: "Saint Lucia",
                desc_en: "",
                name_ru: "Сент-Люсия",
                desc_ru: ""
            }, {
                mask: "+423(___)___-____",
                cc: "LI",
                cd: "Liechtenstein",
                desc_en: "",
                name_ru: "Лихтенштейн",
                desc_ru: ""
            }, {
                mask: "+94-__-___-____",
                cc: "LK",
                cd: "Sri Lanka",
                desc_en: "",
                name_ru: "Шри-Ланка",
                desc_ru: ""
            }, {
                mask: "+231-__-___-___",
                cc: "LR",
                cd: "Liberia",
                desc_en: "",
                name_ru: "Либерия",
                desc_ru: ""
            }, {
                mask: "+266-_-___-____",
                cc: "LS",
                cd: "Lesotho",
                desc_en: "",
                name_ru: "Лесото",
                desc_ru: ""
            }, {
                mask: "+370(___)__-___",
                cc: "LT",
                cd: "Lithuania",
                desc_en: "",
                name_ru: "Литва",
                desc_ru: ""
            }, {
                mask: "+352-___-___",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+352-____-___",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+352-_____-___",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+352-______-___",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "Люксембург",
                desc_ru: ""
            }, {
                mask: "+371-__-___-___",
                cc: "LV",
                cd: "Latvia",
                desc_en: "",
                name_ru: "Латвия",
                desc_ru: ""
            }, {
                mask: "+218-__-___-___",
                cc: "LY",
                cd: "Libya",
                desc_en: "",
                name_ru: "Ливия",
                desc_ru: ""
            }, {
                mask: "+218-21-___-____",
                cc: "LY",
                cd: "Libya",
                desc_en: "Tripoli",
                name_ru: "Ливия",
                desc_ru: "Триполи"
            }, {
                mask: "+212-__-____-___",
                cc: "MA",
                cd: "Morocco",
                desc_en: "",
                name_ru: "Марокко",
                desc_ru: ""
            }, {
                mask: "+377(___)___-___",
                cc: "MC",
                cd: "Monaco",
                desc_en: "",
                name_ru: "Монако",
                desc_ru: ""
            }, {
                mask: "+377-__-___-___",
                cc: "MC",
                cd: "Monaco",
                desc_en: "",
                name_ru: "Монако",
                desc_ru: ""
            }, {
                mask: "+373-____-____",
                cc: "MD",
                cd: "Moldova",
                desc_en: "",
                name_ru: "Молдова",
                desc_ru: ""
            }, {
                mask: "+382-__-___-___",
                cc: "ME",
                cd: "Montenegro",
                desc_en: "",
                name_ru: "Черногория",
                desc_ru: ""
            }, {
                mask: "+261-__-__-_____",
                cc: "MG",
                cd: "Madagascar",
                desc_en: "",
                name_ru: "Мадагаскар",
                desc_ru: ""
            }, {
                mask: "+692-___-____",
                cc: "MH",
                cd: "Marshall Islands",
                desc_en: "",
                name_ru: "Маршалловы Острова",
                desc_ru: ""
            }, {
                mask: "+389-__-___-___",
                cc: "MK",
                cd: "Republic of Macedonia",
                desc_en: "",
                name_ru: "Респ. Македония",
                desc_ru: ""
            }, {
                mask: "+223-__-__-____",
                cc: "ML",
                cd: "Mali",
                desc_en: "",
                name_ru: "Мали",
                desc_ru: ""
            }, {
                mask: "+95-__-___-___",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "Бирма (Мьянма)",
                desc_ru: ""
            }, {
                mask: "+95-_-___-___",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "Бирма (Мьянма)",
                desc_ru: ""
            }, {
                mask: "+95-___-___",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "Бирма (Мьянма)",
                desc_ru: ""
            }, {
                mask: "+976-__-__-____",
                cc: "MN",
                cd: "Mongolia",
                desc_en: "",
                name_ru: "Монголия",
                desc_ru: ""
            }, {
                mask: "+853-____-____",
                cc: "MO",
                cd: "Macau",
                desc_en: "",
                name_ru: "Макао",
                desc_ru: ""
            }, {
                mask: "+1(670)___-____",
                cc: "MP",
                cd: "Northern Mariana Islands",
                desc_en: "",
                name_ru: "Северные Марианские острова Сайпан",
                desc_ru: ""
            }, {
                mask: "+596(___)__-__-__",
                cc: "MQ",
                cd: "Martinique",
                desc_en: "",
                name_ru: "Мартиника",
                desc_ru: ""
            }, {
                mask: "+222-__-__-____",
                cc: "MR",
                cd: "Mauritania",
                desc_en: "",
                name_ru: "Мавритания",
                desc_ru: ""
            }, {
                mask: "+1(664)___-____",
                cc: "MS",
                cd: "Montserrat",
                desc_en: "",
                name_ru: "Монтсеррат",
                desc_ru: ""
            }, {
                mask: "+356-____-____",
                cc: "MT",
                cd: "Malta",
                desc_en: "",
                name_ru: "Мальта",
                desc_ru: ""
            }, {
                mask: "+230-___-____",
                cc: "MU",
                cd: "Mauritius",
                desc_en: "",
                name_ru: "Маврикий",
                desc_ru: ""
            }, {
                mask: "+960-___-____",
                cc: "MV",
                cd: "Maldives",
                desc_en: "",
                name_ru: "Мальдивские острова",
                desc_ru: ""
            }, {
                mask: "+265-1-___-___",
                cc: "MW",
                cd: "Malawi",
                desc_en: "Telecom Ltd",
                name_ru: "Малави",
                desc_ru: "Telecom Ltd"
            }, {
                mask: "+265-_-____-____",
                cc: "MW",
                cd: "Malawi",
                desc_en: "",
                name_ru: "Малави",
                desc_ru: ""
            }, {
                mask: "+52(___)___-____",
                cc: "MX",
                cd: "Mexico",
                desc_en: "",
                name_ru: "Мексика",
                desc_ru: ""
            }, {
                mask: "+52-__-__-____",
                cc: "MX",
                cd: "Mexico",
                desc_en: "",
                name_ru: "Мексика",
                desc_ru: ""
            }, {
                mask: "+60-__-___-____",
                cc: "MY",
                cd: "Malaysia ",
                desc_en: "mobile",
                name_ru: "Малайзия ",
                desc_ru: "мобильные"
            }, {
                mask: "+60-11-____-____",
                cc: "MY",
                cd: "Malaysia ",
                desc_en: "mobile",
                name_ru: "Малайзия ",
                desc_ru: "мобильные"
            }, {
                mask: "+60(___)___-___",
                cc: "MY",
                cd: "Malaysia",
                desc_en: "",
                name_ru: "Малайзия",
                desc_ru: ""
            }, {
                mask: "+60-__-___-___",
                cc: "MY",
                cd: "Malaysia",
                desc_en: "",
                name_ru: "Малайзия",
                desc_ru: ""
            }, {
                mask: "+60-_-___-___",
                cc: "MY",
                cd: "Malaysia",
                desc_en: "",
                name_ru: "Малайзия",
                desc_ru: ""
            }, {
                mask: "+258-__-___-___",
                cc: "MZ",
                cd: "Mozambique",
                desc_en: "",
                name_ru: "Мозамбик",
                desc_ru: ""
            }, {
                mask: "+264-__-___-____",
                cc: "NA",
                cd: "Namibia",
                desc_en: "",
                name_ru: "Намибия",
                desc_ru: ""
            }, {
                mask: "+687-__-____",
                cc: "NC",
                cd: "New Caledonia",
                desc_en: "",
                name_ru: "Новая Каледония",
                desc_ru: ""
            }, {
                mask: "+227-__-__-____",
                cc: "NE",
                cd: "Niger",
                desc_en: "",
                name_ru: "Нигер",
                desc_ru: ""
            }, {
                mask: "+672-3__-___",
                cc: "NF",
                cd: "Norfolk Island",
                desc_en: "",
                name_ru: "Норфолк (остров)",
                desc_ru: ""
            }, {
                mask: "+234(___)___-____",
                cc: "NG",
                cd: "Nigeria",
                desc_en: "",
                name_ru: "Нигерия",
                desc_ru: ""
            }, {
                mask: "+234-__-___-___",
                cc: "NG",
                cd: "Nigeria",
                desc_en: "",
                name_ru: "Нигерия",
                desc_ru: ""
            }, {
                mask: "+234-__-___-__",
                cc: "NG",
                cd: "Nigeria",
                desc_en: "",
                name_ru: "Нигерия",
                desc_ru: ""
            }, {
                mask: "+234(___)___-____",
                cc: "NG",
                cd: "Nigeria ",
                desc_en: "mobile",
                name_ru: "Нигерия ",
                desc_ru: "мобильные"
            }, {
                mask: "+505-____-____",
                cc: "NI",
                cd: "Nicaragua",
                desc_en: "",
                name_ru: "Никарагуа",
                desc_ru: ""
            }, {
                mask: "+31-__-___-____",
                cc: "NL",
                cd: "Netherlands",
                desc_en: "",
                name_ru: "Нидерланды",
                desc_ru: ""
            }, {
                mask: "+47(___)__-___",
                cc: "NO",
                cd: "Norway",
                desc_en: "",
                name_ru: "Норвегия",
                desc_ru: ""
            }, {
                mask: "+977-__-___-___",
                cc: "NP",
                cd: "Nepal",
                desc_en: "",
                name_ru: "Непал",
                desc_ru: ""
            }, {
                mask: "+674-___-____",
                cc: "NR",
                cd: "Nauru",
                desc_en: "",
                name_ru: "Науру",
                desc_ru: ""
            }, {
                mask: "+683-____",
                cc: "NU",
                cd: "Niue",
                desc_en: "",
                name_ru: "Ниуэ",
                desc_ru: ""
            }, {
                mask: "+64(___)___-___",
                cc: "NZ",
                cd: "New Zealand",
                desc_en: "",
                name_ru: "Новая Зеландия",
                desc_ru: ""
            }, {
                mask: "+64-__-___-___",
                cc: "NZ",
                cd: "New Zealand",
                desc_en: "",
                name_ru: "Новая Зеландия",
                desc_ru: ""
            }, {
                mask: "+64(___)___-____",
                cc: "NZ",
                cd: "New Zealand",
                desc_en: "",
                name_ru: "Новая Зеландия",
                desc_ru: ""
            }, {
                mask: "+968-__-___-___",
                cc: "OM",
                cd: "Oman",
                desc_en: "",
                name_ru: "Оман",
                desc_ru: ""
            }, {
                mask: "+507-___-____",
                cc: "PA",
                cd: "Panama",
                desc_en: "",
                name_ru: "Панама",
                desc_ru: ""
            }, {
                mask: "+51(___)___-___",
                cc: "PE",
                cd: "Peru",
                desc_en: "",
                name_ru: "Перу",
                desc_ru: ""
            }, {
                mask: "+689-__-__-__",
                cc: "PF",
                cd: "French Polynesia",
                desc_en: "",
                name_ru: "Французская Полинезия (Таити)",
                desc_ru: ""
            }, {
                mask: "+675(___)__-___",
                cc: "PG",
                cd: "Papua New Guinea",
                desc_en: "",
                name_ru: "Папуа-Новая Гвинея",
                desc_ru: ""
            }, {
                mask: "+63(___)___-____",
                cc: "PH",
                cd: "Philippines",
                desc_en: "",
                name_ru: "Филиппины",
                desc_ru: ""
            }, {
                mask: "+92(___)___-____",
                cc: "PK",
                cd: "Pakistan",
                desc_en: "",
                name_ru: "Пакистан",
                desc_ru: ""
            }, {
                mask: "+48(___)___-___",
                cc: "PL",
                cd: "Poland",
                desc_en: "",
                name_ru: "Польша",
                desc_ru: ""
            }, {
                mask: "+970-__-___-____",
                cc: "PS",
                cd: "Palestine",
                desc_en: "",
                name_ru: "Палестина",
                desc_ru: ""
            }, {
                mask: "+351-__-___-____",
                cc: "PT",
                cd: "Portugal",
                desc_en: "",
                name_ru: "Португалия",
                desc_ru: ""
            }, {
                mask: "+680-___-____",
                cc: "PW",
                cd: "Palau",
                desc_en: "",
                name_ru: "Палау",
                desc_ru: ""
            }, {
                mask: "+595(___)___-___",
                cc: "PY",
                cd: "Paraguay",
                desc_en: "",
                name_ru: "Парагвай",
                desc_ru: ""
            }, {
                mask: "+974-____-____",
                cc: "QA",
                cd: "Qatar",
                desc_en: "",
                name_ru: "Катар",
                desc_ru: ""
            }, {
                mask: "+262-_____-____",
                cc: "RE",
                cd: "Reunion",
                desc_en: "",
                name_ru: "Реюньон",
                desc_ru: ""
            }, {
                mask: "+40-__-___-____",
                cc: "RO",
                cd: "Romania",
                desc_en: "",
                name_ru: "Румыния",
                desc_ru: ""
            }, {
                mask: "+381-__-___-____",
                cc: "RS",
                cd: "Serbia",
                desc_en: "",
                name_ru: "Сербия",
                desc_ru: ""
            }, {
                mask: "+7(___)___-__-__",
                cc: "RU",
                cd: "Russia",
                desc_en: "",
                name_ru: "Россия",
                desc_ru: ""
            }, {
                mask: "+250(___)___-___",
                cc: "RW",
                cd: "Rwanda",
                desc_en: "",
                name_ru: "Руанда",
                desc_ru: ""
            }, {
                mask: "+966-5-____-____",
                cc: "SA",
                cd: "Saudi Arabia ",
                desc_en: "mobile",
                name_ru: "Саудовская Аравия ",
                desc_ru: "мобильные"
            }, {
                mask: "+966-_-___-____",
                cc: "SA",
                cd: "Saudi Arabia",
                desc_en: "",
                name_ru: "Саудовская Аравия",
                desc_ru: ""
            }, {
                mask: "+677-___-____",
                cc: "SB",
                cd: "Solomon Islands ",
                desc_en: "mobile",
                name_ru: "Соломоновы Острова ",
                desc_ru: "мобильные"
            }, {
                mask: "+677-_____",
                cc: "SB",
                cd: "Solomon Islands",
                desc_en: "",
                name_ru: "Соломоновы Острова",
                desc_ru: ""
            }, {
                mask: "+248-_-___-___",
                cc: "SC",
                cd: "Seychelles",
                desc_en: "",
                name_ru: "Сейшелы",
                desc_ru: ""
            }, {
                mask: "+249-__-___-____",
                cc: "SD",
                cd: "Sudan",
                desc_en: "",
                name_ru: "Судан",
                desc_ru: ""
            }, {
                mask: "+46-__-___-____",
                cc: "SE",
                cd: "Sweden",
                desc_en: "",
                name_ru: "Швеция",
                desc_ru: ""
            }, {
                mask: "+65-____-____",
                cc: "SG",
                cd: "Singapore",
                desc_en: "",
                name_ru: "Сингапур",
                desc_ru: ""
            }, {
                mask: "+290-____",
                cc: "SH",
                cd: "Saint Helena",
                desc_en: "",
                name_ru: "Остров Святой Елены",
                desc_ru: ""
            }, {
                mask: "+290-____",
                cc: "SH",
                cd: "Tristan da Cunha",
                desc_en: "",
                name_ru: "Тристан-да-Кунья",
                desc_ru: ""
            }, {
                mask: "+386-__-___-___",
                cc: "SI",
                cd: "Slovenia",
                desc_en: "",
                name_ru: "Словения",
                desc_ru: ""
            }, {
                mask: "+421(___)___-___",
                cc: "SK",
                cd: "Slovakia",
                desc_en: "",
                name_ru: "Словакия",
                desc_ru: ""
            }, {
                mask: "+232-__-______",
                cc: "SL",
                cd: "Sierra Leone",
                desc_en: "",
                name_ru: "Сьерра-Леоне",
                desc_ru: ""
            }, {
                mask: "+378-____-______",
                cc: "SM",
                cd: "San Marino",
                desc_en: "",
                name_ru: "Сан-Марино",
                desc_ru: ""
            }, {
                mask: "+221-__-___-____",
                cc: "SN",
                cd: "Senegal",
                desc_en: "",
                name_ru: "Сенегал",
                desc_ru: ""
            }, {
                mask: "+252-__-___-___",
                cc: "SO",
                cd: "Somalia",
                desc_en: "",
                name_ru: "Сомали",
                desc_ru: ""
            }, {
                mask: "+252-_-___-___",
                cc: "SO",
                cd: "Somalia",
                desc_en: "",
                name_ru: "Сомали",
                desc_ru: ""
            }, {
                mask: "+252-_-___-___",
                cc: "SO",
                cd: "Somalia ",
                desc_en: "mobile",
                name_ru: "Сомали ",
                desc_ru: "мобильные"
            }, {
                mask: "+597-___-____",
                cc: "SR",
                cd: "Suriname ",
                desc_en: "mobile",
                name_ru: "Суринам ",
                desc_ru: "мобильные"
            }, {
                mask: "+597-___-___",
                cc: "SR",
                cd: "Suriname",
                desc_en: "",
                name_ru: "Суринам",
                desc_ru: ""
            }, {
                mask: "+211-__-___-____",
                cc: "SS",
                cd: "South Sudan",
                desc_en: "",
                name_ru: "Южный Судан",
                desc_ru: ""
            }, {
                mask: "+239-__-_____",
                cc: "ST",
                cd: "Sao Tome and Principe",
                desc_en: "",
                name_ru: "Сан-Томе и Принсипи",
                desc_ru: ""
            }, {
                mask: "+503-__-__-____",
                cc: "SV",
                cd: "El Salvador",
                desc_en: "",
                name_ru: "Сальвадор",
                desc_ru: ""
            }, {
                mask: "+1(721)___-____",
                cc: "SX",
                cd: "Sint Maarten",
                desc_en: "",
                name_ru: "Синт-Маартен",
                desc_ru: ""
            }, {
                mask: "+963-__-____-___",
                cc: "SY",
                cd: "Syrian Arab Republic",
                desc_en: "",
                name_ru: "Сирийская арабская республика",
                desc_ru: ""
            }, {
                mask: "+268-__-__-____",
                cc: "SZ",
                cd: "Swaziland",
                desc_en: "",
                name_ru: "Свазиленд",
                desc_ru: ""
            }, {
                mask: "+1(649)___-____",
                cc: "TC",
                cd: "Turks & Caicos",
                desc_en: "",
                name_ru: "Тёркс и Кайкос",
                desc_ru: ""
            }, {
                mask: "+235-__-__-__-__",
                cc: "TD",
                cd: "Chad",
                desc_en: "",
                name_ru: "Чад",
                desc_ru: ""
            }, {
                mask: "+228-__-___-___",
                cc: "TG",
                cd: "Togo",
                desc_en: "",
                name_ru: "Того",
                desc_ru: ""
            }, {
                mask: "+66-__-___-____",
                cc: "TH",
                cd: "Thailand ",
                desc_en: "mobile",
                name_ru: "Таиланд ",
                desc_ru: "мобильные"
            }, {
                mask: "+66-__-___-___",
                cc: "TH",
                cd: "Thailand",
                desc_en: "",
                name_ru: "Таиланд",
                desc_ru: ""
            }, {
                mask: "+992-__-___-____",
                cc: "TJ",
                cd: "Tajikistan",
                desc_en: "",
                name_ru: "Таджикистан",
                desc_ru: ""
            }, {
                mask: "+690-____",
                cc: "TK",
                cd: "Tokelau",
                desc_en: "",
                name_ru: "Токелау",
                desc_ru: ""
            }, {
                mask: "+670-___-____",
                cc: "TL",
                cd: "East Timor",
                desc_en: "",
                name_ru: "Восточный Тимор",
                desc_ru: ""
            }, {
                mask: "+670-77_-_____",
                cc: "TL",
                cd: "East Timor",
                desc_en: "Timor Telecom",
                name_ru: "Восточный Тимор",
                desc_ru: "Timor Telecom"
            }, {
                mask: "+670-78_-_____",
                cc: "TL",
                cd: "East Timor",
                desc_en: "Timor Telecom",
                name_ru: "Восточный Тимор",
                desc_ru: "Timor Telecom"
            }, {
                mask: "+993-_-___-____",
                cc: "TM",
                cd: "Turkmenistan",
                desc_en: "",
                name_ru: "Туркменистан",
                desc_ru: ""
            }, {
                mask: "+216-__-___-___",
                cc: "TN",
                cd: "Tunisia",
                desc_en: "",
                name_ru: "Тунис",
                desc_ru: ""
            }, {
                mask: "+676-_____",
                cc: "TO",
                cd: "Tonga",
                desc_en: "",
                name_ru: "Тонга",
                desc_ru: ""
            }, {
                mask: "+90(___)___-____",
                cc: "TR",
                cd: "Turkey",
                desc_en: "",
                name_ru: "Турция",
                desc_ru: ""
            }, {
                mask: "+1(868)___-____",
                cc: "TT",
                cd: "Trinidad & Tobago",
                desc_en: "",
                name_ru: "Тринидад и Тобаго",
                desc_ru: ""
            }, {
                mask: "+688-90____",
                cc: "TV",
                cd: "Tuvalu ",
                desc_en: "mobile",
                name_ru: "Тувалу ",
                desc_ru: "мобильные"
            }, {
                mask: "+688-2____",
                cc: "TV",
                cd: "Tuvalu",
                desc_en: "",
                name_ru: "Тувалу",
                desc_ru: ""
            }, {
                mask: "+886-_-____-____",
                cc: "TW",
                cd: "Taiwan",
                desc_en: "",
                name_ru: "Тайвань",
                desc_ru: ""
            }, {
                mask: "+886-____-____",
                cc: "TW",
                cd: "Taiwan",
                desc_en: "",
                name_ru: "Тайвань",
                desc_ru: ""
            }, {
                mask: "+255-__-___-____",
                cc: "TZ",
                cd: "Tanzania",
                desc_en: "",
                name_ru: "Танзания",
                desc_ru: ""
            }, {
                mask: "+380(__)___-__-__",
                cc: "UA",
                cd: "Ukraine",
                desc_en: "",
                name_ru: "Украина",
                desc_ru: ""
            }, {
                mask: "+256(___)___-___",
                cc: "UG",
                cd: "Uganda",
                desc_en: "",
                name_ru: "Уганда",
                desc_ru: ""
            }, {
                mask: "+44-__-____-____",
                cc: "UK",
                cd: "United Kingdom",
                desc_en: "",
                name_ru: "Великобритания",
                desc_ru: ""
            }, {
                mask: "+598-_-___-__-__",
                cc: "UY",
                cd: "Uruguay",
                desc_en: "",
                name_ru: "Уругвай",
                desc_ru: ""
            }, {
                mask: "+998-__-___-____",
                cc: "UZ",
                cd: "Uzbekistan",
                desc_en: "",
                name_ru: "Узбекистан",
                desc_ru: ""
            }, {
                mask: "+39-6-698-_____",
                cc: "VA",
                cd: "Vatican City",
                desc_en: "",
                name_ru: "Ватикан",
                desc_ru: ""
            }, {
                mask: "+1(784)___-____",
                cc: "VC",
                cd: "Saint Vincent & the Grenadines",
                desc_en: "",
                name_ru: "Сент-Винсент и Гренадины",
                desc_ru: ""
            }, {
                mask: "+58(___)___-____",
                cc: "VE",
                cd: "Venezuela",
                desc_en: "",
                name_ru: "Венесуэла",
                desc_ru: ""
            }, {
                mask: "+1(284)___-____",
                cc: "VG",
                cd: "British Virgin Islands",
                desc_en: "",
                name_ru: "Британские Виргинские острова",
                desc_ru: ""
            }, {
                mask: "+1(340)___-____",
                cc: "VI",
                cd: "US Virgin Islands",
                desc_en: "",
                name_ru: "Американские Виргинские острова",
                desc_ru: ""
            }, {
                mask: "+84-__-____-___",
                cc: "VN",
                cd: "Vietnam",
                desc_en: "",
                name_ru: "Вьетнам",
                desc_ru: ""
            }, {
                mask: "+84(___)____-___",
                cc: "VN",
                cd: "Vietnam",
                desc_en: "",
                name_ru: "Вьетнам",
                desc_ru: ""
            }, {
                mask: "+678-__-_____",
                cc: "VU",
                cd: "Vanuatu ",
                desc_en: "mobile",
                name_ru: "Вануату ",
                desc_ru: "мобильные"
            }, {
                mask: "+678-_____",
                cc: "VU",
                cd: "Vanuatu",
                desc_en: "",
                name_ru: "Вануату",
                desc_ru: ""
            }, {
                mask: "+681-__-____",
                cc: "WF",
                cd: "Wallis and Futuna",
                desc_en: "",
                name_ru: "Уоллис и Футуна",
                desc_ru: ""
            }, {
                mask: "+685-__-____",
                cc: "WS",
                cd: "Samoa",
                desc_en: "",
                name_ru: "Самоа",
                desc_ru: ""
            }, {
                mask: "+967-___-___-___",
                cc: "YE",
                cd: "Yemen ",
                desc_en: "mobile",
                name_ru: "Йемен ",
                desc_ru: "мобильные"
            }, {
                mask: "+967-_-___-___",
                cc: "YE",
                cd: "Yemen",
                desc_en: "",
                name_ru: "Йемен",
                desc_ru: ""
            }, {
                mask: "+967-__-___-___",
                cc: "YE",
                cd: "Yemen",
                desc_en: "",
                name_ru: "Йемен",
                desc_ru: ""
            }, {
                mask: "+27-__-___-____",
                cc: "ZA",
                cd: "South Africa",
                desc_en: "",
                name_ru: "Южно-Африканская Респ.",
                desc_ru: ""
            }, {
                mask: "+260-__-___-____",
                cc: "ZM",
                cd: "Zambia",
                desc_en: "",
                name_ru: "Замбия",
                desc_ru: ""
            }, {
                mask: "+263-_-______",
                cc: "ZW",
                cd: "Zimbabwe",
                desc_en: "",
                name_ru: "Зимбабве",
                desc_ru: ""
            }, {
                mask: "+1(___)___-____",
                cc: [ "US", "CA" ],
                cd: "USA and Canada",
                desc_en: "",
                name_ru: "США и Канада",
                desc_ru: ""
            } ]
        }
    }), Inputmask;
});