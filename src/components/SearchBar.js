import React, { Component } from 'react';


class SearchBar extends Component {

    state = { term :""}

    onInputchange = (event)=>{
        this.setState({term:event.target.value});
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text" value={this.state.term} onChange={this.onInputchange} name="search"/>
                    </div>
                </form>
            </div>
        );
    }    
}

export default SearchBar;