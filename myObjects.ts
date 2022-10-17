const myObj = {
    name: "Avinash",
    email: "avinash@gmail.com",
    isActive: true
}

function createUser({name:string, isPaid: boolean}){}
let newUser = {name: 'hitesh', isPaid: false, email: 'avinash@gmail.com'};
createUser(newUser);

function createCourse(): {name:string, price: number}{
    return {name: "Reactjs", price: 399}
   

}

export {}