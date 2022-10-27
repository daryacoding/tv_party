const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render () {
        return (
        <Default>
            <h1>Create A New Show</h1>
            <nav>
            <a href='/shows'>Go Back To Shows Home Page</a>
            </nav>
            <form method='POST' action='/shows'>
            Name: <input name='name' placeholder='Name of Show Here' /><br />
            Stars: <input name='stars' placeholder='Number of Stars Here' /><br />
            Like: <input type='checkbox' name='like' /><br />
            <input type='submit' value='Submit Show' /><br />
            </form>
        </Default>
        )
    }
}

module.exports = New