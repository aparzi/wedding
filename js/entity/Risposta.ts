export class Risposta {

    fullname: string;
    email: string;
    reply: boolean;
    description: string;

    constructor(fullname: string, email: string, reply: boolean, description: string) {
        this.fullname = fullname;
        this.email = email;
        this.reply = reply;
        this.description = description;
    }
}
