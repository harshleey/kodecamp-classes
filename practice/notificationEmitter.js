const EventEmitter = require("events");

// The point of logging is emit
// The point of registering and then listening is on

class NotificationEmitter extends EventEmitter {
  constructor() {
    super();
    this.notifyArray = [];
  }

  sendNotification(message) {
    if (message !== "") {
      let date = Date.now();
      let notice = { message, date };
      this.notifyArray.push(notice);
      this.emit("notify", notice);
      return;
    }
    this.emit(
      "error",
      new Error(`
    Oops! You need to implement a message for the notification to go through`)
    );
  }

  noticeList() {
    return this.notifyArray
      .map((object, index) => {
        return `| ${index + 1} | ${object.message} | ${object.date}`;
      })
      .join("\n");
  }
}

const notification = new NotificationEmitter();

const handleNotice = (notice) => {
  console.log(`
 Notification details:\nmessage: ${notice.message}\ntimestamp: ${notice.date} `);
};

const handleError = (error) => {
  console.log(error.message);
};

notification.on("notify", handleNotice);
notification.on("error", handleError);

notification.sendNotification("I love you!!!");
notification.sendNotification("I love you!!!");
notification.sendNotification("");

console.log(notification.noticeList());
