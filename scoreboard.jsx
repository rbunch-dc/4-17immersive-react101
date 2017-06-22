

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
				<div className="team-name col-sm-12">{props.name}</div>
				<div className="counter">
					<button>+</button>
					<div className="team-score">{props.score}</div>
					<button>-</button>
				</div>
			</div>
		</div>		
	)
}

function Application(props){
	return(
		<div className="container">
			{ /*<h1>{props.title}</h1> */ }
			<Header title={props.title} />
			<Team name="Braves" score="0" />
			<Team name="Brewers" score="0" />
		</div>
	)
}

// Add a prop to send the title to the Application component
ReactDOM.render(
	<Application title="Braves Scoreboard" />,
	document.getElementById('root')
)