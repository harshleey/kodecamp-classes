const TicketManager = require("./tickets");
const Email = require("./email");
const Database = require("./database");

const newTicket = new TicketManager(5);
const databaseService = new Database();
const emailService = new Email();

const handlePurchase = (email, price, timestamp) => {
  console.log("Ticket bought");

  emailService.send(email);
  databaseService.save(email, price, timestamp);
};

const handleError = (error) => {
  console.error(`Ooops!\n${error.message}`);
};

const handleAdvert = (email) => {
  console.log(`Advert notification sent to ${email} successfully.`);
};

newTicket.on("buy", handlePurchase);
newTicket.on("advertise", handleAdvert);
newTicket.on("error", handleError);

newTicket.buy("harshleey@gmail.com", 20);
newTicket.advertise("harshleey@gmail.com");

newTicket.buy("logun@gmail.com", 30);
newTicket.buy("fateem@gmail.com", 40);
newTicket.buy("fathia@gmail.com", 50);
newTicket.buy("wonu@gmail.com", 50);
newTicket.buy("wons@gmail.com", 50);

const buyEvent = newTicket.listenerCount("buy");
const errorEvent = newTicket.listenerCount("error");
console.log(`${buyEvent} subscribers for the buy event`);
console.log(`${errorEvent} subscribers for the error event`);

// ? The this.emit part and the on part are connected through the EventEmitter mechanism in Node.js.

// * Emitting an Event (this.emit): In your code, when you call this.emit("buy", email, price, Date.now());, you are emitting a custom event named "buy" with certain data (email, price, and timestamp). This means you are telling the EventEmitter to trigger the "buy" event with this data.

// * Listening for an Event (on): In the code block where you have ticketManager.on("buy", (email, price, timestamp) => { ... });, you are setting up an event listener. This code listens for the "buy" event that was emitted earlier. When the "buy" event is emitted, this listener responds to it by executing the code inside the function provided. This function takes the data (email, price, and timestamp) that was passed when emitting the event and processes it.
