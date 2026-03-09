// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
// 1
export function cookingStatus(time) {
  if (time === undefined) {
    console.log("You forgot to set the timer.");
    return "You forgot to set the timer.";
  } else if (time === 0) {
    console.log("Lasagna is done.");
    return "Lasagna is done.";
  } else {
    console.log("Not done, please wait.");
    return "Not done, please wait.";
  }
}

export function preparationTime(array, time) {
  if (time === undefined) {
    console.log(array.length * 2);
    return array.length * 2;
  } else {
    console.log(array.length * time);
    return array.length * time;
  }
}

export function quantities(array) {
  const obj = {
    noodles: 0,
    sauce: 0,
  };

  array.forEach((layer) => {
    if (layer === "noodles") {
      obj.noodles += 50;
    }
    if (layer === "sauce") {
      obj.sauce += 0.2;
    }
  });

  return obj;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, amount) {
  const scale = {};
  for (const key in recipe) {
    scale[key] = recipe[key] * (amount / 2);
  }
  console.log(scale);
  return scale;
}
