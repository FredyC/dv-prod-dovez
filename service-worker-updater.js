self.addEventListener("message", event => {
  if (event.data == "apply-update") {
    self.skipWaiting().then(() => {
      self.clients.claim().then(() => {
        self.clients.matchAll().then(clients => {
          clients.forEach(client => client.postMessage("update-applied"));
        });
      });
    });
  }
});
