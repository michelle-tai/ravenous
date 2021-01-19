import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: "", 
            location: "",
            sortBy: "best_match"
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
        // this.getTest = this.getTest.bind(this);
    }

    getSortByClass(sortByOption){
        return (this.state.sortBy === sortByOption) ? "active" : "";
    }

    // getTest(e){
    //     console.log(e);
    //     return (this.state.sortBy === e.target) ? "active" : "";
    // }

    handleSortByChange(sortByOption){
        // console.log(e);
        this.setState({ sortBy: sortByOption});
    }

    handleTermChange(e){
        console.log(e);
        this.setState({term: event.target.value});
    }

    handleLocationChange(e){
        console.log(e);
        this.setState({location: event.target.value});
    }

    handleSearch(e){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
            // return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.getTest}>{sortByOption}</li>;

        })
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {/* call the function, not the function definition, so things will be rendered */}
                        {this.renderSortByOptions()} 
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onchange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
        
    }
}

export default SearchBar;