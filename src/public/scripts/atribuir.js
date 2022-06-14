let ajax = new XMLHttpRequest();
ajax.open('GET', '/employees', true);
ajax.onreadystatechange = () =>{
    let response = JSON.parse(ajax.responseText);
    //let disponible = document.getElementById('disponiveis');
    for(let i = 0; i < response.length; i++){
        $('#disponiveis').append(`
            <div class="todo" draggable="true">
            <button id="add_btn" data-target-modal="#todo_form" value="${response[i].Nome}" >${response[i].Nome} ${response[i].Sobrenome}</button>
            <span class="close">&times;</span>
            </div>
    `);
    }
}

ajax.send();