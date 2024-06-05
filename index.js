const track = document.getElementById('track')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=> {
  let messeges = []

  if (track.value != 930221989746){
    messeges.push('Invalid ID')
  }
  
  if (messeges.length > 0){
    e.preventDefault()
    errorElement.innerText = messeges.join(',')
  }
})