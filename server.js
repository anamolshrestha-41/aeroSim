const app=require("./app");
const mongoose= require("mongoose");

main().then(()=>{
    console.log("Database Connection Successful!");
    app.listen(3000, ()=>{
        console.log("Server is running at port 3000");
    })
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/aeroSimulation")
}