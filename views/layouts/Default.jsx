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
                <a href='/shows'>Go to Home Page For Shows</a>
                <a href='/shows/new'>Add a New Show</a>
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
