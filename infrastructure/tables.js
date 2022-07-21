class Tables {
    init(connection) {
        console.log('tabelas')
        this.connection = connection

        this.createTrainer()
    }

    createTrainer() {
        const sql = `CREATE TABLE IF NOT EXISTS Trainer (id int NOT NULL AUTO_INCREMENT, 
                name varchar(50) NOT NULL,
                mainPokemon varchar(20),
                pokeSlot1 varchar(20),
                pokeSlot2 varchar(20),
                pokeSlot3 varchar(20),
                pokeSlot4 varchar(20),
                pokeSlot5 varchar(20),
                PRIMARY KEY(id)
            )`
        
        this.connection.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('tabela criada com sucesso!')
            }
        })

    }
}

module.exports = new Tables