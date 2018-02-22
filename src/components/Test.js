import React, { Component } from 'react';
import { Col, Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';
import Lightbox from 'react-images';
import Data from '../data/data1.json';


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Data: Data,
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightBox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox(){
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext(){
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  gotoImage(index){
    this.setState({
      currentImage: index
    });
  }

  handleClickImage(){
    if(this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }

  renderGallery(){

    const { images } = this.props;
    if(!images) return;

    const gallery = images.filter(i => i.image).map((obj, i) => {
      return (
        <a
          href={obj.src}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={i} />
        </a>
      )
    });
    return (
      <div>
        {gallery}
      </div>
    )
  }


  render() {
    {console.log(this.props)}
    return (
      <Col xs={12} md={6} lg={6} className="right-col">
        <h3>Projects</h3>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
        />
      </Col>
    );
  }
}

export default Example;