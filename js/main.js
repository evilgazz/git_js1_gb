"use strict"


let celsiusInput = document.getElementById("celsiusInput")
let buttonPharyngate = document.getElementById("buttonPharyngate")
let outCelsius = document.querySelector(".main__homework__out")


buttonPharyngate.onclick = () => {

		if (celsiusInput.value !== "") {

			outCelsius.textContent = ""
			
			let pharyngateTemperature = (9 / 5) * +celsiusInput.value.replace(/,/, '.') + 32
			
			//через prepend
			outCelsius.prepend("фаренгейт: " + pharyngateTemperature.toFixed(2))
			
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

//console.log(admin)