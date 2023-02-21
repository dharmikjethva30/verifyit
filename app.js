const express = require("express")
const verify = require("./verifyx")


const app = express()
app.use(express.json())

app.post('/', async (req, res) => {
    try {
        let result = await verify(req.body.add)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }

    //  console.log(result)
})


app.listen(3000, () => {
    console.log("server started")

})