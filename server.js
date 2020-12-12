const express = require('express');
const expressHandlebars = require('express-handlebars');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require("./controllers/burger-controller");

app.use(routes);

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});