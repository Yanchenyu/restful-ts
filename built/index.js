function getPerson(person) {
    return 'hello ' + person;
}
let user = 'LiLi';
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fullMessage = name + ', ' + age;
    }
}
var options = {};
options.name = '123';
options.color = 'red';
function getFullPerson(person) {
    return 'name is ' + person.name + ', age is ' + person.age;
}
let fullUsr = new Student('xiaoli', 14);
document.body.innerHTML = getPerson(user) + '<br>' + getFullPerson(fullUsr);
