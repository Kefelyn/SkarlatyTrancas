const carrosel = document.querySelector('.carrosel');
  const imagens = document.querySelectorAll('.carrosel img');
  const btnAnterior = document.querySelector('.botao-anterior');
  const btnPosterior = document.querySelector('.botao-posterior');
  let index = 0;


  
  function atualizarCarrosel(){
    carrosel.style.transform = `translateX(${-index * 100}%)`;
  }

  btnAnterior.addEventListener('click', () => {
    index = (index === 0) ? imagens.length - 1 : index -1;
    atualizarCarrosel();
  }); 

  btnPosterior.addEventListener('click', () => {
    index = (index === imagens.length - 1) ? 0 : index +1;
    atualizarCarrosel();
  }); 