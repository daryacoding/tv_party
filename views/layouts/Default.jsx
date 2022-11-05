const React = require('react')

class Default extends React.Component {
    render () {
        const { show, title } = this.props
        return (
        <html>
            <head>
            <link rel='stylesheet' href='/css/app.css' />
            <title>{title}</title>
            </head>
            <div className= 'topnav'>
                <a href='/'>Home</a>
                <a href='/shows'>My Shows</a>
                <a href='/shows/new'>Log Show</a>
                {title === 'Login to Account' || title === 'Sign Up For Account' ? '' : <a href="/user/logout">Logout</a>}
                {show ? <a href={`/shows/${show._id}/edit`}> {show.name} Edit Page </a> : ''}
                {show ? <a href={`/shows/${show._id}`}>{show.name} Show Page</a> : ''}
            </div>
            <body>
                <h1>
                    {title}
                </h1>
                <div className="body">
                    {this.props.children}
                </div>
            </body>
        </html>
        )
    }
}

module.exports = Default