import express from 'express';
const router = express.Router();
import projectsRouter from './projects'
import securityRouter from './security'
import teamsRouter from './teams'

router.use('/projects', projectsRouter)
router.use('/security', securityRouter)
router.use('/security', teamsRouter)

// api/projects/echo/hola?variable1=a&variable2=b
router.get('/echo/:msg',(req, res) => {
    const{ msg } = req.params;
    const { variable1='Hola', variable2='Mundo'} = req.query;
    res.json({msg, variable1, variable2});
});



router.post('/echo2/:msg',(req, res) => {
    const{ msg } = req.params;
    const { variable1='Hola', variable2='Mundo'} = req.body;
    res.json({msg, variable1, variable2});
});
export default router;