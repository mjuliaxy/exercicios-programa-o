//Questão 1
function M() {
    let x
    x = Number(prompt("Informe uma nota de 0 a 10"));
    
    while (x > 10 || x < 0) {
        alert("Valor Inválido");
        x = Number(prompt("Informe uma nota de 0 a 10"))
     } 
    
    if (x >= 0 || x <= 10){
        alert("Ok!")
    }
}

//Questão 2
function A() {
    let nome, senha;
    nome = prompt("Digite um nome de usuário")
    senha = prompt("Digite a senha")

    while (nome == senha) {
        alert('A senha não pode ser igual ao nome de usuario.')
        nome = prompt("Digite um nome de usuário")
        senha = prompt("Digite a senha")
    } alert("Ok!") 

}

//Questão 3
function R() {
    let nome, idade, salario, sexo, civil;
    nome = prompt("Qual o seu nome?") 
    
    while (nome.length <= 3) {
        alert("O nome deve conter mais de 3 caracteres") 
        nome = prompt("Qual o seu nome?") 
   } 

    idade = prompt('Olá, ' + nome + "! Qual sua idade?")
   
    while (idade >= 150 || 0 >= idade) {
        alert('Idade Invalida')
        idade = prompt('Olá, ' + nome + "! Qual sua idade?")
    } 

    salario = prompt('Quanto você recebe?')
    
    while (salario <= 0 ){
        alert("Valor inválido")
        salario = Number(prompt('Quanto você recebe?'))
    } 
    
    sexo = prompt("Qual o seu sexo? (F-Feminino ou M-Masculino)")
    
    while (sexo !== "F" && sexo !== "f" && sexo !== "m" && sexo !== "M" ){
        alert("Sexo Inválido")
        sexo = prompt("Qual o seu sexo? (F-Feminino ou M-Masculino")
    } 

    civil = prompt(nome + ", qual seu estado civil? (Solteiro=S; Casado=C; Viuvo=V ou Divorciado=D)") 

    while (civil !== "S" && civil !== "s" && civil !== "C" && civil !== "c" && civil !== "V" && civil !== "v" && civil !== "D" && civil !== "d"){
        
        alert("Estado civil inválido.")
        civil = prompt(nome + ", qual seu estado civil? (Solteiro=S; Casado=C; Viuvo=V ou Divorciado=D")

    } alert("Ok!")
}

//Questão 4
function I(){
   alert("Números de 1 a 20")
   for (let x = 1; x <= 20; x++){
    document.write(x)
    document.write('<br>')
}  for (let x = 1; x <= 20; x++){
    document.write(x) 
    document.write('<style> body{ background-color:#ffcc8e; </style>')
}
}

//Questão 5
function Aa(){
    let n1, n2, n3, n4, n5, m
    n1 = Number(prompt("Digite um número"))
    n2 = Number(prompt("Digite outro número"))
    n3 = Number(prompt("Digite mais um número"))
    n4 = Number(prompt("Digite outro número"))
    n5 = Number(prompt("Digite só mais um número"))
    m = Math.max(n1, n2, n3, n4, n5)

    alert('O maior número é ' + m)
}

//Questão 6
function J(){
    let a, b, c, d, e, s, m
    a = Number(prompt("Digite um número"))
    b = Number(prompt("Digite outro número"))
    c = Number(prompt("Digite mais um número"))
    d = Number(prompt("Digite outro número"))
    e  = Number(prompt("Digite só mais um número"))
   s = a + b + c + d + e
   m = (a + b + c + d + e) / 5

   alert("A soma desses números é " + s + " e a média é " + m)
}

//Questão 7
function U(){
    
    alert("Números ímpares entre 1 e 50;")
    for (let x = 1; x <= 50; x = x + 2){
        document.write(x)
        document.write('<br>')
        document.write('<style> body{ background-color:#ffcc8e; </style>')
    }
}

//Questão 8
function L(){
alert("vamos calcular a média de idades de uma turma de 7 pessoas")
let a = Number (prompt("Digite a idade da pessoa 1"))
let b = Number (prompt("Digite a idade da pessoa 2"))
let c = Number (prompt("Digite a idade da pessoa 3"))
let d = Number (prompt("Digite a idade da pessoa 4"))
let e = Number (prompt("Digite a idade da pessoa 5"))
let f = Number (prompt("Digite a idade da pessoa 6"))
let g = Number (prompt("Digite a idade da pessoa 7"))
media = (a + b + c + d+ e + f +g)/7
while (media > 0 && media <= 25) { 
alert("A média de idades dessa turma é " + media + ", logo, essa turma é jovem")
break
}
while (media > 25 && media <= 60) {
alert("A média de idades dessa turma é " + media + " , logo, essa turma é adulta")
 break
}
while (media > 60){
alert("A média de idades dessa turma é " + media +", logo, essa turma é idosa") 
break
}
}

//Questão 9
function Ii(){
var valor, x, total
alert ("Bem vindo à loja do Sr. Manoel Joaquim, tudo é 1,99")
valor = Number (1.99)
alert("Essa é nossa tabela de preços:")
x = 1
alert("1 item = 1.99")
while (x < 50) {
x = x + 1;
alert( x + " itens = " + x*valor)
}
}

//Questão 10
function a(){
    var valor, x, total
    alert ("Bem vindo à Panificadora Pão de Ontem")
    valor = Number (0.18)
    alert("Essa é nossa tabela de preços:")
    x = 1
    alert("1 pão = R$0.18")
    while (x < 50) {
    x = x + 1;
    alert( x + " pães = " + x*valor)
    }
}

//Questão 11
function MAR(){
    var x = prompt("Você deseja ver qual tabuada?")
  
    while (x > 0) {
      alert(x + " x 1 = " + x * 1)
      alert(x + " x 2 = " + x * 2)
      alert(x + " x 3 = " + x * 3)
      alert(x + " x 4 = " + x * 4)
      alert(x + " x 5 = " + x * 5)
      alert(x + " x 6 = " + x * 6)
      alert(x + " x 7 = " + x * 7)
      alert(x + " x 8 = " + x * 8)
      alert(x + " x 9 = " + x * 9)
      alert(x + " x 10 = " + x * 10)
      break
    } 
}

//Questão 12
function TINS(){
    alert("Calculo de potenciação")
    let x = Number(prompt("Informe a base"))
   let y = Number(prompt("Informe o expoente"))
   let z = x**y
   alert("O resultado é " + z)  
}