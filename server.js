import createServer from "./app.js";

const app = createServer();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})