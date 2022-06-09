import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css"

function Expenses(props) {
  return (
    <Card className="expenses">
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