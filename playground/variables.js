var person = ['venkat', 'raji']

function newobj(obj) {
	person.push('lavanya')
}

function newobj(obj) {
	obj.push('lavanya');
	debugger;
}
console.log(person);
newobj(person);
console.log(person);