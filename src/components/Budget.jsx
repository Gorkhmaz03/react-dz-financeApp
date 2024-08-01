import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BudgetContainer = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  margin: 5px 0;
`;

const Budget = () => {
  const [budget, setBudget] = useState({});
  const transactions = useSelector((state) => state.transactions);

  const handleChange = (e) => {
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };

  return (
    <BudgetContainer>
      <h2>Set Monthly Budget</h2>
      <Input name="category" placeholder="Category" onChange={handleChange} />
      <Input
        name="amount"
        placeholder="Amount"
        type="number"
        onChange={handleChange}
      />
      <button>Set Budget</button>
    </BudgetContainer>
  );
};

export default Budget;
