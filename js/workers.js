/* See license.txt for terms of usage */

function onStartWorker1() {
  new Worker("workers/worker1.js");
}

function onStartWorker2() {
  new Worker("workers/worker2.js");
}

function onStartWorkerXhr() {
  new Worker("workers/worker-xhr.js");
}

function onStartMyWorker() {
  new Worker("workers/my-worker.js");
}
