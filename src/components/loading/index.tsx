import * as React from 'react';
import './style.css';

export default class Loading extends React.Component {
  render() {
    return (
      // LoadingWall deixa a tela opaca e bloqueia que o usuário interaja enquanto carrega
      <div id='loadingSpinner' className='loadingWall' data-requests='0'>
        // Carrega circulo do loading
        <div className='loadingCircle' />
      </div>);
  }
}

export const loadingOn = () => {
  
  const el = (document.querySelector('#loadingSpinner')) as any;
  
  if (el === null) {
    // Se for null dar retorno para não travar o usuário
    return;
  }

  // Quando habilitar o loading altera o css mudando o display para block
  el.style.display = 'block';
  el.setAttribute('data-requests', Number(el.getAttribute('data-requests')) + 1);
};

export const loadingOff = () => {
  const el = (document.querySelector('#loadingSpinner')) as any;
  if (el === null) {
    return;
  }

  // Se o número for maior que zero significa que tem um request.
  if (Number(el.getAttribute('data-requests')) > 0) {
    el.setAttribute('data-requests', Number(el.getAttribute('data-requests')) - 1);
  }

  // Se o número for igual a 0 não haverá request, então tira o block do display
  if (Number(el.getAttribute('data-requests')) === 0) {
    el.style.display = 'none';
    return;
  }

};