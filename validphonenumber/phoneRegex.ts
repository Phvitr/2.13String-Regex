export class PhoneRegex {
    private P_REGEX: RegExp = /^0(3[2-9]|7[0]|7[6-9]|8[1-5]|8[8-9]|9[0-4]).[0-9]{7}$/;


    public validate(regex: string): boolean {
        return this.P_REGEX.test(regex)
    }
}
let phoneRegex = new PhoneRegex();
console.log(phoneRegex.validate("071.1234567"))