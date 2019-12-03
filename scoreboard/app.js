// app.js

const players = [
  {
    id: 1,
    name: "Nico",
    score: 200
  },
  {
    id: 2,
    name: "Jim",
    score: 85
  },
  {
    id: 3,
    name: "Lucian",
    score: 95
  },
  {
    id: 4,
    name: "James",
    score: 80
  }
];

// Components are often written as => function expresssions
// i.e. (see below)
// function Header() { }...
const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
              title="Scoreboard" 
              totalPlayers={ props.initialPlayers.length } 
            />
            {/* Players list */}
            { props.initialPlayers.map( player => 
                // implicit return...
                <Player 
                 key={player.id.toString()}
                 name={player.name} 
                 score={player.score}
                />
            )}
        </div>
    );
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
    return (
        <div className="player">
            {/* Player component */}
            <span className="player-name">
              { props.name }
            </span>
            {/* composition; rendering child component
             inside parent component*/}
            <Counter score={ props.score } />
        </div>
    );   
}

class Counter extends React.Component {
  
  // constructor() {
  //   super()
  state = {
      /* set initial state */
      score: 0
  }
  // }

  /* custom methods need `bind` to parent-Class */
  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    })
    /* should print out parent Class-instance-object */
    // console.log(this)
  }

  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    })
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
   <App initialPlayers={players} />,
   document.getElementById('root')
 );
 