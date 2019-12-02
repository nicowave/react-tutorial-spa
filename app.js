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
 
 
 
 ReactDOM.render(
   <Header />,
   document.getElementById('root')
 );
 