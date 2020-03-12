const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://zain:zain123@graphql-wkxs5.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(() => {})
    .catch(error => {
        console.log("connection error  ******** : ", error);
    });
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);
app.listen(4000, () => {
    console.log("now listening 4000 port zain");
});
