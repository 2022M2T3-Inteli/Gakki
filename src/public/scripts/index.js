//PEDRO
// se estiver na página que cadastra um novo funcionário
if (document.title === 'Cadastrar Funcionário')
{   
    // seleciona os elementos html
    let botaoSim =  document.getElementById('btnradio1');
    let botaoNao = document.getElementById('btnradio2');

    let tipo1 = document.getElementById('labelTipo1');
    let tipo2 = document.getElementById('labelTipo2');

    let tipoPosicao1 = document.getElementById('tipo1');
    let tipoPosicao2 = document.getElementById('tipo2');

    botaoSim.addEventListener('click', () =>{
        // se o botão sim for selecionado
        if(botaoSim.checked){
            // altera os atributos name para registro e governança
            tipoPosicao1.setAttribute('name', 'registro');
            tipoPosicao2.setAttribute('name', 'governanca');

            // altera o HTML
            tipo1.innerHTML = 'Registro';
            tipo2.innerHTML = 'Governança';

            // remove todas as opções do select
            for(const option of document.querySelectorAll('#tipo2 > option')){
                option.remove();
            }

            // cria uma requisição ajax e atualiza o select com as respostas da requisição
            let ajax2 = new XMLHttpRequest();
            ajax2.open('GET', '/governance', true);
            ajax2.onreadystatechange = () =>{
                if(ajax2.status === 200 && ajax2.readyState === 4){
                    let response = JSON.parse(ajax2.responseText);
                    console.log(response);
                    $('.governanca').append('<option value="Selecione">Selecione</option>')
                    for(let i = 0; i < response.length; i++){
                        $('.governanca').append(`
                        <option value="${response[i].Estado}">${response[i].Estado}</option>
                        `);
                    }
                }
            }
            ajax2.send();
        }
    });

    botaoNao.addEventListener('click', () =>{
        // se botão não for selecionado
        if(botaoNao.checked){
            // altera os atributos name para empresa e duracão de contrato
            tipoPosicao1.setAttribute('name', 'empresa');
            tipoPosicao2.setAttribute('name', 'duracaocontrato');

            // altera o conteúdo do HTML
            tipo1.innerHTML = 'Empresa';
            tipo2.innerHTML = 'Duração do contrato';

            // remove todas as opções do select
            for(const option of document.querySelectorAll('#tipo2 > option')){
                option.remove();
            }

            // adiciona novas opções no select
            $('#tipo2').append(`
            <option value="Selecione">Selecione</option>
            <option value="1">1 ano</option>
            <option value="5">5 anos</option>
            <option value="10">10 anos</option>
            `);   

        }
    })
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

    /* ATRIBUIR FUNCIONÁRIOS*/
    // Drag Tasks

const todos = document.querySelectorAll('.todo'); 
const all_status = document.querySelectorAll('.status');
let draggableTodo = null; 

todos.forEach(
    (todo) => {
        todo.addEventListener('dragstart', dragStart);
        todo.addEventListener('dragend', dragEnd);
    });

function dragStart(){
    draggableTodo = this; 
    setTimeout(() => {
        this.style.display = 'none'; 
    }, 0);
}

function dragEnd(){
    draggableTodo = null; 
    setTimeout(() => {
        this.style.display = 'block'; 
    }, 0);
}

all_status.forEach(status => {
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);
}); 

function dragOver(e){
    e.preventDefault(); 
}

function dragEnter(){
    this.style.border = '1px dashed #ccc';
}

function dragLeave(){
    this.style.border = 'none';
}

function dragDrop(){
    this.style.border = 'none';
    this.appendChild(draggableTodo);
}

// Modal 

const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".modal-btn"); 
const overlay = document.querySelector("#overlay");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.targetModal).classList.add('active');
        overlay.classList.add("active");
    })
});

close_modals.forEach(btn => {
    btn.addEventListener('click', () => {
        //Duas maneiras de remover o Modal.
        document.querySelector(btn.dataset.targetModal).classList.remove('active');
        // btn.closest(".modal").classList.remove("active"); 
        overlay.classList.remove("active"); 
    })
});

window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.classList.remove('active'));
        overlay.classList.remove("active");  
    }
}


