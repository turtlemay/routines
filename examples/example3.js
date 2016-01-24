/** @file Example of waiting for another routine. */

'use strict';

const routines = require('..');

const co = new routines.RoutineManager();
const loop = setInterval(() => co.updateAll(), 1000);

function* routineB() {
  console.log('Routine B: Started.');
  for (let i = 0; i < 3; i++) {
    console.log('Routine B: Running...');
    yield;
  }
  console.log('Routine B: Finished.');
  clearInterval(loop);
}

co.start(function* routineA() {
  console.log('Routine A: Started.');
  console.log('Routine A: Waiting for Routine B...');
  yield* routineB();
  console.log('Routine A: Done waiting for Routine B.');
  console.log('Routine A: Finished.');
} ());
