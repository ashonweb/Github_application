import React,{Component} from 'react';
import {connect} from 'react-redux';
import {loginUserAction} from './action/login';
import { Route , withRouter, Redirect } from 'react-router-dom';


class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state ={
      email:"",
      pass:"",
    }
  }
  onChange = (event) =>{
    this.setState ({
      email : event.target.value,
    })
  }

  onChangepass = (event) =>{
    this.setState({
      pass:event.target.value
    })
  }
  handleSubmit = (event) =>{
    const {email ,pass} = this.state;
    event.preventDefault();
    loginUserAction (email,pass,this.props.history)
  }
  render(){
    const isLoggedIn = this.props.isLoggedIn
    if(isLoggedIn){
      return(
        <Redirect  to ={{pathname:"/githubsearch"
      }} />
      )
    }
    return(
      <>
       <form className="myform"onSubmit={this.handleSubmit}>
        <label for ="email">
          Email Adress
          <input id="email"type="text" value={this.state.email} onChange={this.onChange} pattern="[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$" 
          title="must contain valid email adress" required/>
        </label>
        <label>
          Password
          <input type="password" value={this.state.pass} onChange={this.onChangepass} pattern="(?=.*\d)(?=.*[a-zA-z]).{8,}" 
          title="must contain one uppercase character one lower case character and a number with minimum length be 8" required/>
        </label>
        {/* <button class="button" onClick = {this.handleSubmit} value="Login">Login</button>  */}
        <input class="button" type = "submit" value="submit"/>
      </form>
      </>
    )
  }
}

const mapStateToProps = (store) =>({
  isLoggedIn : store.loginReducer.isLoggedIn,
})

export default withRouter(connect(mapStateToProps)(LoginComponent));
