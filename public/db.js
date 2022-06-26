const axios = require('axios');
// set url as constant
const URL = 'https://api.publicapis.org/entries';

axios
  .get(URL)
  .then(response => {
    console.log(response); 
  })
  .catch(error => {
    console.log(error);
  });

/*


const { Client } = require('pg')




const client = new Client({
   user: 'postgres',
  host: 'database-1.cnahzycypymq.us-east-1.rds.amazonaws.com',
  database: 'check_dbcon',
  password: 'root1234',
  port: 5432,
})

client.connect();






});



const { Client } = require('pg')


const client = new Client({
 
})
client.connect()






client
  .query('SELECT fname FROM public.check_dbcon')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))

  */