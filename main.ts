type TypeUser = {
    name: string
    age: number
    address: string
}

type TypeData = {
    day: number
    month: number
}

let userLogin: TypeUser & TypeData = {
    name: 'Ilia',
    age: 20,
    address: 'Voronez',
    day: 17,
    month: 12
}
 
let userMe: TypeUser
userMe = {
    name: 'Ilia',
    age: 20,
    address: 'Voronez'
}


let arr:string[]
arr = ['12', '123']


let array:ReadonlyArray<number>
array = [1,2,3,4]
// array[0] = 12 - не получится тк можнм только читать


//кортежи это массивы в котороых мы четко знаем количество элементов вот пример
type TypeArr = [number, string]
const newArr: TypeArr = [1, 'Ilia']





//----------------------function------------------------------------




function getName(name: string): void {
    console.log("hello", name)
}

const getFullName = (name: string, surname: string):string => {
    return 'wr'
}

// перегрузка функций
function getNames(name:string):string
function getNames(name:string, surname:string):string

function getNames(name: string, surname?: string){
    return surname ? `full name ${surname + ' ' + name}`: `name ${name}`
}




//---------------------------clases------------------------------------



class Car{
    name: string
    price: number

    constructor(name:string, price:number){
        this.name = name
        this.price = price
    }

    getInfo():string {
        return `${this.name}`
    }
}

class Bus extends Car{
    private count: number

    constructor(name:string, price:number, count:number){
        super(name, price)
        this.count = count
    }
}

const mycar:Car = new Car('audi', 1000000)

mycar.getInfo()



//--------------------------interface-------------------------------



interface IUser1 {
    name: string
    age: number
}

type Typeuser = {
    name: string
    age: number
}

const user:IUser1 = {
    name: "Ilia",
    age: 20
}

//типы мы можем & или | 
// а интерфейсы как классы через extend  (наследуют поля родителя)




//---------------------------enum-----------------------------------



enum EnumRoles {
    ADMIN, GUEST, USER
}

const enum EnumCar {
    BMW, AUDI, VW
}

interface IUser {
    role: EnumRoles
    car: EnumCar
}

const userE: IUser = {
    role: EnumRoles.ADMIN,
    car: EnumCar.BMW
}



//---------------Assertions(утверждения)-----------------------



const inpElem = document.querySelector('input')
const value1 = (inpElem as HTMLInputElement).value
const value2 = (<HTMLInputElement>inpElem).value

const getLenth = (text: string | null) =>{
    return text!.length // что то какая то страная тема если честно то нифига не понял пока не юзаем
}

getLenth(null)
getLenth('sdcsdc')




//----------------------Generic--------------------------



function entity <T>(args:T):T{
    return args
}

entity<number>(1)

const arrowFunc = <T>(args:T):T =>{
    return args
}

arrowFunc<string>("Ilia")

class Cars<T> {
    name: T
    price: number

    constructor(name: T, price:number){
        this.name = name
        this.price = price
    }

    getInfo():string {
        return `${this.name}`
    }
}

new Cars<string>("Ilia", 1000000)

type TypeLenth = {
    lenth: number
}

function getNameLenth<T extends TypeLenth>(entity:T):number{ //расширили
    return entity.lenth
}



//------------------------Утилиты типов-----------------------------



interface ICar {
    id: number
    name: string
    price: number
    yearBuild: number
}

interface ICarCreate extends Omit<ICar, 'id'>{} //наследуем поля кроме id
interface ICarId extends Pick<ICar, 'id'>{}  //наследуем только id 
interface ICarOptional extends Partial<ICar>{} //все поля становятся необязательными 
interface ICarOptional2 extends Required<ICar>{} //все поля становятся обязательными
interface ICarReadonly extends Readonly<ICar>{} //поля доступны только для просмотра 

type TypeCarRecord = Record<'name' | 'price', string | number>//для созданания своего нового типа, то есть 
//name и price это поля которые могут быть либо string либо number

type TypeGetname = ()=>string
type Return = ReturnType<TypeGetname>



//---------------------Декораторы-----------------------------



//--------------------Расширенные типы-------------------------


type TypeIsNumber<T> = T extends number ? 'yes' : 'no'//если дженерик равен числу то это yes 

type Typt1 = TypeIsNumber<number>
type Typt2 = TypeIsNumber<string>



