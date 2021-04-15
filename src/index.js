import fastify from "fastify"
const app = fastify()

import exampleRoutes from "./routes/example"

exampleRoutes.forEach((route,index) => {
    app.route(route)
})

app.get("/", (req,res) => res.send("https://github.com/jack5341"))

app.get("/hello", (req,res) => res.send("HELLO"))

// Run the server!
app.listen(process.env.PORT || 8080, '0.0.0.0', function (err) {
    console.log("Server does work")
    if (err) {
        fastify.log.error(err)
        throw Error(err);
    }
})