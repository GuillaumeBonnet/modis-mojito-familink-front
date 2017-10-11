import Coordonne from './Coordonne';
import Group from './Group'

export default class Contact {
    constructor(  public id:number
                , public group:Group
                , public nom:String
                , public prenom:String
                , public profil:Array<String>
                , public coordonne:Coordonne
                , public gravatar: String) {
    }

  }