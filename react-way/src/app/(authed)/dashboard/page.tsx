import { todo } from "node:test";

const getTodos = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  return res.json();
};

async function Dashboard() {
  const todos = await getTodos();

  console.log(todos);

  return <div>Dashboard</div>;
}

export default Dashboard;
