async function createUser() {
  const newUser = {
    name: "Rahul Patle",
    email: "rahul@example.com",
    username: "rahulmonster",
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST", // POST method lagaya
    headers: {
      "Content-Type": "application/json", // body ka format bataya
    },
    body: JSON.stringify(newUser), // object  JSON string  convert kiya
  });

  const data = await res.json(); // server  response
  console.log("✅ User Created:", data);
}

createUser();
