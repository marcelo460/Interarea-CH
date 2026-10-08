// Modelo de estrutura para as perguntas do quiz
const perguntas = [
    {
        pergunta: "Insira aqui o texto da primeira pergunta...",
        opcoes: [
            "Alternativa A",
            "Alternativa B (Correta)",
            "Alternativa C",
            "Alternativa D"
        ],
        correta: 1, // Índice da resposta correta (lembrando que no JS a contagem começa em 0: 0=A, 1=B, 2=C, 3=D)
        explicacao: "Insira aqui o texto explicativo que aparecerá após o usuário responder."
    },
    {
        pergunta: "Insira aqui o texto da segunda pergunta...",
        opcoes: [
            "Alternativa A (Correta)",
            "Alternativa B",
            "Alternativa C",
            "Alternativa D"
        ],
        correta: 0,
        explicacao: "Insira aqui a explicação da segunda pergunta."
    }
    // Você pode adicionar mais blocos como este seguindo a mesma estrutura
];