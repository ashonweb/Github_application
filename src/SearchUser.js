import React,{Component} from 'react';
import {searchUserAction} from './action/search'
import {connect} from 'react-redux';


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

  handleclick = (e) =>{
    e.preventDefault();
    const {username} = this.state;
    searchUserAction(username);
  }

    render (){
      const {userlist} = this.props.search;

      return (
        <>
          <input className="username"type="text" value={this.state.username} onChange={this.onChange} placeholder="Enter the user name"/>
          <button  class="search" onClick = {this.handleclick} value="Login">Search</button> 
          {userlist.map((user,i)=>(
           <div>
             <li key={user.id}>{user.login}</li>
           </div>
          ))}
        </>
      )
    }
}
const mapStateToProps = (store) =>({
  search:store.searchReducer
})
export default (connect(mapStateToProps)(SearchUser));