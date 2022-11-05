const Show = require('../models/show.js');

const dataController = {
    index(req, res, next){
        Show.find({ username: req.session.username }, (err, allShows) => {
        if(err){
            res.status(404).send({
            msg: err.message
            })
        }else {
            res.locals.data.shows = allShows
            next()
        }
        });
    },
    create(req, res, next){
        req.body.like = req.body.like === "on" ? true : false;
        req.body.username = req.session.username
        // Use Model to create Show Document
        Show.create(req.body, (err, createdShow) => {
            // Once created - respond to client
            if(err){
            res.status(404).send({
                msg: err.message
            })
            }else {
            res.locals.data.show = createdShow
            next()
            }
        });
    },
    show(req, res, next){
        Show.findById(req.params.id, (err, foundShow)=>{
        if(err){
            res.status(404).send({
            msg: err.message
            })
        } else {
            res.locals.data.show = foundShow
            next()
        }
        })
    },
    update(req, res, next){
        req.body.like = req.body.like === "on" ? true : false;
        Show.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedShow) => {
        if(err){
            res.status(404).send({
            msg: err.message
            })
        } else {
            res.locals.data.show = updatedShow
            next()
        }
        });
    },
    updateComment (req, res, next) {
        console.log(req.body)
        Fruit.findById(req.params.id, (err, foundFruit) => {
            if (err) {
                res.status(400).send({ msg: err.message })
            } else {
                foundFruit.comments.push(req.body)
        
                Fruit.findByIdAndUpdate(req.params.id, foundFruit, { new: true }, (err, updatedFruit) => {
                if (err) {
                    res.status(400).send({ msg: err.message })
                } else {
                    res.locals.data.fruit = updatedFruit
                    next()
                }
                })
            }
        })
    },
    destroy(req, res, next){
        Show.findByIdAndRemove(req.params.id, (err, show) => {
        if(err){
            res.status(404).send({
            msg: err.message
            })
        } else {
            res.locals.data.show = show
            next()
        }
        });
    }
}

module.exports = dataController