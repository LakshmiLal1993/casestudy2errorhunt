const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');//point 2



const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",//point 6
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",//point 6
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express();//point 1 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(cors());// point 7
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





// app.listen(5000,()=>{
//     console.log("Server Ready on 3000");
// });
const PORT = process.env.PORT || 3000;
 app.listen(PORT,()=>console.log(`SEVER RUNNING ON ${PORT}`));//point 5