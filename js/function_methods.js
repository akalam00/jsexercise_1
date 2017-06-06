
var text = 'The sum is ';
function addIT(numA, numB){

	var total = numA + numB;
	console.log (text + total);

}
function multiply(numA, numB){
	var total = numA* numB;

	return total;

}
console.log (multiply(29,4));
//addIT(8,8);
//addIT(10,10);

var myClass = "You all are great!";
var azad = {
	arms :2,
	bigNose: true,
	hairColor: 'brown',
	slogan: function(what){
		console.log(what+ 'is awesome');

	}
}
azad.slogan('You all');
azad.hairColor = 'black';
console.log(azad.hairColor);
//console.log(text);