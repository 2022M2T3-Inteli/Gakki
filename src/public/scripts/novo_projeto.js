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
ajax.send();