const carrosel = document.querySelector('.carrosel');
  const imagens = document.querySelectorAll('.carrosel img');
  const btnAnterior = document.querySelector('.botao-anterior');
  const btnPosterior = document.querySelector('.botao-posterior');
  const bolinhasCarrosel = document.querySelector('.bolinhas-carrosel');
  let index = 0;

  imagens.forEach((_, i) => {
    const pontinho = document.createElement('div');
    pontinho.classList.add('bolinhas');
    if (i === 0) pontinho.classList.add('ativo');
    pontinho.addEventListener('click', () => {
      index = i;
      atualizarCarrosel();
    });
    bolinhasCarrosel.appendChild(pontinho);
  });

  
  function atualizarCarrosel(){
    const bolinhas = document.querySelectorAll('.bolinhas');
    carrosel.style.transform = `translateX(${-index * 100}%)`;
    bolinhas.forEach(ind => ind.classList.remove('ativo'));
    bolinhas[index].classList.add('ativo');
  }

  btnAnterior.addEventListener('click', () => {
    index = (index === 0) ? imagens.length - 1 : index -1;
    atualizarCarrosel();
  }); 

  btnPosterior.addEventListener('click', () => {
    index = (index === imagens.length - 1) ? 0 : index +1;
    atualizarCarrosel();
  }); 