const Users = require('../models/users')
const Note = require('../models/note')

module.exports = {
    index,
    note,
    create
}

function index(req, res){
    Note.find({}, function(err, notes){
        res.render('index', {
            user: req.user,
            title: 'Home',
            note: notes
        })
    })
}

function note(req, res){
    res.render('notes/note', {
        user: req.user,
        title: 'Create Post'
    })
}

function create(req, res){
    req.body.users = req.user._id
    req.body.tags = req.body.tags.split(',').map( t => {
        return {'tag': t}
    })
    const note = new Note(req.body)
    note.save(function(err){
        if(err) return res.redirect('notes/note')
        res.redirect('/')
    })
}