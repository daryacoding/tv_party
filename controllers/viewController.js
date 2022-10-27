const RESOURCE_PATH = '/shows'

const viewController = {
    index (req, res, next) {
        res.render('shows/Index', res.locals.data)
    },
    newView (req, res, next) {
        res.render('shows/New')
    },
    edit (req, res, next) {
        res.render('shows/Edit', res.locals.data)
    },
    show (req, res, next) {
        res.render('shows/Show', res.locals.data)
    },
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
        const showId = req.params.id || res.locals.data.show._id
        res.redirect(`${RESOURCE_PATH}/${showId}`)
    }

}

module.exports = viewController