// Our first component
function Application(){
	//THis is a comment
	var name = "Chad";
	console.log(React);
	return(
		<div id="parent">
			<div class="sibling">
				<Message name="Shane" gender="M" />
				<Message name="Carla" />
				<Message name="Nick" />
				<Message name="Hayes" />
			</div>
			<div class="sibling">
				<h2>From {name}. {2+2}</h2>
			</div>
		{ /* hello */ }
		</div>
	)
}

function Message(props){
	return(
		<h1>Hello, {props.name}. Gender: {props.gender}</h1>
	)
}

// ReactDOM is available because we inclued reactDOM.js
// The .render function needs React (react.js) and takes 2 arguments.
// 1. The component to render.
// 2. Where to render it.
// When ReactDOM.render runs it will OWN that element

ReactDOM.render(
	 // <h1>Hello, world!</h1>,
	 <Application />,
	 document.getElementById('container')
)