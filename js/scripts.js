let chave = "cebcd482eda57fa9a6714c1c2ba91885";

// Sempre que fizer uma função tipo igual essa de baixo, você precisa ATIVAR ela para funcionar
async function buscarcidade() {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=londresappid=cebcd482eda57fa9a6714c1c2ba91885")
        .then((resposta) => resposta.json());

    console.log(dados);
}

// Para ativar a função é bem simples, basta colocar o nome da função e os colchete no final, igual está em baixo "buscarcidade()", você pode ativar uma função em qualquer 
//lugar do seu codigo
buscarcidade();

// Na função abaixo você fez a função mas não ativou, então não vai funcionar
function cliquenoBotão() {
    let cidade = document.querySelector("input-cidade").value;

    console.log(cidade);
}

console.log("olá");
