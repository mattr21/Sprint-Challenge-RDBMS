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


module.exports = router;