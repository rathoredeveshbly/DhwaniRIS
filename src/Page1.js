import React, { Component } from 'react';
import './App.css'


class Page1 extends Component {

  render() { 
    const posts = this.props.posts
    return (  <div>
      <h3 style={{border:"1px solid blue"}}>First Page Data</h3>
      <button onClick={this.props.pageHandler}>Go to Page 2 </button>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Has Premium</td>
            <td>Show Notification</td>
          </tr>
          {posts.map((post) => (
            <tr>
              <td>
              <img src={post.avatarUrl} /> <span>{post.firstname} {post.lastname}</span>
              </td>
              <td>{post.email}</td>
              <td>{post.phone}</td>
              <td>{post.hasPremium === true ? "Yes" : "No"}</td>
              <td>{post.showNotification === true ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
        </div> );
  }
}
 
export default Page1;
 
