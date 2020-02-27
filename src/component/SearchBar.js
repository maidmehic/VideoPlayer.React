import React from 'react';

class SearchBar extends React.Component {

    searchQuery = '';

    componentDidMount() {
        this.onFormSubmit();
    }

    onFormSubmit(e = null) {
        if (e)
            e.preventDefault();
        this.props.onSubmit(this.searchQuery);
    }

    onInputChange(e) {
        this.searchQuery = e.target.value;
    }

    render() {
        return (
            <div className="search-bar ui-segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="ui fluid icon input">
                        <input
                            type="text"
                            placeholder="Search videos..."
                            onChange={(e) => this.onInputChange(e)}
                        />
                        <i onClick={() => this.onFormSubmit()} className="circular search link icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;