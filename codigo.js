/* let opcao = parseInt(prompt("digite um numero"))
switch (opcao) {
    case 1:
        alert("voce digitou o numero 1")
        break;
    case 2:
        alert("voce digitou o numero 2")
        break;
        case 3:
            alert("voce digitou o numero 3")
            break;
            case 4:
        alert("voce digitou o numero 4")
        break;
        case 5:
        alert("voce digitou o numero 5")
        break;
        default:("voce digitou numero incorreto")
} */

/* Criando a funcao MENU */
function menu(){
opcao = parseInt(prompt("----- MENU PRINCIPAL ------ \n \n" +
    "1 - cadastro de Cliente \n" +
    "2 - cadastro de Colaborador \n" +
    "3 - cadastro de produto \n" +
    "4 - Sair do sistema \n"));

switch (opcao) {
    case 1:
        cadastrar_cliente();
        break;
    case 2:
        cadastrar_colaborador();
        break;
    case 3:
        cadastrar_produto();
        break;
    default:
        alert("finalizando Sistea de Cadastro");
        document.getElementById("relatorio").innerHTML = "<p>Obrigada</p>";
        break;
}
}
/* funcao cadastrar cliente */
function cadastrar_cliente();{
    let x= "n";
    relatorio = "- Relatorio de Clientes - <br>";

    while(x.toUpperCase() != "S"){
        id = parseInt(prompt("digite o ID do cliente"));
        nome = prompt("Digite o nome do cliente");
        endereco = prompt("digite o endereço do cliente"); 
        reletorio = relatorio + "<br>+------------------------------+<br><br>"+
                               "ID:"+ id + "<br>"+
                               "NOME:"+ nome + "<br>"+
                               "ENDEREÇO:"+ endereco + "<br>"+
                               "<br>+------------------------------+<br><br>";
        confirme=prompt("finalizar cadastro? \n(S)im\n(N)ao");
        if(confirme == "S"){
            x="S";
        };
        
        document.getElementById("relatorio").innerHTML = "<p> "+ relatorio +"</p>";
    }

}