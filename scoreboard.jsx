

// Make a component called "Applciation" that returns a single DOM element
// Components should be uppercase.
// Add props param so we can get properties sent by the component rendering
// this component

// The app works. But it's big. And it's no better than if we just copy
// and pasted it in to our html file. If it gets any bigger, we aer in
// big trouble because we have to manage both JSX< and html
// Let's break the app up into components
// 1. Header -- CHECK!!
// 2. Multiple Teams -- CHECK!!
// 3. Each team has a counter

// Our app sucks!! There is no point in using React. Everything is hard coded.
// I want my money back.
// Let's make some JSON

// State.
// Props are immutable. They do not change. 
// State is piece of data, that DOES change.
// State has:
// 1. An ititial value
// 2. (Inifite number of) changed values
// In the case of the NL east, all gamesback start at 0
// Some kind of mutation occurs (namely, someone loses or wins a game)

// In ES5, to use state, React provides a component for us to use.
// It takes an object as a param.

// ANYTIME STATE CHANGES... THE COMPONENT WILL RE-RENDER

var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Miami"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadeliphia"
	}
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

// Create a new component called Team ot be used by Application.
// We can use it twice with props!
function Team(props){
	return(
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 team">
				<div className="team-name col-sm-12">{props.city} {props.name}</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>		
	)
}

// var with the name of teh COmponent
// The only REQUIRED property, is render
var Counter = React.createClass({
	render: function(){
		// back to the good old days...
		return(
			<div className="counter">
				<button className="btn btn-success">+</button>
				<div className="games-back">games-back will go here</div>
				<button className="btn btn-danger">-</button>
			</div>
		)
	}
})

function Application(props){
	return(

		// Use map to loop through the teams array.
		// We no longer need:
		// 	<Team name="Braves" score="0" />
		// 	<Team name="Brewers" score="0" />
		// props.teams is an array, with team objects
		// send Team the team object, in map, ES6 style


		<div className="container">
			{ /*<h1>{props.title}</h1> */ }
			<Header title={props.title} />
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}

// Add a prop to send the title to the Application component
ReactDOM.render(
	<Application title="Braves Scoreboard" teams={teams} />,
	document.getElementById('root')
)