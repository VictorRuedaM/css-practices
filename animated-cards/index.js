

let date = new Date().toDateString()

for(let i = 1; i < 5; i++){
  document.getElementById(`date${i}`).textContent = date
}
