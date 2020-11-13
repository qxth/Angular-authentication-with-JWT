const express = require('express')
const consign = require('consign')
const app = express();

consign()
.include('./utils/libs/middlewares.js')
.then('./routes')
.include('./utils/libs/connection.js')
.include('./utils/libs/boots.js')
.into(app)