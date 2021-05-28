const Datastore = require('nedb');
const db = new Datastore({filename:'database/test.db',autoload:true})