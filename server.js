const config = require('./config').development; 
const express = require('express');
const http = require('http');

const app = express();
const port = config.PORT;
//const router = express.Router();
const cors = require('cors');

let corsOptions = {
    origin: '*', //출처 허용 옵션
    credential: true, //사용자 인증이 필요한 리소스(쿠키 ..등)접근

};

app.use(cors(corsOptions));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended : true }));

//router.get('/',(req,res)=>{
//    res.json({
//        status : 200,
//        data: 'success',
//    })
//})
//app.use('/api',router);

//라우터 import 시킨다.
//const todoRouter = require('./api/todo')
//app.use('/api',todoRouter);

//autoRouter
const autoRoute = require('./autoRoute');
autoRoute('/api',app);

//server
const webServer = http.createServer(app);
webServer.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

