const express = require("express");
const app = express();
const port = 3000;

function main()
{
    /*app.get("/", (req,res) => {
        const dt = new Date();
        res.send("Message" + dt);
        console.log(dt);
    });*/

    app.listen(port, function() {
        console.log(`App listening to port ${port}`);
    });

    app.use(express.static("website"));
}

main();