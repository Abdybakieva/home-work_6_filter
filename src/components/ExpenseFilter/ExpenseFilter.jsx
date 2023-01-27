import React from "react";
import styled from "styled-components";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ value, onChange }) => {
  return (
    <ExpenseFiltere>
      <ExpenseFilterControl>
        <expenseFilterControlLabel label htmlFor="">
          Filter by year
        </expenseFilterControlLabel>
        <select onChange={onChange} value={value}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </ExpenseFilterControl>
    </ExpenseFiltere>
  );
};

export default ExpenseFilter;
const ExpenseFiltere = styled.div`
  color: white;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const ExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const expenseFilterControlLabel = styled.label`
  font-size: 22px;
  padding: 10px;
`;

const expenseFilterControlSelect = styled.select`
  width: 100px;
  height: 36px;
  border-radius: 7px;
  text-align: center;
  font-size: 18px;
`;
