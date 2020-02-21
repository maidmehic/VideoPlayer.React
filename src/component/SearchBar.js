import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = { query: '' };
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    onInputChange(e) {
        this.setState({ query: e.target.value });
    }

    render() {
        return (
            <div className="search-bar ui-segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="ui fluid icon input">
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={this.state.query}
                            onChange={(e) => this.onInputChange(e)}
                        />
                        <i onClick={(e) => this.onFormSubmit(e)} className="circular search link icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;