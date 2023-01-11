"use strict";
exports.__esModule = true;
var pattern_1 = require("./pattern");
var emailRegex = new pattern_1.EmailRegex();
var validEmail = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com", "ab@gmail.com"];
var invalidEmail = ["@gmail.com", "ab@gmail.com", "#abc@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var email = validEmail_1[_i];
    var isValid = emailRegex.validate(email);
    console.log("Email " + email + " is valid: " + isValid);
}
