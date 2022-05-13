// Selecionando os botões sim e não da página e armazenando eles em variáveis
let botaoSim = document.getElementById('btnradio1');
let botaoNao = document.getElementById('btnradio2');

// Selecionando as labels Registro e Governança da página e armazenando elas em variáveis
let tipo1 = document.getElementById('labelTipo1');
let tipo2 = document.getElementById('labelTipo2');

// Selecionando dois inputs da página e armazenando eles em variáveis
let tipoPosicao1 = document.getElementById('tipo1');
let tipoPosicao2 = document.getElementById('tipo2');

// Adicionando um evento click no botão sim, caso ele seja selecionado, as informações que serão armazenadas no banco de dados serão o registro e governança do funcionário
botaoSim.addEventListener('click', () =>{
    if(botaoSim.checked){

        tipoPosicao1.setAttribute('name', 'registro');
        tipoPosicao2.setAttribute('name', 'governanca');

        tipo1.innerHTML = 'Registro';
        tipo2.innerHTML = 'Governança';
    }
});

// Adicionando um evento click no botão não, caso ele seja selecionado, as informações que serão armazenadas no banco de dados serão a empresa e duração do contrato do funcionário
botaoNao.addEventListener('click', () =>{
    if(botaoNao.checked){

        tipoPosicao1.setAttribute('name', 'empresa');
        tipoPosicao2.setAttribute('name', 'duracaocontrato');

        tipo1.innerHTML = 'Empresa';
        tipo2.innerHTML = 'Duração do contrato';
    }
});
