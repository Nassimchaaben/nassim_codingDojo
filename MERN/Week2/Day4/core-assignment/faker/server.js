const express = require("express");
const { faker } = require("@faker-js/faker")
const app = express();
const PORT = 8000 ;


class User {
    constructor(){
        this.password=faker.internet.password(),
        this.email=faker.internet.email()
        this.phoneNumber=faker.phone.number()
        this.lastName=faker.name.lastName() 
        this.firstName=faker.name.firstName()
        this.id=faker.datatype.number()
    }}


class Company {
    constructor(){
        this.id=faker.datatype.number()
        this.name=faker.company.companyName()
        this.address={street:faker.address.street(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.county()}
    }
}
  
    
app.get("/api/users/new",(req,res)=>{
    res.send(newUser)
   });
   app.get("/api/company/new",(req,res)=>{
    res.send(company)
   });
   app.get("/api/users/company",(req,res)=>{
    res.json({newUser,company})
   });




   const newUser= new User()
   const company= new Company()



app.listen(PORT,() => {
    console.log(`My console is running at ${PORT}`);
})

// compan