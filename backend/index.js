import express, { request } from "express"
import {toDataURL} from "qrcode"
import cors from "cors"

// Create server object
const server = express();

// Here we are telling to server that whatever request comes to you if it has some body then please parse it for us
server.use(express.json());
server.use(cors())

// Start the server to listen to the request
server.listen(8080, () => {
    console.log("✅ Hurray! Server has started on PORT : 8080");
})

// We have to do routing
server.get("/", (request, response) => {
    // What work you have to do
    console.log(request.url)

    // Send the response
    response.send("<h1>Hello World!</h1>")
})

server.get("/sayakansha", (request,response) =>{
    console.log(request.ip);

    response.sendFile("C:\\Users\\akans\\Coding_and_Dev\\Backend\\server_demo\\WIN_20230618_13_22_51_Pro.jpg")
})

server.get("/sendjson", (req, res) => {
    console.log(req.url)
    const data = {
        name: "Akansha",
        age: 20
    }
    // It will convert this javascript object to json form and then send it to the client
    res.json(data)

    // // convert it to json
    // const json = JSON.stringify(data);

    // // Now send it to client
    // res.send(json)
})

server.post("/generate", async (req, res) => {
    const dataFromClient = req.body
    const text = dataFromClient.text

    // convert this to QR Code
    try {
        const dataURL = await toDataURL(text)
        res.json({
            url: dataURL
        })
    } catch (error) {
        res.json({
            message: "Internal Server Error! Try again Later."
        })
    }
})


