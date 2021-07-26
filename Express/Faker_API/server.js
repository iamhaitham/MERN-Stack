const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor(){
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}

class Company{
    constructor(){
        this.name=faker.company.companyName();
        this.address={
            "street":faker.address.streetName(),
            "city":faker.address.city(),
            "state":faker.address.state(),
            "zipCode":faker.address.zipCode(),
            "country":faker.address.country()
        }
    }
}

var user=new User();
var company=new Company();

app.get("/api/users/new", (req, res) => {
    res.json(user);
});

app.get('/api/companies/new', (req, res) => {
    res.json(company);
});

var userCompany={
    "Random User":new User(),
    "Random Company":new Company()
}

app.get('/api/user/company', (req, res) => {
    res.json(userCompany);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );