import React from "react";

export class Carousel extends React.Component {
  isPress = false;
  movementX = 0;

  onMove = e => {
    if (this.isPress) this.movementX = e.movementX;
  };

  onRelease = () => {
    let { isPress } = this;
    if (isPress) {
      this.isPress = false;
      this.scroll(this.getScrollAmount());
    }
  };

  componentDidUpdate() {
    this.jump();
  }

  jump = () => {
    const jumpTo = this.props.jumpTo;
    const { e } = this.refs;
    let amount = jumpTo * e.clientWidth * -1;
    this.scroll(amount);
  };

  scroll = amount => {
    let { e } = this.refs;
    if (amount <= 0 && Math.abs(amount) <= e.scrollWidth - e.clientWidth)
      e.style.transform = "translateX(" + amount + "px)";
  };

  getScrollAmount = () => {
    let {
      movementX,
      refs: { e }
    } = this;
    return (
      Math.sign(movementX) * e.clientWidth +
      this.extractAmount(e.style.transform)
    );
  };

  extractAmount(transform) {
    return Number(
      transform.substring(transform.indexOf("(") + 1, transform.indexOf("px"))
    );
  }

  onPointerDown = e => {
    e.preventDefault();
    this.isPress = true;
  };

  renderImage = () => {
    const { images = [] } = this.props;
    return images.map(image => <img src={image} alt="hello" />);
  };

  render() {
    return (
      <div
        className="carousel"
        onDrag={this.onMove}
        onPointerDown={this.onPointerDown}
        onPointerMove={this.onMove}
        onPointerUp={this.onRelease}
        onPointerLeave={this.onRelease}
      >
        <div ref="e">{this.renderImage()}</div>
      </div>
    );
  }
}
