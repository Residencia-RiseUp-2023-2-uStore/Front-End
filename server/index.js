const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "guga1309@", // Sua senha do banco de dados
  database: "cruddatabase",
});



app.use(cors());
app.use(express.json());

app.post("/register",(req,res)=>{
  const {name} = req.body;
  const {email} = req.body;
  const {password} = req.body;
  
  let SQL = "INSERT INTO usuario(name, email, password) VALUES (?,?,?)";
  db.query(SQL,[name,email,password],(err,result)=>{
    console.log()
  }) 
})
app.get("/getUsers",(req,res) =>{
  let SQL = "SELECT * FROM usuario";
  db.query(SQL,(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result)
    }
  })
})

app.listen(3307, () => {
  console.log("Servidor rodando na porta 3347");
});
