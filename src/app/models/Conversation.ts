import User from './Utilisateur';
import Message from './Message';

export default class Conversation {
    constructor(  public id:number
                , public expediteur: User
                , public destinataire: User
                , public message: Message) {
    }

  }
