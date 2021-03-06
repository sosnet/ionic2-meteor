import { Meteor } from 'meteor/meteor';
import { Users } from "../collections/whatsapp-collections";
import { initMethods } from "./methods";
import { Accounts } from 'meteor/accounts-base';
import { initPublications } from "./publications";

declare let SMS, Object;

Meteor.startup(() => {

  initMethods();
  initPublications();

  if (Meteor.settings) {
    //Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    Object.assign(Accounts.config, Meteor.settings['accounts-phone']);
    SMS.twilio = Meteor.settings['twilio'];
  }

  if (Users.collection.find().count()) return;

  [{
    phone: '+972540000001',
    profile: {
      name: 'Ethan Gonzalez',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    }
  }, {
      phone: '+972540000002',
      profile: {
        name: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
      }
    }, {
      phone: '+972540000003',
      profile: {
        name: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
      }
    }, {
      phone: '+972540000004',
      profile: {
        name: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
      }
    }, {
      phone: '+972540000005',
      profile: {
        name: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
      }
    }].forEach(user => {
      Accounts.createUserWithPhone(user);
    });


  /*
  Chats.find({})
    .forEach( chat => console.log((<Chat>chat).title));
  */

  console.log("startup finished");
});
