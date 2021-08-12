"use strict";

const limparFormulario = () => {
  document.getElementById("endereco").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

const preencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

const isNumber = (cep) => /^[0-9]+$/.test(cep);

const cepValido = (cep) => cep.length === 8 && isNumber(cep);

const pesquisarCep = async () => {
  limparFormulario();
  const cep = document.getElementById("cep").value.replace(/[^\d]+/g, '');
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("endereco").value = "CEP NÃO ENCONTRADO.";
    } else {
      preencherFormulario(endereco);
      console.log(endereco);
    }
  } else {
    document.getElementById("endereco").value = "CEP NÃO ENCONTRADO.";
  }
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);



// 'use strict';

// const pesquisarCep = () => {
//   const cep = document.getElementById('cep').value;
//   const url = `http://viacep.com.br/ws/${cep}/json/`;
//   fetch(url).then(res => res.json()).then(console.log());

//   console.log(url);
// }

// document.getElementById('cep')
// .addEventListener('focusout', pesquisarCep);
