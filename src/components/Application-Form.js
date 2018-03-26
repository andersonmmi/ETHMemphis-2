import React, { Component } from 'react';
import Web3 from 'web3';
import ethmemphisLogo from './ethmemphis-logo.png';
import '../css/oswald.css';
import '../css/open-sans.css';
import '../css/pure-min.css';
import './styles.css';

let apply, hasWeb3, AFAbi, AFAddress, AF;
// let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
let web3 = window.web3
// stolen code zone vvv

if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  web3 = new Web3(window.web3.currentProvider);
  AFAbi = require('../../ABIs/Application-Form-Abi.js');
  AFAddress = require('../../Contract-Address/Rinkeby-Address.js');
  AF = web3.eth.contract(AFAbi).at(AFAddress);
  console.log("first case");

} else {
  console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3 = 0;
}

// stolen code zone ^^^


class ApplicationForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name : '',
      email : '',
      gitHubUrl : '',
      linkedInUrl : '',
      industry : '',
      roomShare : true,
    }

    this.imgUrl = './ethMemphis.jpg';

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleRadioChange=this.handleRadioChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }
  handleRadioChange = (event) => {
    if(this.state.roomShare === true){
      this.setState({
        roomShare : false
      })
    } else {
      this.setState({
        roomShare : true
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //  getNetwork

    // end getNetwork

    console.log("Apply fired!");
    console.log(AF.getTotalApplications((err,res)=>{
      if(err){
        console.log("there is an error with the callback");
        alert("There was a problem with your connection");
      }
      console.log("success!");
      console.log(res);
    }));
    apply = AF.apply(
      web3.fromAscii(this.state.name),
      web3.fromAscii(this.state.email),
      web3.fromAscii(this.state.gitHubUrl),
      web3.fromAscii(this.state.linkedInUrl),
      web3.fromAscii(this.state.industry),
      this.state.roomShare,
      {from: web3.eth.accounts[0], gas: 3000000},
      (err,res)=>{
        if(err){
          console.log("there is an error with the callback");
          alert("There was a problem with your connection");
        }
        console.log("success!");
        console.log(res);
        alert("Thank you for applying to EthMemphis");
      }
    );
    console.log(apply);
  }

  render(){
    try {
        if (web3.version.network === "4"){
          hasWeb3 =
            <main className="container">
            <div className="ApplicationForm">
              <fieldset>
                <legend><img src={ethmemphisLogo} role="presentation"></img></legend>
                <p>Name:
                  <input id="name" type="text" onChange={this.handleTextChange} value={this.state.name} />
                </p>
                <p>Email:
                  <input id="email" type="text" onChange={this.handleTextChange} value={this.state.email} />
                </p>
                <p>GitHub URL:
                  <input id="gitHubUrl" type="text" onChange={this.handleTextChange} value={this.state.gitHubUrl} />
                </p>
                <p>LinkedIn URL:
                  <input id="linkedInUrl" type="text" onChange={this.handleTextChange} value={this.state.linkedInUrl} />
                </p>
                <p>Industry of Interest:
                  <input id="industry" type="text" onChange={this.handleTextChange} value={this.state.industry} />
                </p>
                <label>Willing to Share a Room?
                  <div className="spacer"></div>
                  Yes<input id="yes" type="radio" onChange={this.handleRadioChange} checked={this.state.roomShare === true} value={true} />
                  <div className="spacer"></div>
                  No<input id="no"  type="radio" onChange={this.handleRadioChange} checked={this.state.roomShare === false} value={false} />
                  <div className="spacer"></div>
                </label>
                <hr/>
                <p className="instructions">
                Please make sure you are logged into your primary Rinkeby account.
                </p>
                <p className="instructions">
                Selected applicants will be able to reserve a free room on the Rinkeby test network with the BookLocal travel app.
                </p>
                <p>
                  <input id="submit" type="submit" value="Submit Application" onClick={this.handleSubmit} />
                </p>
              </fieldset>
            </div>
            </main>
        } else {
          console.log(web3.version.network);
          hasWeb3 =
            <main className="container">
            <div className="ApplicationForm">
              <fieldset>
                <legend><img src={ethmemphisLogo} role="presentation"></img></legend>
                <p className="instructions">Please make sure you are on the Rinkeby Test Network.
                </p>
                <p className="instructions">To reload properly, hit the back arrow, then switch to the Rinkeby test network, and finally re-navigate to this page.
                </p>
              </fieldset>
            </div>
            </main>
        }
    } catch(err) {
        hasWeb3 =
          <main className="container">
          <div className="ApplicationForm">
            <fieldset>
              <legend><img src={ethmemphisLogo} role="presentation"></img></legend>
              <p className="instructions">
                It appears you are not connected to web3.
              </p>
              <p className="instructions">
                We recommend installing the Metamask extention for Google Chrome.
              </p>
              <p className="instructions">
                After switching to the Rinkeby test network, hit the back button and re-navigate to the application form.
              </p>
            </fieldset>
          </div>
          </main>
    }

    return (
      <div>
        {hasWeb3}
      </div>
    )
  }
}

export default ApplicationForm
