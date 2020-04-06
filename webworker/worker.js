"use strict";

console.log("web worker started.");

self.onmessage = onMessage;

function onMessage(messageEvent) {
  console.log("web worker recieved", messageEvent.data);

  // some heavy process on the webworker thread

  self.postMessage({ done: true });
}
