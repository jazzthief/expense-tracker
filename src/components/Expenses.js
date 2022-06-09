import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map(item => {
        return <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      })}
    </div>
  );
}

export default Expenses;