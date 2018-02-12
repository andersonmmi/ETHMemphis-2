import React, { Component } from 'react';
import Web3 from 'web3';

let apply, firstName, lastName, email, gitHubUrl, linkedInUrl, interest;
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

let AFAbi = require('../../ABIs/Application-Form-Abi.js');
let AFAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
let AF = web3.eth.contract(AFAbi).at(AFAddress);

class ApplicationForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      firstName : '',
      lastName : '',
      email : '',
      gitHubUrl : '',
      linkedInUrl : '',
      interest : ''
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Apply fired!");
    apply = AF.apply(this.state.firstName,
      this.state.lastName,
      this.state.firstName,
      this.state.email,
      this.state.gitHubUrl,
      this.state.linkedInUrl,
      this.state.interest
    );
    console.log(apply);
    // owner = String(getRoomInfo[0]).split(',');
    // renter = String(getRoomInfo[1]).split(',');
    // minRentTime = String(getRoomInfo[2]).split(',');
    // numBeds = String(getRoomInfo[3]).split(',');
    // this.setState({
    //   firstName : '',
    //   lastName : '',
    //   email : '',
    //   gitHubUrl : '',
    //   linkedInUrl : '',
    //   interest : ''
    // });
  }

  render(){
    const style={
      backgroundColor: '#4D4D4D',
      padding: '10px',
      fontWeight: 'bold',
      width: '420px',
      marginTop: '5px',
      marginBottom: '5px',
      /*
      color: '',
      textAlign: '',
      border: '',
      margin: '',
      display: '',
      clear: '',
      float: '',
      paddingTop: '',
      paddingRight: '',
      paddingBottom: '',
      paddingLeft: ''
      */
    }
    const roomStyle={
      textDecoration: 'overline underline',
      border: '10px #F4BE41',
      borderWidth: '10px',
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: '40px',
      color: '#3973B5'
    }
    const superStyle={
      border: "2px solid #383838",
      borderTop: "2px solid red",
      backgroundColor: "white"
    }
    const fieldset={
        border: '2px solid #F4BE41'
    }
    const labelStyle={
      padding: "6px",
      display: "flex"
    }
    const inputStyle={
      flexGrow: "1",
      marginLeft: "6px"
    }
    const buttonStyle={
      width: "-webkit-fill-available"
    }
    return(
      <div style={style} className="ApplicationForm">
        <fieldset style={fieldset}>
          <legend style={roomStyle}>Apply Here!</legend>
          <p style={labelStyle}>First Name:
            <input id="firstName" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.firstName} />
          </p>
          <p style={labelStyle}>Last Name:
            <input id="lastName" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.lastName} />
          </p>
          <p style={labelStyle}>Email:
            <input id="email" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.email} />
          </p>
          <p style={labelStyle}>GitHub URL:
            <input id="gitHubUrl" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.gitHubUrl} />
          </p>
          <p style={labelStyle}>LinkedIn URL:
            <input id="linkedInUrl" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.linkedInUrl} />
          </p>
          <p style={labelStyle}>Your skills and interests:
            <input id="interest" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.interest} />
          </p>
          <hr/>
          <p style={labelStyle}>
            <input id="submit" type="submit" value="Apply!" style={inputStyle} onClick={this.handleSubmit} />
          </p>
        </fieldset>
      </div>
    )
  }
}

export default ApplicationForm
