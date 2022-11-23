$(document).ready(function () {
  let todos = new Array();

  //função construtora do objeto personagem
  function Personagem(Avatar, Tipo, Nome, Poder) {
    this.Avatar = Avatar;
    this.Tipo = Tipo;
    this.Nome = Nome;
    this.Forca = new Number(Poder);
  }

  //inserindo personagens no array

  //Jedi
  todos.push(new Personagem('https://i.pinimg.com/564x/1d/25/12/1d251259f4fbad4c7496bc014927dfc1.jpg', 'Jedi', 'Obi-Wan Kenobi', 10));
  todos.push(new Personagem('https://i.pinimg.com/originals/40/d6/1d/40d61dde8f4aced9ecd96269b5050ebe.jpg', 'Jedi', 'Luke Skywalker', 12));
  todos.push(new Personagem('https://p.kindpng.com/picc/s/114-1149740_transparent-yoda-star-wars-chibi-yoda-hd-png.png', 'Jedi', 'Yoda', 15));
  //Sith
  todos.push(new Personagem('https://i.pinimg.com/originals/29/42/2b/29422b7b1a423f962c8be2c6a25468ec.png', 'Sith', 'Darth Maul', 10));
  todos.push(new Personagem('https://i.pinimg.com/originals/1a/b4/79/1ab4794b69547c4c43a328d29d78b7ac.jpg', 'Sith', 'Darth Vader', 12));
  todos.push(new Personagem('https://i.pinimg.com/736x/dc/cf/8d/dccf8d4d81dd197584afda7d0b61a780.jpg', 'Sith', 'Darth Sidious', 15));


  for(let i = 0; i < todos.length; i++) {
    if(todos[i].Tipo == 'Jedi') {
      $('<option>' + todos[i].Nome + '</option>').appendTo("#selectJedi").attr('value', i);
    } else {
      $('<option>' + todos[i].Nome + '</option>').appendTo("#selectSith").attr('value', i);
    }
  }

  //Função para salacionar personagem
  function Lutar() {
    let jOption = $('#selectJedi option:selected').val();
    let sOption = $('#selectSith option:selected').val();

    $('#resultadoVitoria').html('').css({'font-size': '16px'});

    if(jOption == '' || sOption == '') {
      alert("Por favor, selecione um personagem Jedi e um Sith");
    } else {
      let j = todos[$('#selectJedi :selected').attr('value')];
      let s = todos[$('#selectSith :selected').attr('value')];
      let jediForce = Math.floor(Math.random() * j.Forca + 1);
      let sithForce = Math.floor(Math.random() * s.Forca + 1);

      $('<img />', {src: j.Avatar, alt: j.Nome}).appendTo('#avatarJedi');
      $('<img />', {src: s.Avatar, alt: s.Nome}).appendTo('#avatarSith');
      $('#dadosJedi').html('Tipo: ' + j.Tipo + '<br />Nome: ' + j.Nome + '<br />Poder: ' + jediForce);
      $('#dadosSith').html('Tipo: ' + s.Tipo + '<br />Nome: ' + s.Nome + '<br />Poder: ' + sithForce);

      $('#lutar').attr('disabled', true);
      $('#reiniciar').attr('disabled', false);

      //Verificando vencedor
      if(jediForce > sithForce) {
        $('#resultadoVitoria').html('O Jedi ' + j.Nome + ' Venceu').animate({'fontSize':'36px'});
      } else if (sithForce > jediForce) {
        $('#resultadoVitoria').html('O Sith ' + s.Nome + ' Venceu').animate({'fontSize':'36px'});
      } else {
        $('#resultadoVitoria').html('Não houve vencedor').animate({'fontSize':'36px'});
      }
    }
  }

  function ReiniciarBatalha() {
    $('.box__personagens__imagem img').remove();
    $('#resultadoVitoria').html('');
    $('#dadosJedi').html("");
    $('#dadosSith').html("");
    $('#reiniciar').attr('disabled', true);
    $('#lutar').attr('disabled', false);
  }

  $('#lutar').click(Lutar);
  $('#reiniciar').click(ReiniciarBatalha);

});