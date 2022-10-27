const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render () {
        const { name, _id, stars, like } = this.props.show
        return (
        <Default>
            <h1>Edit This Show</h1>
            <nav>
            <a href='/shows'> Go Back To Shows Home</a>
            </nav>
            <form method='POST' action={`/shows/${_id}?_method=PUT`}>
            Name: <input type='text' name='name' defaultValue={name} /><br />
            Stars: <input type='text' name='stars' defaultValue={stars} /><br />
            Liked: <input type='checkbox' name='like' defaultChecked={like} /> <br />
            <input type='submit' value='Edit Show' />
            </form>
        </Default>
        )
    }
}

module.exports = Edit