const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render () {
        return (
        <Default>
            <h1>Create A New Show</h1>
            <form method='POST' action='/shows'>
            Name: <input name='name' placeholder='Name of Show Here' /><br />
            Poster: <input name='poster' placeholder='Image Link Here' /><br />
            <div className="star">
                <input type='radio' id='five' name='stars' value='5' />
                <label htmlFor="five">☆</label>
                <input type='radio' id='four' name='stars' value='4' />
                <label htmlFor="four">☆</label>
                <input type='radio' id='three' name='stars' value='3' />
                <label htmlFor="three">☆</label>
                <input type='radio' id='two' name='stars' value='2' />
                <label htmlFor="two">☆</label>
                <input type='radio' id='one' name='stars' value='1' />
                <label htmlFor="one">☆</label> <br/>
            </div>
            Review: <input name='review' placeholder='Enter review' /><br />
            <input type='submit' value='Submit Show' /><br />
            </form>
        </Default>
        )
    }
}

module.exports = New