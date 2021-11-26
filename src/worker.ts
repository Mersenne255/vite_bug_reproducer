onmessage = (e) =>
    postMessage(`Worker confirming reception of eventId ${e.data.eventId}`)