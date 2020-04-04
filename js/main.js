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


//УРОК 2 // ЗАДАНИЕ 1

let alert_button_a = document.querySelector(".alert_button_a")
alert_button_a.onclick = () => {
	alert(a)
}

let alert_button_b = document.querySelector(".alert_button_b")
alert_button_b.onclick = () => {
	alert(b)
}


var a = 1
var b = 1


let button = document.querySelector("#b1")
button.onclick = () => {

	a = 1
	let c = ++a

	button.append(" = " + c)
	button.disabled = true
	answerInfo(c, "c = ")
	//console.log(button.textContent, c)
}

let button2 = document.querySelector("#b2")
button2.onclick = () => {

	b = 2
	let d = b++

	button2.append(" = " + d)
	button2.disabled = true
	answerInfo(d, "d = ")
}

let button3 = document.querySelector("#b3")	
button3.onclick = () => {

	a = 1
	let c = (2+ ++a)

	button3.append(" = " + c)
	button3.disabled = true
	answerInfo(c, "c = ")
}

let button4 = document.querySelector("#b4")
button4.onclick = () => {

	b = 1
	let d = (2+ b++)

	button4.append(" = " + d)
	button4.disabled = true
	answerInfo(d, "d = ")
}

function answerInfo(answer, info) {
	let answerInfo = document.querySelector("#answer span")
	answerInfo.textContent = "Ответ: "
	answerInfo.append(info + answer)
}

resetValues.onclick = () => {
	let button = document.querySelectorAll(".buttons_block button")
	
	// console.log(button)
	// console.log(button.values())

	for (let i = 0; i < button.length; i++) {
		button[i].disabled = false

		let returnDefaulValue = button[i].innerText
		
		button[i].textContent = returnDefaulValue
	} 

	let b1 = document.querySelector("#b1")
	b1.textContent = "c = ++a"

	let b2 = document.querySelector("#b2")
	b2.textContent = "d = b++"

	let b3 = document.querySelector("#b3")
	b3.textContent = "c = (2+ ++a)"

	let b4 = document.querySelector("#b4")
	b4.textContent = "d = (2+ b++)"


	let answer  = document.querySelector("#answer")
	//почему после очистки контента пропадает answerInfo()?
	// --> answer.textContent = " "
}