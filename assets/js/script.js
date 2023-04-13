"use strict";

let form=document.querySelector('form');
let inp=document.querySelector('inp');

form.addEventListener('submit', async (e)=>{
    try{
        e.preventDefault();

        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?id=587116&appid=b130f3447f9f6bae98d0c4ac163566ec`);
        const value=await response.json();
        console.log(value);

    //     let table = `<tr>
    //    <th scope="col">#</th>
    //    <th scope="col">name</th>
    //    </tr>`;

    //    for(let i=0;i<XPathResult.length;i++){
    //       table+=`<tr>
    //       <th scope="row">${value}</th>
    //       <td>${value}</td>
    //       </tr>`;
    //    }
    }
    catch(error){
        console.log(error);
    }
})