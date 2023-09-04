class Database {
  save(email, price, timestamp) {
    console.log(
      `User's data saved successfully to the database: (${email}, ${price}, ${timestamp})\n`
    );
  }
}

module.exports = Database;
