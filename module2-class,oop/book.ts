// enum Gender {
//     Male,
//     Female,
//     Other
// }
// class Employee {
//     fullName : string;
//     gender : Gender;
//     birthDay : string;
//     email : string;
//     phone? : string;
//     constructor(fullName:string,gender:Gender,birthDay:string,email:string,phone:string) {
//         this.fullName = fullName
//         this.gender = gender
//         this.birthDay = birthDay
//         this.email = email
//         this.phone = phone
//     }
//
// }
// let list : Employee[] = []
// list.push(new Employee('camcam',Gender.Other, '18-12-2022','camcam@gmail.com','0968274320' ))
// list.push(new Employee('camcam',Gender.Female, '18-12-2022','camcam@gmail.com','0968274320' ))
// list.push(new Employee('camcam',Gender.Male, '18-12-2022','camcam@gmail.com','0968274320' ))
// function showList(list:Employee){
//     console.log(list)
// }
// list.forEach(showList)



class Book{
    title : string;
    author : string;
    alreadyRead : boolean;
    constructor(title : string,author:string,alreadyRead :boolean) {
        this.title = title
        this.author = author
        this.alreadyRead = alreadyRead
    }
    
}