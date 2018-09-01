import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import theme from '../../../../assets/styles/autosuggestion.scss';

export default class SearchAutosuggestions extends Component {
  static propTypes = {
    vacancies: PropTypes.object.isRequired
  }

  state = {
    value: '',
    suggestions: []
  };

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();

    if (inputValue.length <= 3) { return []; }
    return this.props.vacancies.filter(vacancy => {
      return vacancy.title.toLowerCase().includes(inputValue);
    });
  }

  getSuggestionValue = suggestion => suggestion.title;
  onSuggestionsClearRequested = () => this.setState({ suggestions: [] });
  onSuggestionsFetchRequested = ({ value }) => this.setState({ suggestions: this.getSuggestions(value) });
  onChange = (event, { newValue }) => this.setState({ value: newValue });

  renderSuggestion = (suggestion, { query }) => {
    const suggestionText = this.getSuggestionValue(suggestion);
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);
    return (
      <span className={'suggestion-content'}>
        <span className="name">
          {
            parts.map((part, index) => {
              const className = part.highlight ? 'highlight' : null;

              return (
                <span className={className} key={index}>{part.text}</span>
              );
            })
          }
        </span>
      </span>
    );
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Введите вакансию',
      value,
      onChange: this.onChange
    };

    return (
      <div className="inline-block w-70p">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          theme={theme}
        />
        <button className="ml-25 btn btn-lg float-right">Найти</button>
      </div>
    );
  }
}
