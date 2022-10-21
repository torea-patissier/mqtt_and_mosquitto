const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', () => {
  console.log('CO TO SUB!');
  client.subscribe('presence');
  client.on('message',(topic, message)=>{
    console.log(message.toString());
  });

});