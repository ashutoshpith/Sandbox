let getText = document.getElementById('getText');
getText.addEventListener('click',getTextContent);

function getTextContent() {
  fetch('data.txt')
  .then(function (res) {
    console.log(res.text());
    
    
  })
  
  
}
