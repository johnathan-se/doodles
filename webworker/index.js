(function index() {
  "use strict";

  let startBtn;
  let worker;

  document.addEventListener("DOMContentLoaded", ready, false);

  function ready() {
    startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", start, false);
  }

  function start() {
    worker = new Worker("/worker.js");
    worker.addEventListener("message", onMessage);

    worker.postMessage({ start: true });
  }

  function onMessage(messageEvent) {
    console.log("page recieved", messageEvent.data);

    worker.terminate();
    worker = null;
  }
})();
