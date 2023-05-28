import React from "react";
import { getTodos } from "../api/TodoApi";

export const withTodos = (Component) => {
  return class NewComponent extends React.Component {
    state = {
      todos: [],
    };
    render() {
      return <Component todos={this.state.todos} onTodos={this.handleTodos} />;
    }
    handleTodos = (newTodos) => {
      this.setState({
        todos: newTodos
      })
    }

    componentDidMount() {
      getTodos().then((todos) => {
        this.setState({
          todos,
        });
      }).catch(err => {
        console.log(err);
      });
    }
  };
};
