import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps({ req }) {
      const res = await fetch('http://localhost:8000/api/dogs');
      console.log(res);
      const data = await res.json();

      console.log(res);
      return { res }
  }
  render () {
    return <div>
      Hello there
      </div>
  }
};