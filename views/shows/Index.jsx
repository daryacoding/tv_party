const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render () {
        const { shows } = this.props
        return (
        <Default>
            <h1>Shows Index Page</h1>
            <ul>
            {
                            shows.map((show) => {
                            const { name, stars, like, _id } = show
                            return (
                                <li key={_id}>
                                <a href={`/shows/${_id}`}>
                                    {name}
                                </a> is {stars} stars

                                <br />
                                {
                                            readyToEat
                                            ? 'Liked'
                                            : 'Disliked'
                                        }
                                <br />
                                <form method='POST' action={`/shows/${_id}?_method=DELETE`}>
                                    <input type='submit' value={`Delete ${name}`} />
                                </form>
                                </li>
                            )
                            })
                        }
            </ul>
        </Default>
        )
    }
}

module.exports = Index