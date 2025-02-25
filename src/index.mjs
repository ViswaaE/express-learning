import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(request,response )=>{
    response.send({msg:"hello"})
})

app.get('/api/users', (request, response) => {
    response.send([
        { id: 1, username: "viswaa", username: "Viswaa" },
        { id: 1, username: "vinson", username: "Vinson" },
        { id: 1, username: "samuel", username: "Samuel" }
    ]);
});

app.get('/api/product',(request,response)=>{
    response.send([
        {id:1,}
    ])
})

app.listen(PORT, () => {
    console.log(`Runnig on port ${PORT}`);
});