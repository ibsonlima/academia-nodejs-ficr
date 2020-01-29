const express = require('express');
const port = 4000;
const app = express();


var getAllRepos = require('get-all-github-repos')

getAllRepos('saibotsivad', function (err, repos) {
    if (err) {
        console.log(err)
    } else {
        console.log(repos)
    }
})

app.listen(port, err => {
    console.log(`Servifor na porta ${port}`);
});