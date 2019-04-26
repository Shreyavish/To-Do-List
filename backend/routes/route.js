const express = require('express');
const router  = express.Router();

const todolist = require('../models/todolist');

router.get('/getlist',(req,res)=>{
  todolist.find(function(err, item){
    res.send(item);
    return;
  })
});



router.post('/posttask',(req,res)=>{

  let item = new todolist({
     id:  req.body.id,
     title: req.body.title,
     completed:  req.body.completed
  })

  item.save((err,item) => {
    if(err){
      res.send({msg:'failed'});
    }
    else{
      res.send({msg:'successfully added'});
    }
  })


});


router.put('/update/:id',(req,res)=>{

  var actvalue = req.body.completed;
  var invert = !actvalue;
  console.log(invert);
todolist.findByIdAndUpdate(
  req.params.id,
  {$set : {'completed' : invert}},
    function(err,item){
      if(err){
        res.send({msg:'failed to update'})
      }else{
        res.send({msg: invert})
      }
    });

  });


router.delete('/remove/:id',(req,res)=>{

  todolist.remove({_id:req.params.id},
    function(err,item){
      if(err){
        res.send({msg:'failed to delete'})
      }else{
        res.send({msg:'deleted successfully'})
      }
    });
});


module.exports = router;
