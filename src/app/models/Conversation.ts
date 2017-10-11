import User from './User';
import Message from './Message';

export default class Conversation {
    constructor(public expediteur: User
                , public destinataire: User
                , public message: Message) {
    }

  }