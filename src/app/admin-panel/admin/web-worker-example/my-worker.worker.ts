/// <reference lib="webworker" />
// webWorker-demo/src/app/webWorker.ts
function fibonacci(num) {
  return (num === 1 || num === 2) ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}

addEventListener('message', ({ data }) => {
  postMessage(fibonacci(data));
});
