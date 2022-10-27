const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render () {
        const { name, stars, like, _id } = this.props.show
        const capName = name[0].toUpperCase() + name.substring(1)
        return (
        <Default title={`${capName} Show Page`}>
            <a href={`/shows/${_id}/edit`}>Edit Show</a>
            <p>{capName} is {stars} stars and {like ? 'liked' : 'disliked'}</p>
        </Default>
        )
    }
}

module.exports = Show
