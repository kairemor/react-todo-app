import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Components/Todos";
import Header from "./Components/layout/Header";
import About from "./Components/pages/About";
import AddTodo from "./Components/AddTodo";
// import uuid from 'uuid';
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get("https://polytechbot.herokuapp.com/api/todos").then(res => {
      this.setState({
        todos: res.data.data
      });
    });
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo._id === id) {
          if (todo.completed) {
            axios
              .get(
                `https://polytechbot.herokuapp.com/api/todos/uncomplete/${id}`
              )
              .then(res => (todo.completed = res.data.completed))
              .catch(err => console.log(err));
          } else {
            axios
              .get(`https://polytechbot.herokuapp.com/api/todos/complete/${id}`)
              .then(res => (todo.completed = res.data.completed))
              .catch(err => console.log(err));
          }
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    axios
      .delete(`https://polytechbot.herokuapp.com/api/todos/${id}`)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo._id !== id)]
        })
      );
    // this.state.todos.indexOf({id:id, title:'Learn react', completed:true})
    // this.state.todos.splice(this.state.todos.indexOf({id:id}))
    // this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  };

  addTodo = data => {
    axios
      .post("https://polytechbot.herokuapp.com/api/todos", {
        completed: false,
        ...data 
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data.data]
        })
      )
      .catch(err => console.log(err));
    // const newTodo = {
    //   id:uuid.v4(),
    //   title,
    //   completed : false
    // }
    // this.setState({todos: [...this.state.todos, newTodo]})
  };
  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />{" "}
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />{" "}
                </React.Fragment>
              )}
            />{" "}
            <Route path="/about" component={About} />{" "}
          </div>{" "}
        </div>{" "}
      </Router>
    );
  }
}

export default App;
