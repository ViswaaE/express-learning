import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

//user data added
const mockuser = [
    { id:1, username: "viswaa", Displayname: "Viswaa" },
    { id:2, username: "vinson", Displayname: "Vinson" },
    { id:3, username: "sathish", Displayname: "Sathish" }
];

app.get("/", (request, response) => {
    response.status(201).send({ msg: "hello hii" });
});


//display all the user information
app.get('/api/users', (request, response) => {
    response.send(mockuser);
});


//for particular selection or for desired user data to watch
app.get('/api/user/:id', (request, response) => {
    console.log(request.params);
    const parsedId = parseInt(request.params.id);

    if (isNaN(parsedId))  
        return response.status(400).send({ msg: "Invalid Id" });

    const finduser = mockuser.find((user) => user.id === parsedId);

    if (!finduser) 
        return response.status(404).send({ msg: "User not found" });

    return response.send(finduser);
});


app.get('/api/product', (request, response) => {
    response.send([
        { id: 1, productname: "apple", Displayname: "Apple" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
