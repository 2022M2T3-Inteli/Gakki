// let btnCreateGovernance = document.getElementById('createGov');

// btnCreateGovernance.addEventListener('click', () =>{
//     var country = document.getElementById("govpais").value;
//     var state = document.getElementById("govest").value;
//     var place = document.getElementById("govend").value;
    
//     if(country && state && place){
//         var url = "/governance";
//         $.ajax({
//             type: "POST",
//             url: url,
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             data: JSON.stringify(
//                 {
//                     "Pais": country,
//                     "Estado": state,
//                     "Endereco": place
//                 }
//             )
//         });
//         alert('Governança cadastrada com sucesso!');
//     }
// });