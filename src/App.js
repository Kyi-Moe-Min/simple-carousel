import React from "react";
import { Carousel } from "./Carousel";

const images = [
  "https://image.shutterstock.com/image-vector/cute-panda-seamless-pattern-hand-260nw-1095054578.jpg",
  "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://androidwalls.net/wp-content/uploads/2016/08/Cute%20Is%20Just%20My%20Cover%20Rabbit%20Android%20Wallpaper-360x640.jpg",
  "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];
export default class extends React.Component {
  state = {
    moveTo: null
  };

  render() {
    return (
      <div>
        <Carousel jumpTo={this.state.moveTo} images={images} />
        Move to
        <input
          type="text"
          onChange={e => this.setState({ moveTo: e.target.value })}
          value={this.state.moveTo}
        />
      </div>
    );
  }
}
