import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through"
      };
    } else {
      return {
        textDecoration: "none"
      };
    }
  };
  getStyle1 = () => {
    return {
      backgroundColor: "#fecc22",
      border: "1px solid ",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {
    console.log(e);
  };
  render() {
    const { _id, title, date } = this.props.todo;
    return (
      //   <div style={itemStyle}>
      //     <p>{this.props.todo.title}</p>
      //   </div>
      <div style={this.getStyle1()}>
        <div>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, _id)}
          />{" "}
          {title} {" "}
          {date}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, _id)}>
            x
          </button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
const btnStyle = {
  background: "#fe3333",
  borderRadius: "50%",
  float: "right"
};

// const itemStyle = {
//     backgroundColor: '#ef33a2'
// }
