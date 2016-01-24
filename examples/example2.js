/** @file Example of waiting for some amount of time. */

'use strict';

const routines = require('..');

const co = new routines.RoutineManager();
const loop = setInterval(() => co.updateAll());

co.start(function* () {
  console.log('Started.');
  for (let i = 0; i < 3; i++) {
    console.log('Running...');
    yield* routines.waitForSeconds(1);
  }
  console.log('Finished.');
  clearInterval(loop);
} ());
