"use strict";
exports.__esModule = true;
exports.PhoneRegex = void 0;
var PhoneRegex = /** @class */ (function () {
    function PhoneRegex() {
        this.P_REGEX = /^0(3[2-9]|7[0]|7[6-9]|8[1-5]|8[8-9]|9[0-4]).[0-9]{7}$/;
    }
    PhoneRegex.prototype.validate = function (regex) {
        return this.P_REGEX.test(regex);
    };
    return PhoneRegex;
}());
exports.PhoneRegex = PhoneRegex;
var phoneRegex = new PhoneRegex();
console.log(phoneRegex.validate("071.1234567"));
