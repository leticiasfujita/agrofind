const express = require("express");
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
const port = 3000

//mongo conection string
mongoose.connect('');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('users', userSchema);


app.get("/", async (req, res) => {
    const listUsers = await UserModel.find()
    return res.send(listUsers)
})

app.delete("/:id", async (req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    return res.send(user)

})

app.put("/:id", async (req, res) => {
    const user = await UserModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, { new: true })
    return res.send(user)

})

app.post("/", async (req, res) => {
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    await user.save()
    res.send(user)
})



app.listen(port, () => {
    console.log('App Running')
})