// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.updateText = this.updateText.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
    this.handleKeys = this.handleKeys.bind(this);  
    this.state= {
      isFocused: false
    };
  }

  handleFocus(val) {
    this.setState({
      isFocused: val,
    });

    if (this.props.onFocus && val) {
      this.search.select();
      this.props.onFocus(true);
      return;
    }

    if(this.props.onFocus && !val) {
      this.props.onFocus(false);
    }

    if (!this.state.value && !val) {
      console.log('cancel');
      return;
    }

    if(this.props.onBlur && !val){
      this.props.onBlur();
    }
  }

  handleKeys (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 9) {
        e.preventDefault();
        var start = this.search.selectionStart;
        var end = this.search.selectionEnd;
        this.props.onChange(this.search.value.substring(0, start) + '\t' + this.search.value.substring(end));
        this.search.selectionStart = this.search.selectionEnd = start + 1;
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeys, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeys, false)
  }


  updateText(e) {
    this.props.onChange(e.target.value);
  }

  cancelSearch() {
    this.props.onChange('');
  }

  render() {
    const searchBarClass = classNames({
      "searchBar": true,
      "active": this.state.isFocused
    });

    const iconClass = classNames({
      'material-icons': true,
      'icon': true,
      'active': this.state.isFocused,
    });

    const hasText = this.props.value.length > 0;

    const inputStyle = {
      color: this.state.isFocused ? '#212121' : '#E0E0E0',
    };

    const containerStyle = {
      color: this.state.isFocused ? '#212121' : '#E0E0E0',
      backgroundColor: this.state.isFocused ? 'white' : 'rgba(0,0,0,0.16)',
      boxShadow: this.state.isFocused ? '0 2px 1px rgba(0,0,0,0.24)' : '',
    };

    var inpt;
    if(this.props.useTextArea) {
      inpt = (
        <textarea
          rows="1"
          style={inputStyle}
          ref={(e) => {this.search = e;}}
          placeholder={this.props.placeholder}
          value={this.props.value}
          spellCheck={this.props.spellCheck}
          onFocus={() => {this.handleFocus(true);}}
          onBlur={() => {this.handleFocus(false);}}
          onChange={this.updateText}/>
      );
    } else {
      inpt = (
        <input
          style={inputStyle}
          ref={(e) => {this.search = e;}}
          placeholder={this.props.placeholder}
          value={this.props.value}
          spellCheck={this.props.spellCheck}
          onFocus={() => {this.handleFocus(true);}}
          onBlur={() => {this.handleFocus(false);}}
          onChange={this.updateText}
        />
      );
    }

    return (
      <div className={searchBarClass} style={containerStyle}>
        <i className={iconClass}>{this.props.leftIconName || 'search'}</i>
        {inpt}
        <div
          onClick={()=>{
            this.cancelSearch();
          }}
          className="material-icons"
          style={{color: hasText ? '#EF5350' : '#E0E0E0', opacity: (this.state.isFocused || hasText) ? '1' : '0', transition: 'all 100ms ease-in'}}
        >
          <i className="material-icons">close</i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
