const button = document.getElementById('button')

button.addEventListener('click', () =>{

   const navBar = document.querySelector('.navBar')
   navBar.classList.toggle('active')
})

const form = document.getElementById("form")
form.addEventListener('submit', (e) =>{
   e.preventDefault()

   const nome = document.getElementById('nome').value
   const email = document.getElementById('email').value
   const tel = document.getElementById('tel').value
   const mensagem = document.getElementById('mensagem').value

   if(nome == '' || email == '' || tel == "" || mensagem == ''){
      alert('preencha todos os campos');
      return;
   }
   const dadosMensagem = {
      nome: nome,
      email: email,
      tel: Number(tel),
      mensagem: mensagem
   }
   console.log(dadosMensagem)
   
})