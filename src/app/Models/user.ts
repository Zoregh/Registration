export class User {
    name: string;
    email: string;
    password: string;
    phone: string;

    checkFields() {
        if (this.email || this.phone) {
            return true;
        }
        return false;
    }
}