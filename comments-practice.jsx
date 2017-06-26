var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
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
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
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
          {props.date}
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

function Application(props){
  console.log(props)
  return(
      <div className="container">
        <h1>Some Facebook Post</h1>
        {props.data.map((comment,index)=>{
          return <Comment author={comment.author} userBadge = {comment.userBadge} text={comment.text} commentHeading={comment.commentHeading} date={comment.date} />
        })}
        { /* <Comment author={props.data[0].author} userBadge = {props.data[0].userBadge} text={props.data[0].text} commentHeading={props.data[0].commentHeading} date={props.data[0].date} /> */ }


      </div>
  )
}


ReactDOM.render(
  <Application data = {data} crossFitJunkie="Rissa" />,
  document.getElementById('root')
)