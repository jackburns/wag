import React from "react";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import List from "../components/list";
import Selector from "../components/selector";
import Head from "next/head";

export default class extends React.Component {
  // next.js will load intial props serverside, we can then pass props into state if they need to be modified
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
    const res = await fetch("https://wagchallenge.herokuapp.com/api/dogs", {
      method: "POST",
      mode: "cors",
      body: formData
    });
    const data = await res.json();
    // Keep dogs sorted alphabetically
    let newDogs = [...this.state.dogs, data];
    newDogs = newDogs.sort((a, b) => {
      let dogA = a.name.toLowerCase();
      let dogB = b.name.toLowerCase();
      return dogA < dogB ? -1 : dogA > dogB ? 1 : 0;
    });

    this.setState({
      ...this.state,
      dogs: [...newDogs]
    });
  }

  onAdd(newValue) {
    // make sure dog isn't already in wishlist
    if (this.state.wishlistItems.indexOf(newValue.name) < 0) {
      // post new dog if it wasn't in original list and meets name requirements
      if (!newValue.id && newValue.name.length > 3) {
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
