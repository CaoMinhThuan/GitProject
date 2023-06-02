export class Student {
    private code: number;
    private name: string;
    private age: number;
    private address: string;
    private classRoom: string;
    private gender: Gender;
    private academicPerformance: academicPerformance;


    constructor(code: number, name: string, age: number, address: string, classRoom: string, gender: Gender, academicPerformance: academicPerformance) {
        this.code = code;
        this.name = name;
        this.age = age;
        this.address = address;
        this.classRoom = classRoom;
        this.gender = gender;
        this.academicPerformance = academicPerformance;
    }

    getCode() {
        return this.code
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getAddress() {
        return this.address
    }

    getClassRoom() {
        return this.classRoom
    }

    setCode(code: number) {
        this.code = code
    }

    setName(name: string) {
        this.name = name
    }

    setAge(age: number) {
        this.age = age
    }

    setAddress(address: string) {
        this.address = address
    }

    setClass(classRoom: string) {
        this.classRoom = classRoom
    }
}

export enum Gender {
    male = 1,
    female,
    other
}

export enum academicPerformance {
    excellent = 1,
    good,
    average,
    poor
}