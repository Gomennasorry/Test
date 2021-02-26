//KUY ALL
import './App.css';
import React from 'react'
import movies from './movies'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnName: "hide", btnSort: "ASC", checkASC: false, movies: movies, isShow: true };
  }

  handleClick = () => {
    if (this.state.isShow === true) {
      this.setState({ btnName: "show", isShow: false });
    } else {
      this.setState({ btnName: "hide", isShow: true });
    }
  }

  handleSort = () => {
    if (this.state.checkASC === true) {
      this.setState({
        movies: this.state.movies.reverse(),
        btnSort: "ASC",
        checkASC: false
      });
    } else {
      this.setState({
        movies: this.state.movies.sort(function (a, b) {
          return a.title.localeCompare(b.title);
        }),
        btnSort: "DESC",
        checkASC: true
      });
    }
  }

  render() {
    let movielist = this.state.movies.map((e, index) => {
      //return <li key={index}>{e.id} {e.title} {e.rank}</li>;
      return (
        <>
          <tr key={index}>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td>{e.rank}</td>
          </tr>
        </>);
    });
    return (
      <>
        <div className="title">Movie List</div>
        <button onClick={this.handleClick}>{this.state.btnName}</button>
        {this.state.isShow === true ?
          <div>
            <button onClick={this.handleSort}>{this.state.btnSort}</button>
            <table>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>rank</th>
              </tr>
              {movielist}
            </table>
          </div> : ""}
      </>
    );
  }
}

export default App;