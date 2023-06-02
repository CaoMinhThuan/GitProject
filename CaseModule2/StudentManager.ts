import {Student} from "../Student";
import {Gender} from "../Student";
import {academicPerformance} from "../Student";

class StudentManager {
    listStudent: Student[];
    size: number;

    constructor() {
        this.listStudent = [];
        this.size = 0
    }
    getListStudent(){
        return this.listStudent
    }

    addStudent(code: number, name: string, age: number, address: string, classRoom: string, gender: Gender, academicPerformance: academicPerformance){
        let newStudent = new Student(code,name, age, address, classRoom,gender,academicPerformance)
        this.listStudent.push(newStudent)
        this.size++
    }
    editNameStudent(code:number,name:string){
        for (let i = 0; i < this.listStudent.length; i++) {
            if (code === this.listStudent[i].getCode()){
                this.listStudent[i].setName(name)
            } else { return 'Students not in school'}
        }
    }
    deleteStudent(code:number){
        for (let i = 0; i < this.listStudent.length; i++) {
            if (code === this.listStudent[i].getCode()){
                this.listStudent.splice(i,1)
                console.log('Delete Complete')
                 this.size--
            } else return 'No student found to delete'
        }
    }
    findStudent(code:number){
        for (let i = 0; i < this.listStudent.length; i++) {
            if (code === this.listStudent[i].getCode()){
                console.log('Students are looking is :')
                return  this.listStudent[i]
            } else return 'Student not found'

        }
    }
}
let studentList = new StudentManager
studentList.addStudent(1,'nam',15,'hanoi','10A3',1,1)
studentList.addStudent(2,'nam',15,'hanoi','10A3',1,1)
studentList.addStudent(3,'nam',15,'hanoi','10A3',1,1)

