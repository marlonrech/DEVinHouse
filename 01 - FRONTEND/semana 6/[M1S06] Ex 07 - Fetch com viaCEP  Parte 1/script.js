let meuCEP, btn;

btn = document.querySelector("#btnEnviaCep");
btn.addEventListener("click", recebeInfoDeCep);

function recebeInfoDeCep() {
    meuCEP = document.querySelector("#enviaCep").value;
  
    const options = {
      method: "GET",
    };
    fetch(`https://viacep.com.br/ws/${meuCEP}/json/`, options)
      .then((response) => {
        return response.json();
      })
      .then((infoDoCEP) => {
        console.log(infoDoCEP);
        let divInfo = document.querySelector("#mostraInfoCep");
        divInfo.innerHTML = `Seu bairro é: ${infoDoCEP.bairro} <br>`;
        divInfo.innerHTML += `Sua rua é: ${infoDoCEP.logradouro} <br>`;
        divInfo.innerHTML += `Sua cidade é: ${infoDoCEP.localidade} <br>`;
        divInfo.innerHTML += `Seu estado é: ${infoDoCEP.uf} <br>`;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  