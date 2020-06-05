const express = require("express");
//  간단한 서버를 설정할때
const request = require("request");
//  다른 사이트 서버 연결해서 데이터 가져옴
const app = express();
//  서버 생성
const port = 3355;
//  포트번호 0 ~ 65535 (0~1023사용중)
//  포트번호 충돌 크로스도메인 방지

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//  서버 대기중
app.listen(port, ()=>{
    console.log("server start...","http://localhost:3355")
})

app.get("/", (request, response) => {
    response.send("helloooooo node server")
})



// 몽고디비 연결
const client = require("mongodb").MongoClient;
/*
*   몽고디비 =>  noSql
*   find() == find({}) => select * from movie
*   find({mmo:1}) select * from movie where mmo=1
* */
/*
        1 page => 0 0 ~ 11
        2 page => 12 12 ~ 23

    * */
app.get("/movie_real2", (req, res) => {
    // url
    let page = req.query.page;
    let rowSize = 12;
    let skip = (page*rowSize)-rowSize;

    let url = "mongodb://211.238.142.181:27017";
    client.connect(url, (error, client) => {
        let db = client.db("mydb");
        db.collection("movie").find({cateno:1}).skip(skip).limit(rowSize).toArray((err, docs) => {
            res.json(docs)
            client.close();
        });
    })
})

app.get("/movie_total",(req, res) =>{
    let cateno = req.query.cateno;

    let url = "mongodb://211.238.142.181:27017";
    client.connect(url, (error, client) => {
        let db = client.db("mydb");
        db.collection('movie').find({cateno:Number(cateno)}).count((err, count) => {
            res.json({total:Math.ceil(count/12.0)})
            client.close();
            return count;
        })
    })
})

// /movie_home?no=1
app.get("/movie_home", (req, res) => {
    // req.query.넘길파라미터(data)
    let no = req.query.no;
    let site = "";

    if(no == 1){
        site = "searchMainDailyBoxOffice.do";
    }else if(no == 2){
        site = "searchMainRealTicket.do";
    }else if(no == 3){
        site = "searchMainDailySeatTicket.do";
    }else if(no == 4){
        site = "searchMainOnlineDailyBoxOffice.do";
    }

    let url = `http://www.kobis.or.kr/kobis/business/main/${site}`

    // 외부서버 사용시 request 사용
    request({url:url}, (err,request,json) => {
        res.json(JSON.parse(json));
    })

})