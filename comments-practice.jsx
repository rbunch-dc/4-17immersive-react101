var data = [
  {
    author:{
      avatar: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  }
]

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
      <div className="UserBadges">
        <div className="badge">{props.userBadge[0]}</div>
        <div className="badge">{props.userBadge[1]}</div>
        <div className="badge">{props.userBadge[2]}</div>
      </div>
    </div>
  );
}

function Application(){
  return(
      <div>
        <h1>Sanity Check!</h1>
      </div>
  )
}


ReactDOM.render(
  <Application data = {data[0]}/>,
  document.getElementById('root')
)