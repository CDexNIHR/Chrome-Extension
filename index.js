
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){

  let input = inputEl.value
  myLeads.push(input)
  inputEl.value = ""
  console.log(myLeads)
  renderInputs()

})

inputEl.addEventListener("keypress", function (e) {
  if (e.key === 'Enter'){
  let input = inputEl.value
  myLeads.push(input)
  inputEl.value = ""
  console.log(myLeads)
  renderInputs()
  }
})

function renderInputs() {
  let listItems = ""
  for(let i = 0; i < myLeads.length; i++) {  
    
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>
          ${myLeads[i]}
        </a>
      </li>
    `  
  } 

  ulEl.innerHTML = listItems

}
