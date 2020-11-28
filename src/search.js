import React from 'react';

function Search(props){
  return(
    <form onSubmit = {(e)=>props.handleSearchTerm(e)}>
      <label htmlFor="search">Search: </label>
      <input type = "search" id = "search" name = "search"></input>
      <input type = "submit" value = "Search"></input>
    </form>
  )
}

export default Search;