import React , {Component} from 'react';

class ToDoForm extends Component {
   /* textInput = React.createRef(); */
    
   state = {
inputText :null,
todoItems : []
   }
   handleInputChange = event=>{
  const inputText = event.target.value
  this.setState({inputText:inputText})
  console.log(inputText)
   }


    handleSubmit = event=> {
        event.preventDefault();
        /* console.log(this.textInput.current.value) */
        this.setState(prevState =>({
            todoItems:[...prevState.todoItems,this.state.inputText]
        }))
    }
    render(){
        return (
            <React.Fragment>
            <form className='input-group my-3'
            onSubmit={this.handleSubmit}>
  
 <input type="text" 
 className="form-control" 
 placeholder="Add a new to do item"
 name = 'name'
 onChange = {this.handleInputChange}
 />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{this.state.inputText && <p>Typing:{ this.state.inputText}</p>} {/* the hide the p */}
{this.state.todoItems.map((item,index)=> <li key={index}>{item}</li>)}
</React.Fragment>
        )
    }
}
export default ToDoForm