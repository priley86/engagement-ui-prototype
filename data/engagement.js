import constants from '../core/constants';
/**
  For more complex apps, redux/redux-thunk can be used for managing actions, reducers, stores, state
  For our Labs prototype, we'll use a simple Es6 Singleton Class
  http://amanvirk.me/singleton-classes-in-es6/
 */
let instance = null;

export default class Engagement {
  constructor() {
    if(!instance){
      instance = this;
    }
    this.engagement = null;
    return instance;
  }

  //for the time being, an engagement will return a single topology, even though it's an incoming array
  getTopology() {
    return new Promise((resolve, reject) => {
      if (this.engagement) {
        //serve from memory if possible
        resolve(this.engagement.application_topologies[0]);
      }
      else {
        let that = this;
        fetch(constants.GET_ENGAGEMENTS_URL).then(r => r.json())
          .then(data => {
            if(data.engagement && data.engagement.application_topologies
              && data.engagement.application_topologies.length){
              that.engagement = data.engagement;
              that.topology = data.engagement.application_topologies[0];
            } else {
               //create an empty engagement topology
              that.engagement = {
                application_topologies: [{
                  name: "",
                  description: "",
                  promotion_process : {
                    stages: []
                  },
                  projects: []
                }]
              };
            }
            resolve(that.engagement.application_topologies[0]);
          })
          .catch(e => {
            console.log("Booo");
            reject();
          });
      }
    });
  }

  saveTopology(topology){
    return new Promise((resolve, reject) => {
      //reset our topology and then save
      this.engagement.application_topologies = [topology];

      //stubbed
      fetch(constants.PUT_ENGAGEMENTS_URL, {
        method: 'PUT',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.engagement)
      }).then(r => r.json()).then(data => {
        resolve(data);
      }).catch(e => {
        console.log("Booo");
        reject();
      });
    });
  }

}