import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={props.item.id}
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)} // Change here
      />
      <p style={{ textDecoration: props.item.completed && "line-through" }}>
        {props.item.task}
      </p>
    </div>
  );
}

export default TodoItem;
