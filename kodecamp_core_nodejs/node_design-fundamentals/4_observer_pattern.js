// * THE OBSERVER PATTERN
// * The "observer pattern" is about setting up a way for one part of your code to be notified when something happens in another part. It's like getting a message when your favorite TV show starts. Here's a simple explanation with a code example:

// * Imagine you're waiting for a package to be delivered. Instead of constantly checking the door, you give your phone number to the delivery person. They'll call you when they're at your door.

// ? In code, this translates to setting up a system where an object (the observer) listens to changes in another object (the subject). Let's say you're building a weather app:

// Observer (Listener)
class WeatherObserver {
 update(weatherData) {
   console.log(`Weather updated: ${weatherData}`);
 }
}

// Subject (Object being observed)
class WeatherStation {
 constructor() {
   this.observers = [];
   
 }

 addObserver(observer) {
   this.observers.push(observer);
 }

 setWeather(weatherData) {
   console.log(`Weather data received: ${weatherData}`);
   this.notifyObservers(weatherData);
 }

 notifyObservers(data) {
   this.observers.forEach(observer => {
     observer.update(data);
   });
 }
}

// Create instances
const observer1 = new WeatherObserver();
const observer2 = new WeatherObserver();
const weatherStation = new WeatherStation();

// Add observers
weatherStation.addObserver(observer1);
weatherStation.addObserver(observer2);

// Simulate weather update
weatherStation.setWeather('Sunny and warm');

// ? The "observer pattern" allows objects to communicate without needing to know much about each other. It's like getting notified about the weather changes without having to keep checking outside. In your code, this can help various parts of your program stay in sync and respond to changes efficiently.
