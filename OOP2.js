class Person {
    #healthRate;
    constructor(fullName,age,money,sleepMood, healthRate) {
        this.fullName = fullName;
        this.age=age;
        this.money = money;
        this.sleepMood = sleepMood;
        this.#healthRate = healthRate;
    }
    getHealthRate() {
        return this.#healthRate
    }
    setHealthRate(value) {
        if(value>=0&&value<=100)
            this.#healthRate = value;

        else  
            console.log("value must be between 0 and 100");
    }
    buy=function(items){
        for (let i = 0; i < items; i++) {
            this.money -=10;  
        }
        return this.money;   
    }
    sleep=function(hours) {
        if (hours==7) {
            this.sleepMood="Happy"; 
        }
        else if(hours<7){
            this.sleepMood="Tired";
        }
        else if(hours>7){
            this.sleepMood="Lazy";
        }
        return this.sleepMood; 
    }
    eat=function(meals){
        if (meals==3) {
            
            this.setHealthRate(100);
         }
         else if(meals==2){
            this.setHealthRate(75);
         }
         else if(meals==1){
            this.setHealthRate(50);
         }
          
         return this.getHealthRate ();
    }
}
class Employee extends Person {
    #salary
    constructor(fullName,age,money,sleepMood, healthRate,id,email,workMood,salary,isManager) {
        super(fullName,age,money,sleepMood, healthRate)
        this.id = id;
        this.email=email;
        this.workMood = workMood;
        this.#salary = salary<1000?1000:salary;
        this.isManager = isManager;
    }
    getSalary() {
        return this.#salary
    }
    setSalary(value) {
        if(value>=1000)
            this.#salary = value;

        else  
            console.log("value must be 1000 or more");
    }
    work=function(hours) {
        if (hours==8) {
            this.workMood="Happy"; 
        }
        else if(hours>8){
            this.workMood="Tired";
        }
        else if(hours<8){
            this.workMood="Lazy";
        }
        return this.workMood; 
    }

}
class Office{
    constructor(name,employees){
        this.name=name;
        this.employees=employees;
    }
    getAllEmpoyees(){
        return this.employees;
    }
    getEmployee(empID){
        var employees=0;
        this.employees.forEach(element => {
            if (element.id==empID) {
                employees=element;
            }   
        });
        return employees;
    }
    hire(employees){
        this.employees.push(employees);
        return this.employees;
    }
    fire(empId){
        var employees=0;
        this.employees.forEach(element => {
            if (element.id==empId) {
                let index=this.employees.indexOf(element);
                this.employees.splice(index,1);
            }   
        });
        return this.employees;
    }
}
const esraa = new Employee("Esraa Elsyed mohamed",30,1099,"happy",75,1,"esraa@gmail.com","Happy",5000,"yes");
const ahmed=new Employee("ahmed",22,1000,"lazy",50,2,"ahmed@gmail.com","tired",12000,"yes");
const emparr=[esraa,ahmed];
const office1=new Office("Office1",emparr);
var stop = false;
        while(!stop){
var x=prompt("enter the number of function you want:\n 1-add new employee \n 2-delete employee \n 3-get all current employees \n 4-get spcified employee");
if(x=='1'){
    let a=prompt("enter your name");
    let b=prompt("enter your age");
    let c=prompt("enter your money");
    let d=prompt("enter your sleepMood : happy or tired or lazy");
    let z=prompt("enter your healthRate :100 or 75 or 50")
    let e=prompt("enter your ID");
    let f=prompt("enter your Email");
    let g=prompt("enter your workMood : happy or tired or lazy");
    let h=Number(prompt("enter your salary"));
    let i=prompt("if you are manger enter \"yes\" else enter \" NO\"");
    const ali = new Employee(a,b,c,d,z,e,f,g,h,i);
    office1.hire(ali);
    alert("you hire new employee succfully");
}
else if (x=="2"){
    let a=Number(prompt("enter the ID of employee : "));
    office1.fire(a);
    alert("you fire employee succfully")
}
else if(x=="3"){
 let  x= office1.getAllEmpoyees();
 for (let i = 0; i < x.length; i++) {
    if(x[i].isManager=="yes")
    alert("Employee munber : "+(i+1)+"\nName: "+x[i].fullName+"\nAge: "+x[i].age+"\nSleep Mood: "+x[i].sleepMood+"\nHealth Rate: "+x[i].getHealthRate()+"\nID: "+x[i].id+"\nemail: "+x[i].email+"\nWork Mood: "+x[i].workMood+"\nIs Manger: "+x[i].isManager+"\n");
    else
    alert("Employee munber : "+(i+1)+"\nName: "+x[i].fullName+"\nAge: "+x[i].age+"\nSleep Mood: "+x[i].sleepMood+"\nHealth Rate: "+x[i].getHealthRate()+"\nID: "+x[i].id+"\nemail: "+x[i].email+"\nWork Mood: "+x[i].workMood+"\nsalary:"+x[i].getSalary()+"\nIs Manger: "+x[i].isManager+"\n");
 }

 
 
}
else if(x=="4"){
    let a=Number(prompt("enter the ID of employee : "));
   let x= office1.getEmployee(a); 
   alert("Employee information : \nName: "+x.fullName+"\nAge: "+x.age+"\nSleep Mood: "+x.sleepMood+"\nHealth Rate: "+x.getHealthRate()+"\nID: "+x.id+"\nemail: "+x.email+"\nWork Mood: "+x.workMood+"\nsalary:"+x.getSalary()+"\nIs Manger: "+x.isManager+"\n");
}
var answer = prompt("do you want to exit (yes,no)");
if(answer=="yes")
{
    stop = true;
}

}
// const esraa = new Employee("Esraa Elsyed mohamed",30,1099,"happy",75,1,"esraa@gmail.com","Happy",5000,"yes");
// const mohamed=new Employee("MOHAMED",22,1000,"lazy",50,2,"mohamed@gmail.com","tired",12000,"yes");
// const emparr=[esraa,mohamed];
// const office1=new Office("Office1",emparr);
// console.log(office1.getEmployee(esraa.id));
// const aly=new Employee("ali",30,1099,"happy",75,1,"esraa@gmail.com","Happy",5000,"yes");
// console.log(office1.hire(aly));
// console.log(office1.fire(2));
//console.log(esraa);
// esraa.buy(5);
//console.log(esraa.eat(1));
// esraa.sleep(6);
// esraa.work(7);
//esraa.setHealthRate(100);
//document.write(office1.getAllEmpoyees());
