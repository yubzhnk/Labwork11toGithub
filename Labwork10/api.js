const users = [
    { firstname: 'John', lastname: 'Doe', score: 85 },
    { firstname: 'Jane', lastname: 'Doe', score: 90 },
    { firstname: 'Bob', lastname: 'Smith', score: 75 },
    { firstname: 'Alice', lastname: 'Johnson', score: 95 },
    { firstname: 'David', lastname: 'Brown', score: 80 },
    { firstname: 'Sarah', lastname: 'Wilson', score: 70 },
    { firstname: 'James', lastname: 'Taylor', score: 88 },
    { firstname: 'Emily', lastname: 'Jones', score: 92 },
    { firstname: 'Michael', lastname: 'Clark', score: 79 },
    { firstname: 'Olivia', lastname: 'Martin', score: 87 },
    { firstname: 'William', lastname: 'Lee', score: 84 },
    { firstname: 'Ava', lastname: 'Young', score: 96 },
    { firstname: 'Charles', lastname: 'Walker', score: 78 },
    { firstname: 'Sophia', lastname: 'Allen', score: 93 },
    { firstname: 'Matthew', lastname: 'King', score: 82 },
    { firstname: 'Ella', lastname: 'Wright', score: 91 },
    { firstname: 'Christopher', lastname: 'Turner', score: 77 },
    { firstname: 'Isabella', lastname: 'Scott', score: 94 },
    { firstname: 'Andrew', lastname: 'Green', score: 81 },
    { firstname: 'Grace', lastname: 'Baker', score: 89 }
  ];
  
  function fetchUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        const randomUsers = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * users.length);
          randomUsers.push(users[randomIndex]);
        }
        resolve(randomUsers);
      }, 1000);
    });
  }

  function getNewUsers() {
    return users.slice(0, 5);
  }

  export { fetchUsers, getNewUsers }