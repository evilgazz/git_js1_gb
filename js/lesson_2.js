"use strict"

var date = new Date()
var year = date.getFullYear()


/*if (year % 4 == 0) {
	console.log("Високосный")
} else {
	console.log("Обычный")
}*/


var day = date.getDate()

if(day > 0 && day < 6){

	console.log("#1 " + "Будний день")
} else if(day == 0 || day == 6) {
	console.log("Выъодной")
} else {
	console.log("Некоректный день")
}


var x = 10
if( x >= 10) {
		if(x > 11) {
			x *= 2
			x += 5
		} else {
			x++
			if(5 == "5"){
		} if(0) {
			x++
		} if(10) {
			x *= 2
		}
		x--
	}
} 
console.log("#2 " + x + " = x это ответ из уравнени") // 


var a = 15; var b = 25; var c = 30
console.log(
	"#3 " + Math.max(a, b, c) 
	+ " - Максимальное значение"
)


console.log(
	"#4 " + Math.round(a, b, c) 
	+ " - Округление значений"
)


var x = 12.345476
console.log(
	"#5 " + "x = " + x.toFixed(5) + "  " + x.toFixed(2) 
	+ " - Округление значения"
)


var max, min
var math_2 = Math.random() * ( 10 - 1 ) + 1 // от 0 до 9
		 //= Math.random() * (max - min) + max

console.log(
	"#6 " + math_2, (math_2.toFixed(4))  
	+ " - Округление после запятой" 
)
