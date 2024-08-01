import React from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";
import Budget from "./components/Budget";

const App = () => {
  return (
    <div>
      <h1>Finance Manager</h1>
      <TransactionForm />
      <TransactionList />
      <Charts />
      <Budget />
    </div>
  );
};

export default App;
