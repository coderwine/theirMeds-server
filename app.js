require('dotenv').config();
const dot = process.env

const Express = require('express');
const medApp = Express();
const db = require('./db');
const chalk = require('chalk');
const log = console.log;
// const middleware;
// const controllers;

// set middelware here
medApp.use(Express.json());

//! Controller Loadout
// Placeholder for future build

//! Admin Build
// Placeholder for future build

//! DB connection
db.authenticate()
    .then(() => db.sync())
    .then(() => {
        medApp.listen(dot.PORT, () => {
            log(chalk.bgGreen.greenBright(`[SERVER]: ${dot.PGDB}. MedApp is listening on ${dot.PORT}.`));
        })
    })
    .catch(err => {
        log(chalk.bgRed.whiteBright(`[SERVER]: CRASHED.  Error: ${err}`));
    })


