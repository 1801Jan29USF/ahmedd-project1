export class Ticket {
    reimb_id: Number;
    description: String;
    typeId: Number;
    amount: Number;
    submitted: Date;
    resolved: Number;
    authorId: Number;
    statusId: Number;
    resolverId: Date;
    REIMB_RESOLVER: Number;

    constructor(reimb_id: Number = 0, description: String = '', typeId: Number = 0, submitted: Date = new Date(),
        resolved: Number = 0, authorId: Number = 0, statusId: Number = 0, resolverId: Date = new Date(), REIMB_RESOLVER: Number = 0) {

        this.reimb_id = reimb_id;
        this.description = description;
        this.typeId = typeId;
        this.submitted = submitted;
        this.resolved = resolved;
        this.authorId = authorId;
        this.statusId = statusId;
        this.resolverId = resolverId;
        this.reimb_id = reimb_id;
    }

}
