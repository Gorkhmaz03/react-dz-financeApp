import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/reducers/transactionReducer";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <List>
      {transactions.map((transaction) => (
        <ListItem key={transaction.id}>
          <span>{transaction.description}</span>
          <span>${transaction.amount}</span>
          <Button onClick={() => handleDelete(transaction.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionList;
