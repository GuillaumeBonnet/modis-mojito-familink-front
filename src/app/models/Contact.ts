import Coordonnees from './Coordonnees';

import Group from './Group'

export default class Contact {
    constructor( public id:number
                , public group:Group
                , public nom:String
                , public prenom:String
                , public profil:String
                , public coordonnees:Coordonnees
                , public gravatar: String) {
                  this.id
    }

  }