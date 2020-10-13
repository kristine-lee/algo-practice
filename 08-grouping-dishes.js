/*
From: https://app.codesignal.com/interview-practice/task/xrFgR63cw7Nch4vXo/description
You are given a list of dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.
*/

function groupingDishes(dishes) {
  let hashDishes = {};
  let dishName;

  for (let i = 0; i < dishes.length; i++) {
    dishName = dishes[i][0];
    for (let j = 1; j < dishes[i].length; j++) {
      if (!hashDishes[dishes[i][j]]) {
        hashDishes[dishes[i][j]] = [dishName]
      } else {
        hashDishes[dishes[i][j]].push(dishName)
      }
    }
  }

  let ingredientGroup = [];

  for (const [key, value] of Object.entries(hashDishes)) {
    if (value.length >= 2) {
      let array = []
      array.push(key).concat(value.sort())
      ingredientGroup.push(array)
    }
  }
  return ingredientGroup.sort()
}


