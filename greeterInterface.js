function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Ana", lastname: "Gabriel" };
document.body.innerHTML = greeter(user);
