import Contact from './Contact';
import User from './User';

export default class Group {
    constructor(public nom:String
                , public contacts:Array<Contact>
                , public owner: User
              ) {
    }

  }