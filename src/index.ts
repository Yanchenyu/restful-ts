function getPerson(person: string) {
    return 'hello ' + person
}

let user = 'LiLi';

class Student {
    fullMessage: string;
    constructor(public name: any, public age: any) {
        this.fullMessage = name + ', ' + age;
    }
}

interface Option { name: string, color: string }

var options = {} as Option;

options.name = '123';

options.color = 'red';

interface Person {
    name: string,
    age: number
}

function getFullPerson(person: Person) {
    return 'name is ' + person.name + ', age is ' + person.age
}

let fullUsr = new Student('xiaoli', 14);

document.body.innerHTML = getPerson(user) + '<br>' + getFullPerson(fullUsr);
