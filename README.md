# Watch Party

A user-friendly blog where users can log and rate shows that they have watched.

# Built With

Node JS, Express, MongoDB, React, javascript, html, and css. Used Visual Studio Code.

# How To use
Follow the [link](https://tv-watchparty.herokuapp.com/shows)

First, a user needs to login, and if they are a new user, they must sign up for an account.

![alt text](https://github.com/daryacoding/tv_party/blob/Main/screenshots/LogIn.png "LogIn Page")

After logging in, the user will be able to see an blank index, and add shows by clicking the log show button.

![alt text](https://github.com/daryacoding/tv_party/blob/Main/screenshots/Index.png "Index Page")

After clicking log show, the user should fill out all the fields and the added show will render on the index page.

![alt text](https://github.com/daryacoding/tv_party/blob/Main/screenshots/Add.png "Add Page")

# Restful Routes

| # | Action| URL | HTTP Verb | Mongoose Method |
| ------------- | ------------- | --- | ---| --- | 
| 1  | Index  | /shows | Get  | Show.find | 
| 2  | New  | shows/new | Get | Show.create(req.body) |
| 3  | Delete  | shows/:id | Delete | Show.findByIdAndRemove() | 
| 4  | Update  | shows/:id | Put | Show.findByIdAndUpdate() | 
| 5  | Create  | /shows | Post | Show.create(req.body) |
| 6  | Edit  | shows/:id/edit | Get | Show.findByIdAndUpdate() | 
| 7  | Show  | shows/show | Get | Show.findById() | 
| 8  | Comments  | shows/:id/comments | Put | Shows.findByIdAndUpdate() |  

# unsolved problems

Want to add a want to watch list.

# trello

[Trello](https://trello.com/b/wIHL9E0m/television-party)