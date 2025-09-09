let nome = prompt("Digite seu nome:").toLocaleLowerCase()
let idade = prompt("Digite sua idade:")
 
if(nome === "admim"){
    alert("Bem-vindo, Admim! Acesso total liberado.")
}else if(nome === "moderador" && idade >=16){
    alert("Olá, Moderador! Acesso liberado para a àrea de moderação.")
}else if(idade >=18){
    alert(`Olá,${nome}! Você tem acesso completo. Boas-vindas à plataforma!  `)
}else if(idade >=13 && idade <=17){
    alert("Acesso negado. Você pode participar do nosso programa Jovem Aprendiz!")
}else{
    alert("Acesso negado. O conteúdo é exclusivo para maiores de 18 anos")
}


