const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render () {
        const { name, stars, review, poster, _id, comments } = this.props.show
        const capName = name[0].toUpperCase() + name.substring(1)
        return (
        <Default title={capName}>
            <div className='show'>
                <img src={poster}/>
                <a href={`/shows/${_id}/edit`}>Edit Show</a>
                <div className='rating'>
                    {[...Array(stars)].map((starchecked) => {
                        return(
                        <span className="starchecked">&#9733;</span>
                        ) 
                    })}
                </div>
                Review: <br />
                <div className="review"> {review} </div>
            </div>
            <div className='comments'>
            {
                comments.length ? 
                comments.map((comment) => {
                return (
                    <div key={comment._id}>
                    <p>Name: {comment.commentName}</p>
                    <p>Comment: {comment.commentBody}</p>
                </div>
                )
                }) : ''
            }
        <form method='POST' action={`/fruits/${_id}/comments?_method=PUT`}>
            <input type='text' name='commentName' placeholder='comment name'></input>
            <input type='text' name='commentBody' placeholder='insert comment here'></input>
            <input type='submit' value='submit'></input>
        </form>
            </div>           
        </Default>
        )
    }
}

module.exports = Show
