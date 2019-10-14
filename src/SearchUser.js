import React,{Component} from 'react';


class SearchUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : ''
    }
  }
  onChange = (e) =>{
    this.setState ({
      username : e.target.value,
    })
  }
    render (){
      return (
        <>
          <input className="username"type="text" value={this.state.username} onChange={this.onChange} placeholder="Enter the user name"/>
          <button  class="search" onClick = {this.handleSubmit} value="Login">Search</button> 
        </>
      )
    }
}
export default SearchUser;