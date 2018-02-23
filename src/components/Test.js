import React, { Component } from 'react';
import { Col, Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images';


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
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
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClose={this.closeLightbox}
        />
      </Col>
    );
  }
}

const gutter = {
  small: 2,
  large: 4,
};

const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      marginRight: -gutter.large,
    },
  },

  //anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    float: 'left',
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large,
    },
  },

  //orientation
  landscape: {
    width: '30%',
  },
  square: {
    paddingBottom: 0,
    width: '40%',

    '@media (min-width: 500px)': {
      paddingBottom: 0,
    },
  },

  //actual <img />
  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto',
  },
});

export default Example;