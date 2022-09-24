const recipe1 = {
  cookingTime: 45,
  id: 'BURGERitem0',
  image: 'http://forkify-api.herokuapp.com/images/681635_MEDIUMde80.jpg',
  publisher: 'BBC Good Food',
  servings: 4,
  sourceUrl: 'http://www.bbcgoodfood.com/recipes/681635/bbq-chicken-burgers',
  title: 'BBQ chicken burgers',
  ingredients: [
    { quantity: 4, unit: '', description: 'skinless boneless chicken breasts' },
    { quantity: 4, unit: '', description: 'rashers bacon' },
    { quantity: 4, unit: '', description: 'large burger buns sliced in half' },
    {
      quantity: null,
      unit: '',
      description: 'Lettuce tomato and red onion to serve',
    },
    { quantity: 4, unit: 'tbsps', description: 'tomato ketchup' },
    { quantity: 4, unit: 'tbsps', description: 'brown sauce' },
    { quantity: null, unit: '', description: 'Splash chilli sauce' },
    { quantity: 2, unit: 'tsps', description: 'clear honey' },
    { quantity: 2, unit: '', description: 'garlic cloves crushed' },
  ],
};

const recipe2 = {
  cookingTime: 135,
  id: 'PIZZAitem1',
  image: 'http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg',
  publisher: 'Simply Recipes',
  servings: 4,
  sourceUrl: 'http://www.simplyrecipes.com/recipes/homemade_pizza/',
  title: 'Homemade Pizza',
  ingredients: [
    {
      quantity: 1,
      unit: '',
      description: 'medium head cauliflower cut into florets',
    },
    { quantity: 1, unit: '', description: 'egg' },
    { quantity: 0.5, unit: 'cup', description: 'mozzarella shredded' },
    {
      quantity: 1,
      unit: 'tsp',
      description: 'oregano or italian seasoning blend',
    },
    { quantity: null, unit: '', description: 'Salt and pepper to taste' },
    { quantity: 1, unit: 'cup', description: 'chicken cooked and shredded' },
    { quantity: 0.5, unit: 'cup', description: 'barbecue sauce' },
    { quantity: 0.75, unit: 'cup', description: 'mozzarella shredded' },
    {
      quantity: null,
      unit: '',
      description: 'Red onion to taste thinly sliced',
    },
    { quantity: null, unit: '', description: 'Fresh cilantro to taste' },
  ],
};

const recipe3 = {
  cookingTime: 30,
  id: 'PIZZAitem2',
  image:
    'http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg',
  publisher: 'Simply Recipes',
  servings: 4,
  sourceUrl: 'http://www.simplyrecipes.com/recipes/how_to_grill_pizza/',
  title: 'How to Grill Pizza',
  ingredients: [
    { quantity: null, unit: '', description: 'Pizza dough' },
    { quantity: null, unit: '', description: 'Olive oil' },
    {
      quantity: null,
      unit: '',
      description:
        'Standard toppings of tomato sauce herbs cheese and maybe some thinly sliced onions tomatoes mushrooms or pepperoni',
    },
    {
      quantity: null,
      unit: '',
      description:
        'Some flour or corn meal for dusting the cookie sheet or pizza peel',
    },
  ],
};

const recipe4 = {
  cookingTime: 60,
  id: 'PIZZAitem3',
  image:
    'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
  publisher: 'Closet Cooking',
  servings: 4,
  sourceUrl: 'http://www.closetcooking.com/2011/03/pizza-dip.html',
  title: 'Pizza Dip',

  ingredients: [
    {
      quantity: 2,
      unit: '',
      description: 'packages refrigerated crescent rolls',
    },
    { quantity: 1, unit: 'cup', description: 'sour cream' },
    { quantity: 1, unit: '', description: 'package cream cheese softened' },
    { quantity: 1, unit: 'tsp', description: 'dried dill weed' },
    { quantity: 0.25, unit: 'tsp', description: 'garlic salt' },
    { quantity: 1, unit: '', description: 'package ranch dressing mix' },
    { quantity: 1, unit: '', description: 'small onion finely chopped' },
    { quantity: 1, unit: '', description: 'stalk celery thinly sliced' },
    {
      quantity: 0.5,
      unit: 'cup',
      description: 'halved and thinly-sliced radishes',
    },
    { quantity: 1, unit: '', description: 'red bell pepper chopped' },
    { quantity: 1.5, unit: 'cups', description: 'fresh broccoli chopped' },
    { quantity: 1, unit: '', description: 'carrot grated' },
  ],
};

const recipe5 = {
  cookingTime: 75,
  id: 'PIZZAitem4',
  image: 'http://forkify-api.herokuapp.com/images/391236ba85.jpg',
  publisher: 'All Recipes',
  servings: 4,
  sourceUrl: 'http://allrecipes.com/Recipe/Veggie-Pizza/Detail.aspx',
  title: 'Veggie Pizza',
  ingredients: [
    { quantity: 4, unit: 'oz', description: 'cream cheese room temperature' },
    { quantity: 0.25, unit: 'cup', description: 'sour cream' },
    { quantity: 0.25, unit: 'cup', description: 'mayonnaise' },
    { quantity: 0.5, unit: 'cup', description: 'mozzarella grated' },
    { quantity: 0.25, unit: 'cup', description: 'parmigiano reggiano grated' },
    { quantity: 1, unit: 'cup', description: 'pizza sauce' },
    { quantity: 0.5, unit: 'cup', description: 'mozzarella shredded/grated' },
    { quantity: 0.25, unit: 'cup', description: 'parmigiano reggiano grated' },
    { quantity: 2, unit: 'oz', description: 'pepperoni sliced' },
    { quantity: 2, unit: 'tbsps', description: 'green pepper sliced' },
    { quantity: 2, unit: 'tbsps', description: 'black olives sliced' },
  ],
};

const recipe6 = {
  cookingTime: 60,
  id: 'PIZZAitem7',
  image: 'http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg',
  publisher: 'My Baking Addiction',
  servings: 4,
  sourceUrl: 'http://www.mybakingaddiction.com/pizza-dip/',
  title: 'Pizza Dip',
  ingredients: [
    { quantity: 8, unit: 'oz', description: 'cream cheese softened' },
    { quantity: 0.25, unit: 'tsp', description: 'garlic powder' },
    { quantity: 1, unit: 'tsp', description: 'dried oregano' },
    { quantity: 1, unit: 'tsp', description: 'dried parsley' },
    { quantity: 1, unit: 'tsp', description: 'dried basil' },
    { quantity: 1, unit: 'cup', description: 'shredded mozzarella cheese' },
    { quantity: 1, unit: 'cup', description: 'parmesan cheese' },
    { quantity: 1, unit: 'cup', description: 'pizza sauce' },
    { quantity: 0.25, unit: 'cup', description: 'chopped green bell pepper' },
    { quantity: 0.25, unit: 'cup', description: 'chopped onion' },
    { quantity: 2, unit: 'oz', description: 'sliced pepperoni' },
  ],
};

const recipe7 = {
  cookingTime: 75,
  id: 'PIZZAitem6',
  image: 'http://forkify-api.herokuapp.com/images/IMG_4351180x1804f4a.jpg',
  publisher: 'A Spicy Perspective',
  servings: 4,
  sourceUrl:
    'http://www.aspicyperspective.com/2012/07/greek-pizza-grilled.html',
  title: 'Greek Pizza',
  ingredients: [
    { quantity: null, unit: '', description: 'For the pizza dough:' },
    { quantity: 1, unit: '', description: '1/2 tsp. dry active yeast' },
    { quantity: 0.75, unit: 'cup', description: 'warm water' },
    { quantity: 2, unit: '', description: 'tsp. sugar' },
    { quantity: 0.5, unit: 'cup', description: 'bread flour' },
    { quantity: 2, unit: '', description: 'tb. olive oil + extra for bowl' },
    { quantity: 1, unit: '', description: '1/2 tsp. sea salt' },
    { quantity: 1, unit: 'cup', description: 'baby arugula' },
    { quantity: 0.67, unit: 'cup', description: 'good pitted greek olives' },
    {
      quantity: 0.67,
      unit: 'cup',
      description: 'cherry or grape tomatoes halved',
    },
    { quantity: 0.25, unit: 'cup', description: 'crumbled feta cheese' },
  ],
};

const recipe8 = {
  cookingTime: 75,
  id: 'PIZZAitem5',
  image: 'http://forkify-api.herokuapp.com/images/7988559586.jpg',
  publisher: 'All Recipes',
  servings: 4,
  sourceUrl: 'http://allrecipes.com/Recipe/Valentine-Pizza/Detail.aspx',
  title: 'Valentine Pizza',
  ingredients: [
    { quantity: 3, unit: 'cups', description: 'bread flour' },
    { quantity: 1, unit: '', description: 'envelope active dry yeast' },
    { quantity: 1.25, unit: 'cups', description: 'warm water' },
    {
      quantity: 3,
      unit: 'tbsps',
      description: 'extra virgin olive oil divided',
    },
    { quantity: 3, unit: 'tbsps', description: 'chopped fresh rosemary' },
    { quantity: 1, unit: '', description: 'can pizza sauce' },
    { quantity: 3, unit: 'cups', description: 'shredded mozzarella cheese' },
    { quantity: 2, unit: '', description: 'ripe tomatoes sliced' },
    { quantity: 1, unit: '', description: 'zucchini sliced' },
    { quantity: 15, unit: '', description: 'slices vegetarian pepperoni' },
    { quantity: 1, unit: '', description: 'can sliced black olives' },
  ],
};

const recipe9 = {
  cookingTime: 75,
  id: 'PIZZAitem8',
  image: 'http://forkify-api.herokuapp.com/images/580542e3ec.jpg',
  publisher: 'BBC Good Food',
  servings: 3,
  sourceUrl: 'https://recipes.timesofindia.com/recipes/pizza/rs56933159.cms',
  title: 'Super Pizza',
  ingredients: [
    { quantity: 3, unit: 'cup', description: 'Flour' },
    { quantity: 0.5, unit: 'cup', description: 'Tomato Sauce' },
    { quantity: 6, unit: '', description: 'Mushroom' },
    { quantity: 6, unit: '', description: 'Mushroom' },
    { quantity: 0.75, unit: 'cup', description: 'Mozzarella' },
    { quantity: 1.5, unit: 'tablespoon', description: 'Dry Yeast' },
  ],
};

const recipe10 = {
  cookingTime: 30,
  id: 'PIZZAitem9',
  image: 'http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg',
  publisher: 'BBC Good Food',
  servings: 4,
  sourceUrl: 'http://www.bbcgoodfood.com/recipes/1649634/pitta-pizzas',
  title: 'Pitta pizzas',
  ingredients: [
    { quantity: 4, unit: '', description: 'large pitta breads' },
    { quantity: 4, unit: 'tbsps', description: 'tomato pure' },
    { quantity: 2, unit: 'tsps', description: 'mixed herbs' },
    { quantity: 2, unit: '', description: 'tomatoes sliced' },
    {
      quantity: 6,
      unit: '',
      description: 'slices salami torn into small pieces',
    },
    { quantity: 50, unit: 'g', description: 'cheddar grated' },
  ],
};

const recipe11 = {
  cookingTime: 30,
  id: 'PIZZAitem10',
  image: 'http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg',
  publisher: 'My Baking Addiction',
  servings: 4,
  sourceUrl: 'http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/',
  title: 'Barbecue Chicken Pizza',
  ingredients: [
    {
      quantity: 1,
      unit: '',
      description: 'store bought pizza crust or refrigerated crust',
    },
    { quantity: 0.5, unit: 'cup', description: 'barbecue sauce' },
    { quantity: 1, unit: 'cup', description: 'cooked and shredded chicken' },
    { quantity: 0.5, unit: 'cup', description: 'thinly sliced red onion' },
    { quantity: 1, unit: '', description: 'orange bell pepper; diced' },
    {
      quantity: 1.75,
      unit: 'cups',
      description: 'sargento monterey jack shredded cheese',
    },
  ],
};

const recipe12 = {
  cookingTime: 60,
  id: 'PIZZAitem0',
  image:
    'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
  publisher: 'Closet Cooking',
  servings: 4,
  sourceUrl:
    'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
  title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',

  ingredients: [
    { quantity: 1.5, unit: 'cups', description: 'warm water' },
    { quantity: 1, unit: '', description: 'package of active dry yeast' },
    { quantity: 3.5, unit: 'cups', description: 'bread flour' },
    { quantity: 2, unit: 'tbsps', description: 'olive oil' },
    { quantity: 2, unit: 'tsps', description: 'salt' },
    { quantity: 1, unit: 'tsp', description: 'sugar' },
    { quantity: null, unit: '', description: 'Olive oil' },
    { quantity: null, unit: '', description: 'Cornmeal' },
    { quantity: null, unit: '', description: 'Tomato sauce' },
    {
      quantity: null,
      unit: '',
      description: 'Mozzarella or parmesan cheese shredded',
    },
    { quantity: null, unit: '', description: 'Feta cheese' },
    { quantity: null, unit: '', description: 'Mushrooms thinly sliced' },
    { quantity: null, unit: '', description: 'Pepperoni thinly sliced' },
    { quantity: null, unit: '', description: 'Sliced ham' },
    { quantity: null, unit: '', description: 'Onions thinly sliced' },
  ],
};

const recipes = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
  recipe9,
  recipe10,
  recipe11,
  recipe12,
];

export const initRecipes = function () {
  localStorage.setItem('recipes', JSON.stringify(recipes));
  localStorage.setItem('recipesFlag', 'true');
};
