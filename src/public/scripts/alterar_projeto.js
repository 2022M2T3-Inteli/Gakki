let xmlh = new XMLHttpRequest();


xmlh.open('GET', '/alocation', true); 
xmlh.onreadystatechange = () => {
    if(xmlh.status === 200 && xmlh.readyState === 4) {
        let response = JSON.parse(xmlh.responseText); 
        for(let i = 0; i < response.length; i++) {
            $('#no_status').append(`
                <div class="todo" draggable="true">
                <button id="add_btn" data-target-modal="#todo_form" value="${response[i].ProjetoID}">${response[i].ProjetoID} ${response[i].ProjetoID}</button>
                <input id="idfunc" name="idfunc" type="hidden" value="${response[i].AlocacaoID}" > 
                </div>
            `);
        }
    }
}

xmlh.open('GET', '/employees', true);
xmlh.onreadystatechange = () =>{
    if(xmlh.status === 200 && xmlh.readyState === 4){
        let response = JSON.parse(xmlh.responseText);
        for(let i = 0; i < response.length; i++){
            $('#funcdisponiveis').append(`
                <div class="todo" draggable="true">
                <button id="add_btn" data-target-modal="#todo_form" value="${response[i].Nome}">${response[i].Nome} ${response[i].Sobrenome}</button>
                <input id="idfunc" name="idfunc" type="hidden" value="${response[i].FuncionarioID}" > 
                </div>`);
            }
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
    
        if (this == document.querySelector("#no_status")) {
            showAttribute(document.querySelector("#idfunc").value);
        } else {

        }
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
    }
}

xmlh.send();

if(localStorage.getItem('message')){
    if(localStorage.getItem('message') == 'updated project'){
        toastShow();
        localStorage.removeItem('message');
    }
}

function addToastUpdate(){
    localStorage.setItem('message', 'updated project');
}

function toastShow(){
    swal("Projeto atualizado com sucesso!", '', "success", {
        dangerMode: true,
    });
}


function showAttribute (id){
    swal({
        title: `Deseja atribuir este funcionário a este projeto?`,
        icon: "info",
        buttons: [
            'Cancelar', 'Atribuir'
        ],
        dangerMode: false,
      })
      .then((willAtt) => {
        if (willAtt) {
            let url = '/alocation';
            const urlid = new URLSearchParams(window.location.search); 
            let projid = urlid.get('id');
            $.ajax({
                type: 'POST',
                url: url,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify({
                    'funcionario': id,
                    'projeto' : projid
                })
            })
          swal("Funcionário atribuido com sucesso", {
            icon: "success",
            dangerMode: false
          }).then((ok) =>{
            if(ok){
                location.reload();
            }
          })
         }
      });
}
