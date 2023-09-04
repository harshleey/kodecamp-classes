// * THE REACTOR PATTERN
// * The "reactor pattern" is a design approach that helps handle multiple asynchronous events efficiently. It's like managing different things happening at a party while ensuring everything runs smoothly. Here's a simple explanation with a code example:

// * Imagine you're hosting a party with different activities: dancing, games, and a food stall. You assign someone to oversee each activity and make sure things run well. Whenever an activity starts or needs attention, they "react" to it.

// ? In code, the "reactor pattern" involves a central event loop that listens to various events and calls appropriate handlers. Here's a basic example:

// Simulated event listeners (representing activities at the party)
function danceEventHandler() {
 console.log('Dance party started!');
}

function gameEventHandler() {
 console.log('Game tournament in progress!');
}

function foodEventHandler() {
 console.log('Food stall is serving delicious treats!');
}

// Event loop (the reactor)
function eventLoop(eventHandlers) {
 // Simulating event notifications
 setTimeout(() => {
   eventHandlers.forEach(handler => handler());
 }, 4000);
}

// Register event handlers
const handlers = [danceEventHandler, gameEventHandler, foodEventHandler];

// Start the event loop
eventLoop(handlers);


// * Each event handler (danceEventHandler, gameEventHandler, foodEventHandler) represents an activity at the party.

// * The eventLoop function simulates the central event loop. It waits for a short time (simulating an event happening) and then calls all registered event handlers.

// * You register the event handlers in an array (handlers).

// * When you start the event loop, it "reacts" to the simulated events and calls the appropriate handlers.

// * The "reactor pattern" allows your program to efficiently manage multiple asynchronous events by centralizing their handling. It's like having dedicated people overseeing various activities at a party, making sure everything happens smoothly without one activity blocking the others.

