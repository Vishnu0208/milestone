const express=require('express');
const cors=require('cors');
const fileupload=require('express-fileupload');
const body_parser=require('body-parser');
const mysql=require('mysql');


const app = express();
app.use(cors());
app.use(fileupload());
app.use(body_parser.json());
app.use(express.json());
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static('public'));

let c=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'Kgisl@123',
    database:'register_form'
})
    c.connect(function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log('Database Connected');
        }
    })
            app.post('/Register',(request,response)=>{

                let {firstname,lastname,email,phone,password} = request.body;
            
                let sql = 'insert into radical(firstname,lastname,email,phone,password) values (?,?,?,?,?)';
            
                c.query(sql,[firstname,lastname,email,phone,password],(error,result)=>{
                    if(error){
                        let v = {"status":"error"}
                        response.send(v);
                    }
                    else{
                        let v = {"status":"Success"};
                        response.send(v);
                    }
                })
            
            })

            app.get('/form',(request,response)=>{

                let sql = 'select * from register_form';
            
                c.query(sql,(error,result)=>{
                    if(error){
                        response.send(error);
                    }
                    else{
                        response.send(result);
                    }
                })
            
            })

app.listen(3002, ()=>{console.log('Server running on port no : 3002')});   
        
        
    
    

       
    
    
    