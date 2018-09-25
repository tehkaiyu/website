import React from 'react';
import PropTypes from 'prop-types';
import bananaDrinkImage from './banana-drink.png';
import bananaPeelImage from './banana-peel.png';
import bananaIconImage from './banana-icon.svg';
import './Features.scss';

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    features: PropTypes.array,
  };

  render() {
    return (
      <section className="Features page-section">
        <h1 className="section--title">{this.props.title}</h1>
        <h3 className="section--subtitle">{this.props.subtitle}</h3>
        <ul className="Features-wrapper">
          {this.props.features.map(feature => (
            <li className="Features--single" key={feature}>
              <img src={bananaIconImage} alt="Feature:" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <footer className="Features-footer">
          <a className="button--join-now" href="https://itsbananas.slack.com">
            Join Now
          </a>
        </footer>
        <img
          className="Features-image--drink"
          src={bananaDrinkImage}
          alt="Banana Drink"
        />
        <img
          className="Features-image--peel"
          src={bananaPeelImage}
          alt="Banana Peel"
        />
      </section>
    );
  }
}
