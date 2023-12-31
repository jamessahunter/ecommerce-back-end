const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  //includes its associated Products
  try{
    const categoryData= await Category.findAll({
      include:[{model:Product}],
    });
    res.status(200).json(categoryData);
  }catch{
    res.status(500).json(err);
  }
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  //includes its associated Products
  try{
    const categoryData= await Category.findByPk(req.params.id,{
      include:[{model:Product}],
    });
    res.status(200).json(categoryData);
  }catch{
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category)=>{
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      return res.json(category);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    await Category.destroy({
      where:{
        id:req.params.id,
      }
    });
    res.status(200).json('Category Deleted');
  }catch{
    res.status(500).json(err);
  }

});
module.exports = router;
