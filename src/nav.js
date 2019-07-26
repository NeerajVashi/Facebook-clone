import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <table className="table">
      <thead className="thead-light container mx-4">
        <tr>
          <th><Link to='/'>Home </Link> </th>
          <th><Link to = '/login'>login </Link> </th>
        </tr>
      </thead>
    </table>
  )
}

export default Nav;