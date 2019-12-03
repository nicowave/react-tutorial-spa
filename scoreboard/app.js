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

const Counter = (props) => {
    return (
      <div className="counter">
        {/* Counter component */}
        <button className="counter-action decrement"> - </button>
        <span className="counter-score"> { props.score } </span>
        <button className="counter-action increment"> + </button>
     </div>
  );
}

 
 ReactDOM.render(
   <App initialPlayers={players} />,
   document.getElementById('root')
 );
 