
var Coin = React.createClass(
	{
		sides: [
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
		],

		getInitialState: function() {
			return {
				image: this.sides[0]
			}
		},

		flipCoin: function(){
			var newSide;
			let randomSide = Math.round(Math.random());
			if(randomSide == 0){
				// The user flipped tails.
				newSide = this.sides[randomSide]
				console.log("Tails!!")
			}else{
				newSide = this.sides[randomSide]
				console.log("Heads!!")
			}
			// this.state.image = newSide; BAD!!!
			this.setState({
				image: newSide
			})
		},

		render: function(){
			console.log("Rendering Coin component...")
			return (
				<div>
					<button onClick={this.flipCoin}>Click To Flip</button>
					<img src={this.state.image} />
				</div>
			)		
		}
	}
)



function Application(){
	console.log("Applcation component...")
	return(
		<div>
			<Coin />
			<Coin />
			<Coin />
		</div>
	)
}

ReactDOM.render(
	<Application />,
	document.getElementById('root')
)