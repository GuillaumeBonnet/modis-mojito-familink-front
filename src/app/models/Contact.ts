import Coordonnees from './Coordonnees';
import Profil from './Profil'

import Group from './Group'

export default class Contact {
    constructor( public id:number
                , public groupe:Group
                , public lastname:String
                , public firstname:String
                , public profil:Profil
                , public coordonnees:Coordonnees
                , public gravatar: String) {
                  this.id
    }

  }
