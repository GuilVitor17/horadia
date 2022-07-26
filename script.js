function carregar(){
  var msg = document.getElementById ("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var dia = data.getDate()
  var mes = data.getMonth()
  var ano = data.getFullYear()

  mes++

 

  msg.innerHTML =(` ${hora}-H -- ${dia}/ ${mes}/ ${ano}`);

  if(hora >= 0 && hora < 12){
    //Bom dia
    img.src="style/bomdia.png"
  } else if( hora >= 12 && hora <= 18){
    // Bom tarde
    img.src="style/boatarde.webp"
  } else {
    //Boa noite
    img.src="style/boanoite.webp"
  }
}