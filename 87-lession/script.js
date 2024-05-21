// console.log(localStorage);

// localStorage.setItem('userName', 'Rahim Khan')
// localStorage.setItem('password', '002255')

// getItem(key)

// let userName = localStorage.getItem('userName')
// let password = localStorage.getItem('password')

// console.log(userName, password);

// localStorage.removeItem('userName')
// localStorage.removeItem('password')

// let countries = ['Bangladesh', 'Pakistan', 'Nepal']
// localStorage.setItem('countries', JSON.stringify(countries))

// let countryList =  JSON.parse(localStorage.getItem('countries'))
// console.log(countryList);

// localStorage.clear()

// sessionStorage.setItem('user', 'Karim')

// let user = sessionStorage.getItem('user')
// console.log(user);

let user = {name: 'Rahim Khan', age: 23}

sessionStorage.setItem('user', JSON.stringify(user))

let userInfo = JSON.parse(sessionStorage.getItem('user'))
console.log(userInfo);