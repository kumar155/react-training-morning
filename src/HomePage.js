import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Title = () => {
  return (
      <div className="title">
        <h1>React Router demo</h1>
        <Link to="/list"><button>Show the List</button></Link>
        <Link to="/users"><button>Show Users</button></Link>
      </div>
  )
}
export const List = () => {
  return (
    <div className="nav">
      <ul>
        <li>list item1</li>
        <li>list item2</li>
      </ul>
      <Link to="/"><button>Back Home</button></Link>
      <Link to="/users"><button>Show Users</button></Link>
    </div>
  )
}