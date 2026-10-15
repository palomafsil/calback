//Exemplo 01 - calback básico
//Objetivo: entender que podemos ENTREGAR uma função para outra função.

//Esta função sabe qual mensagem deve mostrar.
function dizerOla() {
    console.log("Olá, turma!");
}

//O parâmetro "funcaoRecebida" receberá um função.
//O nome do parâmetro é livre: não precisa se chamar "calback"
function executar(funcaoRecebida) {
    funcaoRecebida(); //Os parênteses fazem a função recebida EXECUTAR.
}

//Sem parênteses: entregramos a função dezerOla, sem executá-la aqui.
executar(dizerOla);
//SAIDA:Olá, turma
