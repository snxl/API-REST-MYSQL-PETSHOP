export class Tables {

    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL,  pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text,acesso datetime NOT NULL, dataAgendamento datetime NOT NULL, PRIMARY KEY(id))"

        this.conexao.query(sql, err => {
            if (err) {
                console.log(err)
            } else {
                console.log("Tabela criada com sucesso")
            }
        })
    }
}

export default new Tables