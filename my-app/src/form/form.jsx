import React from 'react';

class Form extends React.Component {

    inputValue={
        todo: ''
    }

    state = this.inputValue;

    handleInput =(e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state)
    }

    state=this.inputValue;

    render() { 
        const {todo} = this.state;
        return ( <div>
            <form>
                <input type="text" 
                name='todo'
                id='todo'
                value={todo}
                onChange = {this.handleInput}/>
                <input type="submit" />
            </form>
        </div> );
    }
}
 
export default Form;