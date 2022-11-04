const React = require('react')
const Default = require('../layouts/Default.jsx')
class Index extends React.Component {
    render () {
        const { shows } = this.props
        return (
        <Default>
            <h1>My Shows</h1>
            <div className='shows'>
            {
                            shows.map((show) => {
                            const { name, stars, poster, _id } = show
                            return (
                                <div className='show' key={_id}>
                                <a href={`/shows/${_id}`}>
                                    <img src={poster}/>
                                </a> <br />
                                <div className='title'>{name}</div>
                                <div className='rating'>
                                    {[...Array(stars)].map((starchecked) =>{
                                        return(
                                            <span className="starchecked" >&#9733;</span>
                                        );
                                    })}
                                </div>
                                <br />
                                <form method='POST' action={`/shows/${_id}?_method=DELETE`}>
                                    <input type='submit' value='delete' />
                                </form>
                                </div>
                            )
                            })
                        }
            </div>
        </Default>
        )
    }
}

module.exports = Index