"use strict"


let pharyngateInput = document.getElementById("celsiusInput")
let buttonPharyngate = document.getElementById("buttonPharyngate")
let outCelsius = document.querySelector(".main__homework__out")


buttonPharyngate.onclick = () => {

		if (pharyngateInput.value !== "") {

			outCelsius.textContent = ""
			
			let celsiusTemperature = (9 / 5) * +pharyngateInput.value + 32
			
			//через prepend
			outCelsius.prepend("цельсия: " + celsiusTemperature)
			
			//через innerHTML
			//outCelsius.innerHTML = "цельсия: " + celsiusTemperature

			//через insertAdjacentElement
			//outCelsius.insertAdjacentElement("afterBegin", "<div></div>")

			pharyngateInput.value = ""
		} else {
			alert("Введите значение")
		}
}


let admin
let name = "Василий"

admin = name

console.log(admin)


