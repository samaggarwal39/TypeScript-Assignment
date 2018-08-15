class FacebookAbt{
       constructor(private id:number, private name:string,private phone:number,private email:string,public address:string,public birthDate: string,public gender:string,public language:string[],public work:string[],public college:string[],public school:string[],public placeLived:string[],public hometown:string, public currentCity:string,public relationship:string, public familyMembersid:number[])
       {
           this.id=id;
           this.name=name;
           this.phone=phone;
           this.email=email;
           this.address=address;
           this.birthDate=birthDate;
           this.gender=gender;
           this.language=language;
           this.work=work;
           this.college=college;
           this.school=school;
           if(placeLived != undefined){
               this.placeLived=placeLived;
           }
           if(hometown != undefined){
            this.hometown=hometown;
        }
        if(currentCity != undefined){
            this.currentCity=currentCity;
        }
        if(relationship != undefined){
            this.relationship=relationship;
        }
        if(familyMembersid != undefined){
            this.familyMembersid=familyMembersid;
        }

       }
       getName() {
        return this.name;
    }
    getPhone = ()=>{
        return this.phone;
    }
    getemail = ()=>{
        return this.email;
    }

    setName(value:string) {
        this.name = value;
    }
    setPhone(value:number) {
        this.phone = value;
    }
    setemail(value:string) {
        this.email = value;
    }    
       


}

let person = new FacebookAbt(1,"Smarth",7042662554,"sam.aggarwal39@gmail.com","none","24/01/1996","male",["english"],["work"],["college"],["school"],
[],"","city","single",[1,2,3,4,5,6])

console.log(person.getName());
console.log(person.getemail());

person.setPhone(99999999999);
person.getPhone();
console.log(person.gender);
person.hometown = "hometown";

console.log(person.hometown);

console.log(person);

