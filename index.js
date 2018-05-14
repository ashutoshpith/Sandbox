let getText = document.getElementById('getText');
getText.addEventListener('click',getTextContent);


let getColor = document.getElementById('getColor');
getColor.addEventListener('click',getColorD);



function getTextContent() {
  // fetch('data.txt')
  // .then(function (res) {
  //   return res.text();
     
  // })
  // .then(function(data){
  //   console.log(data);
    
  // });
  

  fetch('data.txt')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('output').innerHTML=data;
  
  })

}

function getColorD() {
   fetch('color.json')
   .then((res) => res.json())
   .then((data) =>{
   let ouptutColor='<h2>Color : </h2>';
   data.forEach(function(user) {
     ouptutColor +=`
     <ul>
     <li>color: ${user.color}</li>
     <li>Type: ${user.type}</li>
     </ul>
     `;
   });
document.getElementById('outputColor').innerHTML=ouptutColor;
   })
  
}
