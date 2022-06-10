let ajax = new XMLHttpRequest();
ajax.open('GET', '/role', true);

ajax.onreadystatechange = () =>{
    if(ajax.status === 200 && ajax.readyState === 4){
        let response = JSON.parse(ajax.responseText);
        console.log(response);
        for(let i = 0; i < response.length; i++){
            $('#funcaoID').append(`
            <option value="${response[i].FuncaoID}">${response[i].Titulo}</option>
            `);
        }
    }
}
ajax.send();


let funcajax = new XMLHttpRequest();
funcajax.open('GET', '/governance', true);
funcajax.onreadystatechange = () =>{
    if(funcajax.status === 200 && funcajax.readyState === 4){
        let response = JSON.parse(funcajax.responseText);
        console.log(response);
        for(let i = 0; i < response.length; i++){
            $('.governanca').append(`
            <option value="${response[i].GovernancaID}">${response[i].Estado}</option>
            `);
        }
    }
}
funcajax.send();



// let btnCreateEmployee = document.getElementById('createEmployee');

// btnCreateEmployee.addEventListener('click', () =>{

//         var firstName = document.getElementById("nome").value;
//         var lastName = document.getElementById("sobrenome").value;
//         var funcYamaha = document.getElementsByName("btnradio")[0].value;
//         var register = document.getElementsByName("registro")[0].value;
//         var governance = document.getElementsByName("governanca")[0].value;
//         var company = document.getElementsByName("empresa")[0].value;
//         var durationContract = document.getElementsByName("duracaocontrato").value;
//         var hoursProject = document.getElementById("jornadaTrabalho").value;
//         var role = document.getElementById("funcaoID").value;

//     if(firstName && lastName && funcYamaha && hoursProject && role){
//         var url = "/employees";
//         $.ajax({
//             type: "POST",
//             url: url,
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             data: JSON.stringify(
//                 {
//                     "nome": firstName,
//                     "sobrenome": lastName,
//                     "funcYamaha": funcYamaha,
//                     "registro": register,
//                     "governanca": governance,
//                     "empresa": company,
//                     "duracaocontrato": durationContract,
//                     "horasProjetos": hoursProject,
//                     "funcaoID": role
//                 }
//             )
//         });
//         alert('Funcionário cadastrado com sucesso!');
//     } else {
//         alert('Por favor preencha todos os campos!');
//     }
// });