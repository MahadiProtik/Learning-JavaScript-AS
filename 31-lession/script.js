let person1 = {
    name        : 'Rahim Khan',
    age         : 27,
    district    : 'Noakhali',
    skills      : ['JS', 'PHP', 'VueJS']
}

document.write(person1.skills[2])

document.write('<br>')
document.write('<br>')

function Person(name, age, skill, address){
    this.name       = name,
    this.age        = age,
    this.skill      = skill,
    this.address    = address;

    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.skill);
        document.write(this.address);
    }

}

let person2 = new Person('Shaifiq Khan', 25, ['PHP', 'Laravel', 'ReactJS'])
let person3 = new Person('Rafiq Khan', 28, ['Tailwind', 'NodeJS', 'Python'])

person2.display();
document.write('<br>')
person3.display();