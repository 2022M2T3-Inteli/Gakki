// Lógica que mostra o alerta projeto cadastrado com sucesso
if(localStorage.getItem('message')){
    if(localStorage.getItem('message') == 'created project'){
        toastShow();
        localStorage.removeItem('message');
    }
};

// requisição ajax que retorna todas as governanças cadastradas no banco de dados
let ajax = new XMLHttpRequest();
ajax.open('GET', '/governance', true);
ajax.onreadystatechange = () =>{
    if(ajax.status === 200 && ajax.readyState === 4){
        let response = JSON.parse(ajax.responseText);
        console.log(response);
        for(let i = 0; i < response.length; i++){
            $('#governanca').append(`
            <option value="${response[i].GovernancaID}">${response[i].Estado}</option>
            `);
        }
    }
}
// Envia requisição
ajax.send();

// Lógica que mostra o alerta projeto cadastrado com sucesso
function addToast(){
    localStorage.setItem('message', 'created project')
}

function toastShow(){
    swal("Projeto cadastrado com sucesso!", '', "success", {
        dangerMode: true,
    });
}