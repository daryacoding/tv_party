const React = require('react')
const Default = require('../layouts/Default')


class LogIn extends React.Component {
    render () {
        return (
        <Default title="Login to Account">
            <form action='/user/login' method='POST'>
            <fieldset>
                <legend>Existing User</legend>
                <label>USERNAME: <input type='text' name='username' required /> </label>
                <label>PASSWORD: <input type='password' name='password' required />
                </label>
                <input type='submit' value='Login Account' />
            </fieldset>
            Don't have an Account? <a href='/user/signup'>Sign Up</a>
            </form>
            
        </Default>
        )
    }
}

module.exports = LogIn
