function addPizza () {
    const ul = document.getElementById('pizza');
    const input = document.getElementById('meu-input');
    const criandoElemento = document.createElement('li');
    criandoElemento.innerHTML = (input.value);
    ul.append(criandoElemento);

};

function removerPizza() {
    const list = document.getElementById("pizza");
    list.removeChild(list.lastElementChild);
  }