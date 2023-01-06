import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import askZooQuestions from './questions';
import executeZoo from './zoo';

// It should be defined in the env. file, but we don't have more variables to create it.
const port = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// URL Parser Exercise

app.get('/:version/api/:collection/:id',  (req, res) => {

    const { version, id } = req.params
    if(isNaN(version) || isNaN(id)){
        // We can throw and error here if is necessary
        res.status(404).send("Version and Id params must be a number");
    }
    const params = { ...req.params, ...req.query}
    res.send(params);
})

//Zoo Exercise

// executes async questions with inquirer.js
const run = async () => {
    const animalInfo = await askZooQuestions();
    executeZoo(animalInfo);
};

run();
app.listen(port);


