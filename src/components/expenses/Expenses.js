import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = props => {

  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      {props.items.map(item => {
        return <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      })}
    </Card>
  );
}

export default Expenses;