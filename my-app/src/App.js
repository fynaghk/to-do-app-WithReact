import List from './list-component';
import Form from './form'
import React from 'react';


class App extends React.Component{
  state = {
    data:[{job: "aksjs"},{job: "aksjs"},{job: "aksjs"}]
}

handleSubmit = (newVal) =>{
  this.setState({data: [...this.state.data, newVal]})
}
  render(){
    const {data}  = this.state;
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form  onSubmit = {this.handleSubmit}/>      
      <List todo={data}/>
    </div>
  );
}



}

export default App;
