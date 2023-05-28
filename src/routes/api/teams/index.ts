import express from 'express';

const router = express.Router();
import {createTeam, getTeam, updateTeam, deleteTeam, getbyidTeam} from '@libs/teams/teams';


router.get('/', (_req, res) => {
    res.json({version:1, scope:'teams'});
});


router.get('/echo/:msg', (req,res)=>{
    const { msg } = req.params;
    const { variable1 = 'Hola', variable2 = 'Mundo'} = req.query;
    res.json({msg,variable1,variable2});
});

router.post('/echo2', (req,res)=>{
    const { variable1 = 'Hola', variable2 = 'Mundo'} = req.body;
    res.json({variable1,variable2});
});

router.get('/all', async (_req, res)=>{
    try{
    const teams = await getTeam();
    return res.json(teams);
    }catch(ex: any){
        return res.status(500).json({error: ex?.message});
    }
});


router.get('/byid/:id', async (req, res)=>{
    try{
        const {id = ''} = req.params;
        const teams = await getbyidTeam(id);
        return res.json(teams);
    }catch(ex: any){
        return res.status(500).json({error: ex?.message});
    }
});

router.post('/new',async (req,res)=>{
    try{
        const {tema = "", description="", isActive= false} = req.body;
        const newTeams = {tema, description, isActive: (isActive && true)};
        const createdTeams = await createTeam(newTeams);
        res.json(createdTeams);
    } catch(ex: any){
        res.status(500).json({error: ex?.message});
    }
   
});

router.put('/upd/:id', async(req, res) => {
    try{
        const { id = ''} = req.params;
        const {tema = '', description = '', isActive = false} = req.body;
        const updatedTeams = await updateTeam(id, { tema, description, isActive:(isActive && true)});
        return res.json(updatedTeams);
    } catch(ex: any){
        return res.status(500).json({error: ex?.message});
    }
});


router.delete('/del/:id', async (req, res) => {
    try{
        const { id = '' } = req.params;
        const delTeams = await deleteTeam(id);
        return res.json({deleted: delTeams, id});
    }catch(ex: any){
        return res.status(500).json({error: ex?.message});
    }
});

export default router;
