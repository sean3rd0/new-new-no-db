require("dotenv").config();
const ctrl = require("./controller");
const express = require("express"); 
const {SERVER_PORT} = process.env
const app = express(); 

app.use(express.json())


app.get("/api/lists", ctrl.displayAllLists);
app.post("/api/lists", ctrl.createNewList); 
app.put("/api/lists/:id", ctrl.editListTitle);
app.delete("/api/lists/:id", ctrl.deleteList);


app.listen(SERVER_PORT, () => {
    console.log(`Listening on Port ${SERVER_PORT}`)
})
