import Contact from './Contact';
import User from './user'

export default class Group {
    constructor(  public id:number
                , public nom:String
                , public contacts:Array<Contact>
                , public owner: User) {
    }

  }
