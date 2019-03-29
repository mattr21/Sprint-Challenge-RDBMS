const express = require('express');
const router = express.Router();
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/project_tracker.db3',
    },
    useNullAsDefault: true,
};

const db = knex(knexConfig);

// add projects
router.post('/', async (req, res) => {
    try {
        const [id] = await db('projects')
            .insert(req.body);

        const project = await db('projects')
            .where({id: id})
            .first();
        
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json(error);
    }
});

// list specific project and its actions
router.get('/:id', async (req, res) => {
    try {
        const project = await db('projects')
           .where({id: req.params.id})
           .first();

        const actions = await db('actions')
            .select(['actions.id','actions.description','actions.notes','actions.completed'])
            .where({project_id: req.params.id})

        project['actions'] = actions;
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json(error); 
    }
});

module.exports = router;