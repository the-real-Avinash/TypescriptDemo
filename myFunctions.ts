function addTwo(num: number): number{
    return num+2
    // return "Hello";
}

// const myFun = (num: number): string =>{
//     if(num > 5){
//         return true;
//     }
//     return "Ok"
// }

const getHello =(s:string): string =>{
    return ""
}

const heros =["thor","ironman","spiderman"];
// const heros =[1,2,3];

heros.map((hero): string =>{
    return `Heros is ${hero}`;
})

function signUpUser (name: string,email: string,isPaid:boolean){}
function loginUser(name: string,email:string,isPaid: boolean=false){}

loginUser('avi','avi@gmail.com');

signUpUser('avinash', 'avinash@gmail.com',true);

addTwo(2);

function consoleError (errmsg: string):void{
    console.log(errmsg);  
}

function handleError(errmsg: string):never{
    throw new Error(errmsg)
}

export {}