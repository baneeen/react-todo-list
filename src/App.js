import React, { Component } from 'react'
import uuid from 'react-uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';
//showing vs-code git-hub
export default class App extends Component {
  state ={
    items:[{id:1, title:"wake up"},
           {id:2, title:"make breakfast"}],
        id : uuid(),
        item : '',
        editItem: false,
  };
  handleChange = (e) => {console.log('handle change');}
  handleSubmit= (e) => {console.log('handle change');}  
  clearList =() =>{console.log('clear list');}
  handleDelete = (id)=> {console.log(`handle delete ${id}`)}
  handleEdit = (id)=> {console.log(`handle edit ${id}`)}

  render() {
    return (
      <div className='container'>
          <div className='row'>
            <div
              className="col-10 max-auto-md-8 mt-5"
            >
              <h3 className='text-capitalize text-center'>
                Todo Input
              </h3>
              
            </div>
            
            <ToDoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleEdit={this.state.editItem}/>
            <TodoList items={this.state.items} 
                       clearList={this.clearList}
                       handleDelete={this.handleDelete}
                       handleEdit={this.handleEdit}
                       />
          </div>
      </div>
    )
  }
}


