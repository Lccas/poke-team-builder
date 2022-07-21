const connection = require('../infrastructure/connection')

class Teambuild {
   
    getTeam(res){
        const sql = 'SELECT * FROM Trainer'

        connection.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    getTeamById(id, res) {
        const sql = `SELECT * FROM Trainer WHERE id=${id}`

        connection.query(sql, (erro, resultados) => {
            const trainer = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(trainer)
            }
        })
    }

    addTeam(teamBuild) {
        const sql = 'INSERT into Trainer SET ?'

        connection.query(sql, teamBuild, (erro, results) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(trainer)
            }
        })
    }

    updateTeam(id, values, res) {
        const sql = 'UPDATE Trainer SET ? WHERE id=?'

        connection.query(sql, [values, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...values, id})
            }
        })
    }

    deleteTeam(id, res) {
        const sql = 'DELETE FROM Trainer WHERE id=?'

        connection.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        }) 

    }
}

module.exports = new Teambuild