const express =require('express');
const shortid = require('shortid');

const server = express();
const port = 8000;

server.use(express.json());


let users = [
    {
       id:shortid.generate(),
       name:'jake',
       bio:'likes fruit'

    },
    {
        id:shortid.generate(),
        name:"mike",
        bio:"likes wednesday"
    }

]
server.listen(8000);

server.get('/api/users',(req,res) => {
    res.status(200).json(users);
});


server.post('/api/users',(req,res)=>{
    const info = {id: shortid.generate(),...req.body}
    users.push(info);
    res.status(201).json(users);
})

server.get('/api/users/:id', (req,res)=> {
    const id =req.params.id;

    const user =users.find((user)=> user.id == id);

    if (user) {
        res.status(200).json(user);

    } else {
        res.status(404).json({message: "User not found idiot"})
    }
})


// server.delete('/api/users/:id',(req,res)=> {
//     const id = req.params.id;
// })