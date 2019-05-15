const router = require('express').Router();
const Bet = require('../models/Bets');
const User = require('../models/User');

router.get("/", async (req, res)=>{
    try{
        const bets = await Bet.find({});
        res.json({
            data: bets,
            status: 200
        })
    }catch(err){
        res.json({
            status: 500,
            data: err
        })
    }

})

router.post("/", async (req, res) => {
	try{
	    console.log(req.body);
	    const newBet = await Bet.create(req.body);
	    console.log(newBet);
	    // const user = await User.findById(req.session.userId);
	    // user.betsCreated.push(newBet._id);
	    // await user.save()
	    res.json({
	        status: 200,
	        data: newBet
	   
	    });
	} catch(err){
	console.log(err)
}
})

router.put('/:id', async (req, res) => {

  try {
    const updatedBet = await Bet.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedBet
    });
  } catch(err){
    res.send(err)
  }
});



router.delete('/:id', async (req, res) => {

  try {
     const deletedBet = await Bet.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedBet
      });
  } catch(err){
    res.send(err);
  }
});
















module.exports = router;