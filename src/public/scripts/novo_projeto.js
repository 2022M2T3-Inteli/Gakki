// let btnCreateProject = document.getElementById('createProject');

// btnCreateProject.addEventListener('click', () =>{

//     var name = document.getElementById("nome").value;
//     var description = document.getElementById("descricao").value;
//     var governance = document.getElementById("governanca").value;
//     var responsible = document.getElementById("responsavel").value;
//     var beginDate = document.getElementById("inicial").value;
//     var finalDate = document.getElementById("final").value;

// if(name && description && governance && responsible && beginDate && finalDate){
//     var url = "/projects";
//     $.ajax({
//         type: "POST",
//         url: url,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         data: JSON.stringify(
//             {
//                 "Nome": name,
//                 "Descricao": description,
//                 "PrincipalResponsavel": responsible,
//                 "DataInicial": beginDate,
//                 "DataFinal": finalDate,
//                 "GovernancaID": governance

//             }
//         )
//     });
//     alert('Projeto cadastrado com sucesso!');
// }
// });


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