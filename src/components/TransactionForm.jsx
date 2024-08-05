import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/reducers/transactionReducer";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 5px 0;
`;

const Button = styled.button`
  margin-top: 10px;
`;

const TransactionForm = () => {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.random().toString(36).substring(2, 9),
      description: form.description,
      amount: parseFloat(form.amount),
      category: form.category,
      date: form.date,
    };

    dispatch(addTransaction(newTransaction));
    setForm({ description: "", amount: "", category: "", date: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <Input
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        type="number"
      />
      <Input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <Input
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="Date"
        type="date"
      />
      <Button type="submit">Add Transaction</Button>
    </Form>
  );
};

export default TransactionForm;
