import Contact from './Contact';

export default class User {
    constructor(public id:number
                , public contact:Contact
                , public token: String
                , ) {
    }

  }