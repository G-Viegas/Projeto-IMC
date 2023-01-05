import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC,notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeigth = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeigth.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeigth.value
  const height = inputHeight.value

  const weightOrHeightIsNotAnumber = notANumber(weight) || notANumber(height)
  
  if(weightOrHeightIsNotAnumber){
    AlertError.open()
    return;
  }
  
  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResult(result)

}

function displayResult(result){
  const message = `O seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

