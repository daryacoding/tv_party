const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render () {
        const { name, stars, poster, _id } = this.props.show
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
            </div>           
        </Default>
        )
    }
}

module.exports = Show
