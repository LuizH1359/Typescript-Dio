
enum Profissao {
    Padeiro,
    Atriz
}

type Individuo = {
    nome: string,
    idade: number,
    profissao: Profissao
}

let individuo1: Individuo = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};

let individuo2: Individuo = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};

let individuo3: Individuo = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};

let individuo4: Individuo = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}