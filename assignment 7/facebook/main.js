var FacebookAbt = /** @class */ (function () {
    function FacebookAbt(id, name, phone, email, address, birthDate, gender, language, work, college, school, placeLived, hometown, currentCity, relationship, familyMembersid) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.birthDate = birthDate;
        this.gender = gender;
        this.language = language;
        this.work = work;
        this.college = college;
        this.school = school;
        this.placeLived = placeLived;
        this.hometown = hometown;
        this.currentCity = currentCity;
        this.relationship = relationship;
        this.familyMembersid = familyMembersid;
        this.getPhone = function () {
            return _this.phone;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.birthDate = birthDate;
        this.gender = gender;
        this.language = language;
        this.work = work;
        this.college = college;
        this.school = school;
        if (placeLived != undefined) {
            this.placeLived = placeLived;
        }
        if (hometown != undefined) {
            this.hometown = hometown;
        }
        if (currentCity != undefined) {
            this.currentCity = currentCity;
        }
        if (relationship != undefined) {
            this.relationship = relationship;
        }
        if (familyMembersid != undefined) {
            this.familyMembersid = familyMembersid;
        }
    }
    FacebookAbt.prototype.getName = function () {
        return this.name;
    };
    FacebookAbt.prototype.setName = function (value) {
        this.name = value;
    };
    FacebookAbt.prototype.setPhone = function (value) {
        this.phone = value;
    };
    FacebookAbt.prototype.setemail = function (value) {
        this.email = value;
    };
    return FacebookAbt;
}());
var person = new FacebookAbt(1, "Smarth", 7042662554, "sam.aggarwal39@gmail.com", "none", "24/01/1996", "male", ["english"], ["work"], ["college"], ["school"], [], "", "city", "single", [1, 2, 3, 4, 5, 6]);
console.log(person.getName());
console.log(person.getemail());
person.setPhone(99999999999);
person.getPhone();
console.log(person.gender);
person.hometown = "hometown";
console.log(person.hometown);
console.log(person);
