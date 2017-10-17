import Contact from './Contact';

import User from './User'


export default class Group {
    constructor(  public id:number
                , public name:String
                , public contacts:Array<Contact>
                , public owner: User
              ) {
    }

  }
