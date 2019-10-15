import React,{Component} from 'react';
import {searchUserAction} from './action/search'
import {connect} from 'react-redux';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { faGlasses, faUser,faIdCard, faSpinner , faLink,faHandPointLeft, faHandPointRight,faFolder} from '@fortawesome/free-solid-svg-icons'
 import { faFemale,faMale,faTransgender,faGlobe,faLaugh,faHeartbeat,faUpload, } from '@fortawesome/free-solid-svg-icons'


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
        <form onSubmit={this.handleclick}>
          <input className="username" type="text" value={this.state.username} onChange={this.onChange} title="please enter the user name which needs to be searched" placeholder="Enter the user name" required/>
          {/* <button  class="search" onClick = {this.handleclick} value="Login">Search</button>  */}
          <input class="search" type = "submit" value="search" />
        </form>
          {console.log(userlist,"userlist")}
          {Array.isArray(userlist)? console.log("ddashdjd"):null}
          {userlist.map((user,i)=>(
            <div className="searchcss">
              <div className="columnfirst">
                <div class="imageperson" >
                  <img id ="output"src={user.avatar_url} alt="" />
                </div>
              </div>
              <div className="columnsecond">
                <div className="attributes1">
                  <FontAwesomeIcon icon={faIdCard} /> &nbsp;&nbsp;
                  User id: {user.id}
                </div>
                <div className="attributes2">
                  <FontAwesomeIcon icon={faUser} /> &nbsp;&nbsp;
                  user Name: {user.login}
                </div>
                <div className="attributes3">
                  <FontAwesomeIcon icon={faLink} /> &nbsp;&nbsp;
                  User github url: <a href={user.html_url} target="_blank">{user.html_url}</a>
                </div>
                <div className="attributes4">
                  <FontAwesomeIcon icon={faHandPointRight} /> &nbsp;&nbsp;
                  User score:{user.score}
                </div>
                <div className="attributes5">
                  <FontAwesomeIcon icon={faFolder} /> &nbsp;&nbsp;
                  User Repo url: <a href={user.repos_url} target="_blank">{user.repos_url}</a>
                </div>
              </div>
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