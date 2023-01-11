export class EmailRegex {
    private EMAIL_REGEX: RegExp = /^[a-zA-Z0-9]+[a-zA-Z0-9]*@+[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/;

    public validate(regex: string): boolean {
        return this.EMAIL_REGEX.test(regex);
    }
}