import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Contract {
    constructor(
        public name : String,
        public dateOfBirth : NgbDateStruct,
        public country : String
    ) {}
}
