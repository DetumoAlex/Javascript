// function myFunction(){
//     document.getElementById('demo').innerHTML = 'hello'
// }

function initial(name){
    return console.log('hello ' + name)
}
initial('Alex')

function initial2(name,course,job,firm){
    return console.log(`My name is ${name} I am studying ${course} I will be a ${job} at ${firm}`)

}
initial2('Alex','Web_development','web_developer','Microsoft')

function areaOfSun(r){
        var area = Math.round(4*Math.PI*(r**2))
        return console.log(area)
}
areaOfSun(696340)

var movies = ['carry-on','moana','suits','BMF','Peaky-Blinders']

console.log(movies[2])
movies[2] = 'osoufia-in-london'
console.log(movies[2])
console.log(movies)

movies.push('spartacus')
console.log(movies)

movies.pop()
console.log(movies)

movies.unshift('dune')
console.log(movies)

movies.shift()
console.log(movies)

var employee = {
    fullName: 'Dana Scott',
    email: 'dana@gmail.com',
    phone: 2010007560,
    marritalStatus: false,
    age:27,
    skills:['cooking', 'reading', 'skating'],
    address:{
        street:'247 parker ave',
        city: 'lewisham',
        state:'London',
        country:'United Kingdom',
    },
    salary: 200000, 
    mortgage: function (){
        return (this.salary*0.3)
    },
    tax:function (){
        return this.salary*12.5/100
    },
    tithe: function (){
        return this.salary*0.1
    }
     
}

console.log(employee.email)
console.log(employee.address.city)
console.log(employee.skills)
employee.skills[0]='singing'
console.log(employee.skills)

console.log(employee.mortgage())
console.log(employee.tax())
console.log(employee.tithe())