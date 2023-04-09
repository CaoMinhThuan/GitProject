class Staff {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name
        this.email = email
        this.age = age
    }

    getName() : string {
        return this.name
    }

    getEmail() : string {
        return this.email
    }

    getAge() : number {
        return this.age
    }

    setName(name : string) {
        return this.name = name
    }

    setEmail(email : string) {
        return this.email = email
    }
    setAge(age : number){
        return this.age = age
    }

}
let staff1 = new Staff('Staff 1', 'staff@gmail.com', 20)
console.log(staff1)