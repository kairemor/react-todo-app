import React, { Component } from 'react'

export default class AddTodo extends Component {
	state = {
		title: '',
		date: ''
	}
	onChange = (e) => {this.setState({ [e.target.name] : e.target.value }) 
}

	onSubmit = (e) => {
			e.preventDefault()
			this.props.addTodo(this.state)
			this.setState({title: ''})
			this.setState({date: ''})
	}
  render() {
    return (
			<form onSubmit={this.onSubmit} style={{display: 'flex'}}>
				<input type="text" name="title" placeholder='Add todo ...' style={{ flex : '10' , padding:'5px'}} onChange={this.onChange} value={this.state.title}/>
				<input type="datetime-local" name="date" placeholder='Date de la tache' style={{ flex : '10' , padding:'5px'}} onChange={this.onChange} value={this.state.date}/>
				<input type="submit"  value="Add" className="btn" style={{flex: '1'}} />
			</form>
    )
  }
}
