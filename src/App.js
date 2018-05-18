import React, { Component } from 'react'; 
import './App.css';
import { connect } from 'react-redux'
import GeoLocationAutoComplete from './components/GeoLocationAutoComplete';
import SelectedWeatherForecast from './components/SelectedWeatherForecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      long: this.props.long
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.lat === nextProps.lat && prevState.long === nextProps.long) {
      return null;
    } else {
      return {
        lat: nextProps.lat,
        long: nextProps.long
      };
    }
  }

  render() {
    let weatherForecast = <div></div>;

    if (this.state.lat && this.state.long) {
      weatherForecast = <SelectedWeatherForecast lat={this.state.lat} long={this.state.long} />
    }

    return (
      <div>
        <div className="row" style={{marginTop: 20 + 'px'}}>
          <div className="col-5"></div>
          <div className="col-7"><GeoLocationAutoComplete /></div>
        </div>
        <div className="row" style={{marginTop: 20 + 'px'}}>
          <div className="col-4"></div>
          <div className="col-4">{weatherForecast}</div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      lat: state.location.lat,
      long: state.location.long
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);