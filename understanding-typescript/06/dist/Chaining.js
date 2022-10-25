"use strict";
var _a;
var aa = {
    id: 23,
    name: {
        fn: 'Raphael',
        ln: 'Molinaro',
        //middle: 'Coelho'
    }
};
console.log((_a = aa.name) === null || _a === void 0 ? void 0 : _a.middle);
var user30 = null;
var user31 = undefined;
var user32 = '';
var user33 = 0;
var user34 = false;
var OR = user34 || 'DEFAULT'; // Acept empty, undefined or null , zero, false.
var NULL = user34 !== null && user34 !== void 0 ? user34 : 'DEFAULT'; // ONLY accept undefined or null.
console.log(OR);
console.log(NULL);
