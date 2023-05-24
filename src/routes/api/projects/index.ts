import { createtProject } from '@server/libs/projects/projects';
import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    res.json({version:1, scope:'projects'});
});


router.post('/new', async (req, res) => {
    const {name = '', description = '', isActive = ''} = req.body;
    const newProject = {name, description, isActive:(isActive && true)};
    const createdProject = await createtProject(newProject);
    res.json(createdProject);
});


export default router;
