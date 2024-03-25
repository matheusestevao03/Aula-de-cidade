//Estrutura condicional

let opcao = 1;

 switch(opcao) {
    case 1:
        console.log('Primeira opção');
    break;
case 2:
console.log('Segunda opcao');
    break   
    default:
        console.log('Opcao invalida');

 }
 //Manipulação de texto
  let texto = "A semana esta devagar";
  console.log(texto.replace("devagar","rapida"))

  // Texto maiusculo
  let texto1 ="tem mulher que nao depende de homem"
  console.log(texto.toUpperCase());
  

  //Definindo numeros decimais
  let numero = 123.45678;
  console.log(numero.toFixed(3));

  let numero1 = 123.8545
  console,log(numero1.toFixed(3))

  //Caixa de alerta
  //alert ("Hello world");
  

  //Caixa de confirmacao
    let teste = confirm("Voce ´um aluno");
    document.write (" <br> ")
    document.write ("Resultado <br>" , teste);

    //Caixa de texto
    let texto2 = prompt(" Digite seu nome:");
    document.write (`Seu nome é ${texto2}`)
    

