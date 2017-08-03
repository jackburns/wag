import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps({ req }) {
      const res = await fetch('https://wagchallenge.herokuapp.com/api/dogs');
      const data = await res.json();

      return { dogs: res }
  }
  render () {
    return <div>
      Hello there
      </div>
  }
};