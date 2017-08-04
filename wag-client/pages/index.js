import React from "react";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import List from "../components/list";
import Selector from "../components/selector";
import Head from "next/head";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch("https://wagchallenge.herokuapp.com/api/dogs");
    const data = await res.json();

    return { dogs: data };
  }
  constructor(props) {
    super(props);
    this.state = {
      dogs: this.props.dogs,
      wishlistItems: []
    };
  }

  async addDog(newDog) {
    let formData = new FormData();
    formData.append("name", newDog.name);
    const res = await fetch("https://wagchallenge.herokuapp.com/api/dogs", {method: "POST", mode: 'cors', body: formData});
    const data = await res.json();
    const newDogs = [...this.state.dogs, data].sort((a, b) => {
        let dogA = a.name.toLowerCase();
        let dogB = b.name.toLowerCase();
        return (dogA < dogB) ? -1 : (dogA > dogB) ? 1 : 0;
      });

    this.setState({
      ...this.state,
      dogs: newDogs
    })
  }

  onAdd(newValue) {
    if (this.state.wishlistItems.indexOf(newValue.name) < 0) {
      if (!newValue.null && newValue.length > 3) {
        this.addDog(newValue);
      }

      this.setState({
        ...this.state,
        wishlistItems: [...this.state.wishlistItems, newValue.name]
      });
    }
  }

  onRemove(removedValue) {
    this.setState({
      ...this.state,
      wishlistItems: this.state.wishlistItems.filter(
        item => removedValue !== item
      )
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
            crossorigin="anonymous"
          />
          <title>Dog Wishlist</title>
        </Head>
        <div className="content">
          <h2>Dog Search</h2>
          <div>
            <Selector
              onAdd={this.onAdd.bind(this)}
              values={this.state.dogs}
              blacklistValues={this.state.wishlistItems}
              placeholder="Search for dog breeds"
            />
            <List
              onRemove={this.onRemove.bind(this)}
              items={this.state.wishlistItems}
              label="Your Dog Wishlist"
            />
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            width: 100%;
          }
          .content {
            width: 80%;
            max-width: 500px;
            height: 90%;
            margin: auto;
            position: absolute;
            top: 0px;
            left: 0;
            bottom: 0;
            right: 0;
          }
        `}</style>
      </div>
    );
  }
}
