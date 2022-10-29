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
            <body>
            <nav>
                <a href='/shows'><button>Go to Home Page For Shows</button></a>
                <a href='/shows/new'><button>Add a New Show</button></a>
                {title === 'Login to Account' || title === 'Sign Up For Account' ? '' : <a href="/user/logout"><button>Logout</button></a>}
                {show ? <a href={`/shows/${show._id}/edit`}> {show.name} Edit Page </a> : ''}
                {show ? <a href={`/shows/${show._id}`}>{show.name} Show Page</a> : ''}
            </nav>
            <div>
                <h1>
                {title}
                </h1>
                {this.props.children}
            </div>
            </body>
        </html>
        )
    }
}

module.exports = Default
