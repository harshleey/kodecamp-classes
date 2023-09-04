// * EVENT DEMULTIPLEXING
// * "Event demultiplexing" is a way of efficiently managing and handling multiple events coming from different sources. It's like sorting and managing various messages to make sure the right actions are taken. Here's a simple explanation with a code example:

// * Imagine you're receiving emails from different friends. Instead of checking each email one by one, you use a smart tool that sorts and shows you only the emails that need your immediate attention.

// ? In code, event demultiplexing involves a mechanism that listens for events from different sources and directs them to the appropriate handlers. Here's a basic example:

// Simulated event sources
const eventSources = {
 button: () => 'Button clicked event',
 timer: () => 'Timer expired event',
 input: () => 'Input received event',
};

// Event demultiplexer
function demultiplexEvent(eventSource) {
 const event = eventSources[eventSource]();
 return event;
}

// Simulate event sources
const clickedButtonEvent = demultiplexEvent('button');
const timerExpiredEvent = demultiplexEvent('timer');
const userInputEvent = demultiplexEvent('input');

console.log(clickedButtonEvent);
console.log(timerExpiredEvent);
console.log(userInputEvent);
