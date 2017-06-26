
function Poster(props){
	return(
		<div className="col-sm-6 col-md-4 col-lg-3">
			<img src={props.poster} />
		</div>
	)
}

// function Application(){
var Application = React.createClass({

	getInitialState: function() {
		return{
			moviesToShow: [1,2,3,4,5]
		}
	},

	componentDidMount:function() {
		console.log("The application component has loaded!!")
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, function(movieData){
			console.log(this);
			var nowPlayingArray =  [];

			// The for way
			// for(let i = 0; i < movieData.results.length; i++){
			// 	nowPlayingArray.push(movieData.results[i]);
			// }

			movieData.results.map((movie,index)=>{
				nowPlayingArray.push(movie);
			});

			console.log(nowPlayingArray);
			this.setState({
				moviesToShow: nowPlayingArray
			});

		}.bind(this));				
	},

	render: function(){
		var imagePath = "http://image.tmdb.org/t/p/w300"
		return (
			<div className="container">
				<div className="row">
					<h1>Movie App</h1>
					<div className="col-sm-12">
						{ /* Posters go here */ }
						{this.state.moviesToShow.map((movie, index)=>{
							var moviePoster = imagePath + movie.poster_path
							return <Poster pointless="huh" key={index} poster={moviePoster} />
						})}

					</div>
				</div>
			</div>
		)
	}
})

ReactDOM.render(
	<Application />,
	document.getElementById('root')
)