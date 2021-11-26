import Worker from "./worker?worker";
const myWorker = new Worker();

// Register listener for worker responses
myWorker.onmessage = (e) => {
    document.getElementById('workerResponses')!.innerHTML += `Worker reponse: <b>${e.data}</b><br\>`
}

// Periodically send message to worker
setInterval(() => {
    let eventId = (Math.random() + 1).toString(36).substring(7);
    document.getElementById('mainThreadRequests')!.innerHTML += `Sending event to worker <b>${eventId}<b\><br\>`
    myWorker.postMessage({eventId})
}, 1000)