// requisição ajax que retorna todos os projetos cadastrados no banco de dados
let ajax = new XMLHttpRequest();
ajax.open('GET', '/projects', true);
ajax.onreadystatechange = () =>{
    if(ajax.status === 200 && ajax.readyState === 4){
        let response = JSON.parse(ajax.responseText);
        console.log(response);
        for(let i = 0; i < response.length; i++){
            $('#tableProjects').append(
                `<tr>
                    <td>${response[i].ProjetoID}</td>
                    <td>${response[i].NomeProjeto}</td>
                    <td>${response[i].PrincipalResponsavel}</td>
                    <td>${response[i].Estado}</td>
                    <td><a href="/alterarprojeto?id=${response[i].ProjetoID}"><i class="fa-solid fa-file-pen"></i></a></td>
                </tr>`
            );
        }
    }
}

ajax.send();


// requisição ajax que retorna todos os funcionários cadastrados no banco de dados
let ajax2 = new XMLHttpRequest();
ajax2.open('GET', '/employees', true);
ajax2.onreadystatechange = () =>{
    if(ajax2.status === 200 && ajax2.readyState === 4){
        let response = JSON.parse(ajax2.response);
        console.log(response);
        for(let i = 0; i < response.length; i++){
            $('#tableEmployees').append(
            `<tr>
                <td>${response[i].Registro}</td>
                <td>${response[i].Nome}</td>
                <td>${response[i].Titulo}</td>
                <td>${response[i].HorasProjetos}</td>
                <td>${response[i].Estado}</td>
                <td>
                  <span >13</span>
                </td>
                <td><a href="/alterarfuncionario?id=${response[i].FuncionarioID}"><i class="fa-solid fa-user-pen"></i></a></td>
             </tr>`
            );
        }
    }
}
ajax2.send();