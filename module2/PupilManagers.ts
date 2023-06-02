import {Pupil} from "./Studentss";
class StudentManagers {
    listPupil : Pupil[]

    constructor() {
        this.listPupil = [];
    }
    getListPupil(){
        return this.listPupil
    }
    addPupil(code: number, name: string, classRoom: string, address: string, point: number, interest: string){
        let newPupil = new Pupil(code, name, classRoom, address, point, interest)
        this.listPupil.push(newPupil)
    }
    findPupil(name:string){
        let indexPupil = -1
        for (let i = 0; i < this.listPupil.length; i++) {
            if (name === this.listPupil[i].getName()){
                indexPupil = i
            }
        }
        if (indexPupil !== -1){
            console.log(this.listPupil[indexPupil])
        }
    }
    editPupil(code:string,newPupil:Pupil){
        let indexPupil = -1
        for (let i = 0; i < this.listPupil.length; i++) {
            if (indexPupil === this.listPupil[i].getCode()){
                indexPupil = i
            }

        }
        if (indexPupil !== -1){
            this.listPupil[indexPupil]
        }
    }
}