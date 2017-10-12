import Contact from './Contact';
import Conversation from './Conversation';
import Coordonne from './Coordonne';
import Group from './Group';
import Message from './Message';
import User from './User';

import {expect} from "chai";

describe('models.spec.ts', () => {
    let contact = new Contact(
        1
        ,'unNom'
        , 'unPrenom'
        , ['senior', 'cardilogue']
        , new Coordonne(
            1
            ,'rue de la fontaine'
            , 69000
            , 'Lyon'
            , '04 45 54 45 54'
            , 'unEmail@unDomaine.com'
        )
        , 'https://drafthouse.com/assets/img/victory-red.png'
    );
    describe('#Contact', () => {
        it('should be a contact  with a specific attribute belonging to a Coordonne property', () => {
            
            
            expect(contact).to.be.an.instanceOf(Contact);
            expect(contact.coordonne).to.be.an.instanceOf(Coordonne);
            expect(contact.coordonne.ville).to.equal('Lyon');
        })
    })
    
})