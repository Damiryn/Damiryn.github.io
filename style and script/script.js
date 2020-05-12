/* console.log ("Hello")
document.write("Bye")

let func = function(str, name) {
return str + "_" + name
}
function calc (a){
	return a*2;
}

if (calc (2)>10) {
	console.log ("Right");
}
else {
	console.log ("Miss");
}
function result (){
	let x = prompt ("Number?!");
	if (calc (x)>10) {
		console.log ("Ne smotrel krepkogo oreha");
	}
	else {
		console.log ("Miss");
	}
} */
let def = 0;
let isDec = false;

function inc(num) {
	num = num + 1;
	console.log (num);
	def = num;
}
function dec(num) {
	num = num - 1;
	console.log (num);
	def = num;
}

function check (num) {
	if (isDec){
			if (num !== 0) {
					inc (num);
			} 
			else {
					isDec = true;
					dec (num);
			}
	}
	else{
			if (num < 10){
				inc (num);
			}
			else if (num >= 10){
					dec (num);
			}
			else {
				isDec = false;
				dec (num);
			}
	}
}