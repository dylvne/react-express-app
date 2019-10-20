import bodyParser from 'body-parser';
import express from 'express';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const router = express.Router();

//routes here

router.get('/test', (req,res)=>{
    res.json("that's a go!");
});

//end of routes

app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})