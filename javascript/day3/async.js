// 1️⃣ Async function returning an object
async function getmesoon() {
  return {
    key: "dokmain",
    data: "json db"
  };
}

getmesoon().then(msg => console.log(msg)); // ✅ This works

// 2️⃣ Async function for API call
const apidata = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

// ✅ You must CALL the function
apidata();
