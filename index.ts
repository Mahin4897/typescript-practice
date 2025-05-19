let myname :string ="mahin"; //~ a string type variable
let age :number = 20; //~ a number type variable
let isMale :boolean = true; //~ a boolean type variable
let ages: number[]=[10,20,30,40,50] //~ array declaration for typescript

//~ string number and boolean are primitive types
//~ custom types
type Address={
    city:string
    street:string
    country:string
}
type Person={
    name:string
    age:number
    isMale :boolean
    adress?:Address
    // ? means optional property
}
// ~ This is a custom type that definese a person object 
// ~ and specifies the type of each


type Updateperson=Partial<Person>
// ~ This is a custom type that defines a partial person object
// ~ and specifies the type of each property as optional.

let person1 :Person ={
    name:"mahin",
    age:20,
    isMale:true,
    adress:{
        city:"dhaka",
        street:"mirpur",
        country:"bangladesh"
            }
}
//~ example of person type


let group:Person[]=[]
//~ array of person type

type Userrole="admin"|"user"|"guest"
let user1:Userrole="admin"
//~  a custom type that defines a set of possible values
//~ here user1 can only  be admin or user or 


function getuser<T>(values:T):T{
    return values
}
//~ this is a generic function that takes a value of any type and returns the same type