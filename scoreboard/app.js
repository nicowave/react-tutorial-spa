// app.js


// Components are often written as => function expresssions
// i.e. (see below)
// function Header() { }...
class App extends React.Component {
  /* always set `state` to an empty object */ 
  state = {
    players: [
      {id: 1, name: "Nico",},
      {id: 2, name: "Jim",},
      {id: 3, name: "Lucian",},
      {id: 4, name: "James",}
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( player => player.id !== id )
      }
    })
  }

  /* Class based components need `render()` method */
  render() {
    return (
        <div className="scoreboard">
            <Header 
              title="Scoreboard" 
              totalPlayers={ this.state.players.length } 
            />
            {/* Players list */}
            { this.state.players.map( player => 
                // implicit return...
                <Player 
                 key={player.id.toString()}
                 name={player.name} 
                 id={player.id}
                 removePlayer={this.handleRemovePlayer}
                />
            )}
        </div>
    )
  }
}


const Header = (props) => {
    return (
      <header>
         <h1>
             { props.title }
         </h1>
        <span className="stats">
            Players: { props.totalPlayers}
        </span>
      </header>
    ); 
 }


const Player = (props) => {
  console.log(props.removePlayer)
  return (
    <div className="player">
        {/* Player component */}
        <span className="player-name">
          <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>
            ✖
          </button>
          { props.name }
        </span>
        {/* composition; rendering child component
         inside parent component*/}
        <Counter score={ props.score } />
    </div>
  );   
}


class Counter extends React.Component {
  /* set initial state */
  state = {
      score: 0
  }
  
  /* custom methods need `bind` to parent-Class */
  incrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score + 1
      }
    })
  }

  decrementScore = () => {
    this.setState( prevState => ({
        score: prevState.score - 1
    }))
  }

  render() {
    return (
      <div className="counter">
        {/* Counter component */}
        {/* arrow `=>` functions use a lexical-`this` binding */}
        {/* <button className="counter-action decrement" onClick={this.decrementScore().bind(this)}> - </button> */}
        {/* if custom Class-mothod is writeen with `=>` syntax, arrow `=>` lexical NOT needed in call below */}
        {/* <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button> */}
        <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
        <span className="counter-score"> { this.state.score } </span>
        <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
      </div>
  )};
}

 
 
ReactDOM.render(
   <App />,
   document.getElementById('root')
 );
 