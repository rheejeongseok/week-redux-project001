// 라이브러리 로드
const express = require("express");
// 서버 생성
const app = express();
// 서버 구성

/*app.all('/!*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});*/

app.use('/',express.static('./public'));

const path = require("path")
app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname,"index.html"))
})

app.listen(3355,() => {
    console.log("http://localhost:3355/")
});

const client = require("mongodb").MongoClient;

app.get('/category', (req, res) => {
    let url = "mongodb://211.238.142.181:27017";
    client.connect(url,(err,cli)=> {
        let db = cli.db('mydb');
        db.collection('category').find({})
            .toArray((err, docs) => {
                // 요청한 사용자에게 데이터 전송
                res.json(docs);
                cli.close();
            })
    })
});

app.get('/cate_food', (req, res) => {
    let cno = req.query.cno;
    let url = "mongodb://211.238.142.181:27017";
    client.connect(url,(err,cli)=> {
        let db = cli.db('mydb');
        db.collection('food').find({cno:Number(cno)})
            .toArray((err, docs) => {
                // 요청한 사용자에게 데이터 전송
                res.json(docs);
                cli.close();
            })
    })
});

app.get('/cate_info', (req, res) => {
    let cno = req.query.cno;
    let url = "mongodb://211.238.142.181:27017";
    client.connect(url,(err,cli)=> {
        let db = cli.db('mydb');
        db.collection('category').find({cateno:Number(cno)})
            .toArray((err, docs) => {
                // 요청한 사용자에게 데이터 전송
                res.json(docs[0]);
                cli.close();
            })
    })
});

app.get('/food_detail', (req, res) => {
    let no = req.query.no;
    let url = "mongodb://211.238.142.181:27017";
    client.connect(url,(err,cli)=> {
        let db = cli.db('mydb');
        db.collection('food').find({no:Number(no)})
            .toArray((err, docs) => {
                // 요청한 사용자에게 데이터 전송
                res.json(docs[0]);
                cli.close();
            })
    })
});