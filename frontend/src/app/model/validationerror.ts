export class ValidationError {
    constructor (
        public field : String,
        public message : String
    ) {}
}