import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import theme from '../../../../assets/styles/autosuggestion.scss';
import Only from '../../../basic/components/Only';

class SearchAutosuggestions extends Component {
  static propTypes = {
    vacancies: PropTypes.array.isRequired,
    customSearch: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    history: PropTypes.func.isRequired
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
      <span className='suggestion-content' onClick={() => this.onFullSearch(suggestion.id)}>
        <span className="name">
          {
            parts.map((part, index) => {
              const className = part.highlight ? 'highlight' : null;

              return (
                <span className={className} key={index}>{part.text}</span>
              );
            })
          }
          <span>- {suggestion.city}</span>
        </span>
      </span>
    );
  }

  onFullSearch = (id) => {
    this.props.history.push(`/vacancy/${id}`);
  }

  onCustomSearch = () => {
    this.props.customSearch(this.state.value);
  }

  onResetSearch = () => {
    this.props.resetSearch();
    this.setState({ value: ''});
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Поиск...',
      value,
      onChange: this.onChange,
      className: 'input-search'
    };

    return (
      <div className="inline-block w-80p">
        <div className="inline-block block-search-vacancy w-55p">
          <Only if={!!this.props.search}>
            <div className="close-vacancy" onClick={this.onResetSearch}>x</div>
          </Only>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            theme={theme}
            id='auto-compleat'
          />
        </div>
        <button className="ml-25 btn btn-lg" onClick={this.onCustomSearch}>Найти</button>
      </div>
    );
  }
}

export default withRouter(SearchAutosuggestions);