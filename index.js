let express = require("express")

let app = express()


// callBacks
let serveDate = (req, res) => {
    let dateM = req.params.date
    if(isNaN(Date.parse(dateM))){
        dateM = parseInt(dateM)
    }
    let date = new Date(dateM)

    if(date.toUTCString()== "Invalid Date"){
        return res.json({error: "Invalid Date"})
    }
    res.json({
        unix: Date.UTC(
            date.getFullYear(), 
            date.getMonth(), 
            date.getSeconds()),
        utc:date.toUTCString(),
    })

}
// middleWares

// routes
app.get('/api/:date', serveDate)
app.listen(9000)