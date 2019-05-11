import React from "react";
import "./App.css";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import ClearButton from "./ClearButton";

class App extends React.Component {
  state = {
    data: []
  };

  handelAdd = () => {
    const data = [...this.state.data];
    const list = this.state.data.length + 1;

    data.push({
      id: list,
      text: `Task number ${list}`
    });
    this.setState({
      data: data
    });
  };

  handelRemove = () => {
    const data = [...this.state.data];
    data.splice(-1);
    this.setState({
      data: data
    });
  };

  handelClear = () => {
    const data = [...this.state.data];
    data.splice(0);
    this.setState({
      data: data
    });
  };

  render() {
    const item = this.state.data.map(item => (
      <li key={item.id}>{item.text}</li>
    ));
    return (
      <div className="AppTodo">
        <AddButton click={this.handelAdd} />
        <RemoveButton click={this.handelRemove} />
        <ClearButton click={this.handelClear} />
        <ul>{item}</ul>
      </div>
    );
  }
}

export default App;
