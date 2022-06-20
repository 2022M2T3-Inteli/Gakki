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