const section= document.querySelector(".proyects");

const request= new XMLHttpRequest();
const requestURL= "./resources/proyects-list.json";

request.open('GET', requestURL);

request.responseType= 'json';
request.send();

request.onload= function(){
    const proyects= request.response;
    showProyects(proyects);
}

function showProyects(jsonObj){
    const proyect= jsonObj['proyects'];

    for (var i= proyect.length-1; i => 0; i--){
        const myDiv= document.createElement('div');
        const myPara= document.createElement('p');
        const myLink= document.createElement('a');
        const myImage= document.createElement('img');

        myPara.textContent= proyect[i].name;
        myLink.href= proyect[i].link;
        myImage.src= proyect[i].image;
        myImage.alt= proyect[i].alt;
        
        myLink.appendChild(myImage);
        myDiv.appendChild(myPara);
        myDiv.appendChild(myLink);

        myDiv.classList.add('proyects__element');
        section.appendChild(myDiv);
    }
}
