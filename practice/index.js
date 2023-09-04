const notificationEmitter = require("./notificationEmitter");
const Email = require("./email");

const notify = new notificationEmitter(4);
const emailService = new Email();

notify.on("buy", (email, price) => {
  console.log("Ticket bought");
  emailService.send(email);
});

console.log(notify.listenerCount("buy"));

notify.buy("harsh@gmail.com", 20);
notify.buy("harsh@gmail.com", 20);

// To check the amount of ticket left
console.log(`${notify.tickets} left`);
