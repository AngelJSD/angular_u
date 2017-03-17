var util = require('util');
var {Router} = require('express');

// Our API for demos only
import {fakeDataBase} from './db';

// Our API for demos only
export function serverApi(req, res) {

  fakeDataBase.get()
    .then(data => {
      //fakeDemoRedisCache.set(key, data);
      return data;
    })
    .then(data => res.json(data));
}

// todo API
