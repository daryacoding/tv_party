const React = require('react')

class Home extends React.Component {
    render () {
        return (
        <html>
            <head>
                <link rel='stylesheet' href='/css/app.css' />
                <title>Home</title>
            </head>
            <div className='topnav'>
                <a href='/user/signup'>SignUp</a>
                <a href='/user/login'>Login</a>
            </div>
        </html>
        )
    }
}

module.exports = Home