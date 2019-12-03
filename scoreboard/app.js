// app.js

// components are often written as => function expresssions
// i.e. (see below)
// function Header() { }...

const Header = () => {
    return (
      <header>
         <h1>Scoreboard</h1>
         <span className="stats">Players: 1</span>
      
      </header>
    ); 
 }
 
 
const Player = () => {
    return (
        <div className="player">
            {/* Player component */}
            <span className="player-name">
                { playerName }
            </span>
            {/* Counter component */}
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score"> 35 </span>
                <button className="counter-action increment"> + </button>
            </div>
        </div>

    );
}

 
 ReactDOM.render(
   <Player />,
   document.getElementById('root')
 );
 