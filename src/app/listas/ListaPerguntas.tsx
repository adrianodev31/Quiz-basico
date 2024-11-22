type Resposta = {
    nome: string;
    validade: boolean
    id: number;
}

type TipoPersonagens = {
    id: number;
    pergunta: string;
    respostas: Resposta[]
}

export const ListaPerguntas: TipoPersonagens[] = [
{id: 1, pergunta: "No Jogo, qual campeão diz a frase 'A rosa negra irá desabrochar novamente..' ?", 
    respostas: [
        {id: 1, nome: 'Yasuo', validade: false}, 
        {id: 2, nome: "LeBlanc", validade: true}, 
        {id: 3, nome: "Malphite", validade: false}, 
        {id: 4, nome: "Katarina", validade: false}, 
        {id: 5, nome: "Zed", validade: false}, 
    ]
}
]