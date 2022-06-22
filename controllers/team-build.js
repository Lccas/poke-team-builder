module.exports = app => {
    app.get('/team-build', (req, res) =>
        res.send('Você está na rota para criar seu time!')
    )

    app.post('/team-build', (req, res) => {
        console.log(req.body),
        res.send('post')
    })
}