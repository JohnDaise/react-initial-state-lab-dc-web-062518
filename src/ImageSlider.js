import React from 'react';
// import ReactDOM from 'react-dom';
// your ImageSlider code here!

export default class ImageSlider extends React.Component {
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render(){
    return(`I am on slide ${this.state.currentSlideIndex}`)
  }


}
