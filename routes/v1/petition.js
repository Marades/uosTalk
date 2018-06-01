const express = require('express')
const sql = require('sql-loader')()
const router = express.Router()

//전체 청원 가져오기
router.get('/', (req, res) => {
    pool.query(sql.petition.select, (err, rows) => {
        if(err) {
            console.log(err)
            res.json({
                msg: 'error occur',
                err: err
            })
        }
        else {
            res.json({
                msg: 'success',
                data: rows
            })
        }
    })
})

// 청원 작성
router.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.title !== ""){
        const insert_data = {
            title: req.body.title,
            content: req.body.content
        }
        pool.query(sql.petition.insert, insert_data, (err, rows) => {
            if(err) {
                console.log(err)
                res.json({
                    msg: 'error occur',
                    err: err
                })
            }
            else {
                console.log(insert_data)
                res.json({
                    msg: 'success',
                })
            }
        })
    }
    else {
        res.json({
            msg: 'title is empty'
        })
    }
})

module.exports = router