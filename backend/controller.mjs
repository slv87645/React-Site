import 'dotenv/config';
import express from 'express';
import * as collectables from './model.mjs';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// CREATE a new collectable
app.post ('/log', (req, res) => {
    collectables.createCollectable(
        req.body.title,
        req.body.type,
        req.body.quantity,
        req.body.cost,
        req.body.date
    )
    .then(collectable => {
        // Return status message for succesful creation of collectable
        res.status(201).json(collectable)
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: 'Creation of collectable object was unsuccesful.'})
    });
});

// RETRIEVE or READ 
app.get('/log', (req, res) => {
    collectables.findCollectables()
    .then(exercise => {
        if (exercise !== null){
            res.json(exercise);
        } else{
            res.status(404).json({Error: 'Collectable not found.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({Error: 'Request to retrive the collectable failed.'})
    })
});

// UPDATE
app.put('/log/:id', (req, res) => {
    collectables.replaceCollectable(
        req.params.id,
        req.body.title,
        req.body.type,
        req.body.quantity,
        req.body.cost,
        req.body.date
    )
    .then(collectable => {
        res.json(collectable)
    })
    .catch(error => {
        console.log(error)
        res.status(400).json({error: 'Replacement of document has failed.'})
    });
});

// DELETE by ID
app.delete('/log/:id', (req, res) => {
    collectables.deleteById(req.params.id)
    .then(deletedCount => {
        if (deletedCount === 1) {
            res.status(204).send();
        } else{
            res.status(400).json({error: 'Document does not exist.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.send({error: 'Request to delete by ID failed'});
    });
});

app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}...');
});

