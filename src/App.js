import React, { Component } from 'react';
import Search from './search';
import PrintType from './printType';
import BookType from './bookType';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerm: "henry",
      printType: "all",
      bookType: ""
    };
  }

  getData(){
    const apiKey = 'APIKey';
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}&key=${apiKey}`;
    if (this.state.bookType !== ""){
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}&filter=${this.state.bookType}&key=${apiKey}`
    }
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        let tempResults = [];
        for (let i =0;i<data.items.length;i++){
          tempResults.push(data.items[i].volumeInfo.title)
        }
        this.setState({
          results: tempResults
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  setSearchTerm = (event) =>{
    event.preventDefault()
    console.log(event.target[0].value)
    this.setState({
      searchTerm: event.target[0].value
    });
    this.getData();
  }

  setPrintType = (event)=>{
    this.setState({
      printType: event.target.value
    });
    this.getData();
  }

  setBookType = (event) =>{
    this.setState({
      bookType: event.target.value
    });
    this.getData();
  }

  render(){
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <Search handleSearchTerm = {this.setSearchTerm}/>
        <br/>
        <PrintType handlePrintType = {this.setPrintType}/>
        <BookType handleBookType = {this.setBookType}/>
        <br/>
        <ul>
          {this.state.results.map((title,i)=>{
            return <li key = {i}>{title}</li>
          })}
        </ul>
      </main>
    );
  }
}

export default App;