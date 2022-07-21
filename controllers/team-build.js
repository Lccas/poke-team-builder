const teamBuild = require('../models/team-build')

module.exports = app => {
    app.get('/team-build', (req, res) => {
        teamBuild.getTeam(res)
    })

    app.get('/team-build/:id', (req, res) => {
        const id = parseInt(req.params.id)

        teamBuild.getTeamById(id, res)
        console.log(req.params)
    })

    app.post('/team-build', (req, res) => {
        const teambuild = req.body
        teamBuild.addTeam(teambuild)
        res.send(teambuild)
    })

    app.patch('/team-build/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        teamBuild.updateTeam(id, values, res)
    })

    app.delete('/team-build/:id', (req, res) => {
        const id = parseInt(req.params.id)

        teamBuild.deleteTeam(id, res)
    })
}