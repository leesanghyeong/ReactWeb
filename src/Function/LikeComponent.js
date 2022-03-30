import React, { useState } from "react";
import ReactDom from "react-dom";

class LikeComponent extends React.Component {
  state = {
    like: 1,
  };

  render() {
    const { like } = this.state;
    return (
      <div className="App">
        <h1>Like {like}</h1>
        <h2>좋아요를 컴포넌트 형으로 다시 만들기</h2>
        <button onClick={this.pluslike}>PlusLike{like}</button>
        <button onClick={this.minuslike}>MinusLike{-like}</button>
      </div>
    );
  }
  pluslike = () => {
    this.setState((state) => {
      return {
        like: state.like + 1,
      };
    });
  };
  minuslike = () => {
    this.setState((state) => {
      return {
        like: state.like - 1,
      };
    });
  };
}

export default LikeComponent;
