### Installation
```
npm install @turtlemay/routines
```

### Basic Usage

Import or require the RoutineManager class:

```javascript
import {RoutineManager} from '@turtlemay/routines';
```
```javascript
const RoutineManager = require('@turtlemay/routines').RoutineManager;
```

Create a RoutineManager:

```javascript
const co = new RoutineManager();
```

Update the RoutineManager: (e.g. during your main loop)

```javascript
co.updateAll();
```

Define routines as generators:

```javascript
function* myRoutine() {
  while (true) {
    console.log('Hello routine.');
    yield;
  }
}
```

Start a routine:

```javascript
co.start(myRoutine());
```
#### Waiting

Wait for another routine:

```javascript
function* myRoutine2() {
  console.log('Waiting for other routine...');
  yield* myRoutine();
  console.log('Other routine finished.');
}
```

Wait for an amount of time:

```javascript
import {waitForSeconds} from '@turtlemay/routines';
```

```javascript
function* myRoutine() {
  console.log('Waiting for 1 second...');
  yield* waitForSeconds(1);
  console.log('Done...');
}
```
