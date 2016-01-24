/** @file Basic routine example. */

'use strict';

const routines = require('..');

const co = new routines.RoutineManager();
const loop = setInterval(() => co.updateAll(), 1000);

co.start(function* () {
  console.log('Started.');
  for (let i = 0; i < 3; i++) {
    console.log('Running...');
    yield;
  }
  console.log('Finished.');
  clearInterval(loop);
} ());
