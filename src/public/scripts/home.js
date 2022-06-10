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
                </tr>`
            );
        }
    }
}

ajax.send();


// let ajax2 = new XMLHttpRequest();
// ajax2.open('GET', '/projects', true);

// ajax2.onreadystatechange = () =>{
//     if(ajax2.status === 200 && ajax2.readyState === 4){
//         let response = JSON.parse(ajax2.responseText);
//         for(let i = 0; i < response.length; i++){
//           let month = parseInt(response[i].DataInicial.slice(5, 7));
//           console.log(month);
//         }
//     }
// }

// ajax2.send();