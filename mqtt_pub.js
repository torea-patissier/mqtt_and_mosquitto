const mqtt = require('mqtt');
const client = mqtt.connect('mqt://127.0.0.1:1883');

client.on('connect',()=>{
  console.log('CO TO PUB!');
  client.publish('presence','HELLO FROM PUB',{
    qos:0
  });
  client.end();
})

