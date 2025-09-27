const tasks = [];
let running = true;

while (running) {
  let choice = Number(
    prompt(
      "Welcome to CRUD App:\n1 ➝ Add Task\n2 ➝ Remove Task\n3 ➝ Show Tasks\n0 ➝ Exit"
    )
  );

  if (choice === 1) {
    let task = prompt("Enter your task:");
    if (task) {
      tasks.push(task);
      alert(`✅ Task "${task}" added`);
    }
  } else if (choice === 2) {
    let task = prompt("Enter the task to remove:");
    let index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      alert(`❌ Task "${task}" removed`);
    } else {
      alert(`⚠️ Task "${task}" not found`);
    }
  } else if (choice === 3) {
    alert(
      tasks.length > 0
        ? `📋 Your Tasks:\n${tasks.join("\n")}`
        : "No tasks available"
    );
  } else if (choice === 0) {
    running = false;
    alert("👋 Exiting CRUD App. Bye!");
  } else {
    alert("🚫 Invalid choice, try again!");
  }
}
