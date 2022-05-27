//PEDRO

if (document.title === 'Cadastrar Funcionário')
{
    let botaoSim =  document.getElementById('btnradio1');
    let botaoNao = document.getElementById('btnradio2');

    let tipo1 = document.getElementById('labelTipo1');
    let tipo2 = document.getElementById('labelTipo2');

    let tipoPosicao1 = document.getElementById('tipo1');
    let tipoPosicao2 = document.getElementById('tipo2');

    botaoSim.addEventListener('click', () =>{
        if(botaoSim.checked){

            tipoPosicao1.setAttribute('name', 'registro');
            tipoPosicao2.setAttribute('name', 'governanca');

            tipo1.innerHTML = 'Registro';
            tipo2.innerHTML = 'Área';

            console.log(tipoPosicao1);
            console.log(tipoPosicao2);
        }
    });

    botaoNao.addEventListener('click', () =>{
        if(botaoNao.checked){

            tipoPosicao1.setAttribute('name', 'empresa');
            tipoPosicao2.setAttribute('name', 'duracaocontrato');

            tipo1.innerHTML = 'Empresa';
            tipo2.innerHTML = 'Duração do contrato';

            console.log(tipoPosicao1);
            console.log(tipoPosicao2);
        }
    });
}
// SERGJAO

    // Adicionar classe "Selecionado" na div atual

    let list = document.querySelectorAll('.navbar li');

    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('hovered'));
        this.classList.add('hovered')
    }
    list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

    // Esconder o menu da navbar

    let toggle = document.querySelector('.toggle');
    let navbar = document.querySelector('.navbar');
    let main = document.querySelector('.main');

    toggle.onclick = function(){
        navbar.classList.toggle('active');
        main.classList.toggle('active');
    }

    // Desabilitar a Data

    function disable() {
        if (document.getElementById('ignorainicial').checked == true) {
            document.getElementById('inicial').disabled = true
        }
        else {
            document.getElementById('inicial').disabled = false
        }
        if (document.getElementById('ignorafinal').checked == true) {
            document.getElementById('final').disabled = true
        }
        else {
            document.getElementById('final').disabled = false
        }
    }