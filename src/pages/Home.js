import React, { Component } from 'react'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            roomNumber:null
        }
    }


    handleName=(event)=>{
        this.setState({
            name: event.target.value
        })
    }

    handleEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }

    handleRoomNumber=(event)=>{
        this.setState({
            roomNumber:event.target.value
        })
    }

    handleSubmit=event=>{
        // alert(`${this.state.name} ${this.state.email} `)
    }

    render(){
  return (
    <div className='Testimonials'>
        <div>Testimonials:</div>
        <ul>
            <li>Review_1</li>
            <li>Review_2</li>
            <li>Review_3</li>
        </ul>
        <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input 
        type='text'
        value={this.state.name}
        onChange={this.handleName}
        />
        <label>Email</label>
        <input 
        type='text'
        value={this.state.email}
        onChange={this.handleEmail}
        />
        <label>RoomNumber</label>
        <input 
        type='number'
        value={this.state.roomNumber}
        onChange={this.handleRoomNumber}
        />
        <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}}

export default Home