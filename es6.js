class Father {
    constructor(){
        this.fatherName = "All-Jobbar";
    }
}

class Child extends Father{
    constructor(name1, ages1, position1){
        super();
        this.name = name1;
        this.ages = ages1;
        this.position = position1;
    }
}
const showUp = new Child("bokkor", 25, "engineer");
console.log(showUp);
const altShowUp = new Child("jhokkor", 30, "engineer");
console.log(altShowUp);