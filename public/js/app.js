$(document).foundation()

const allMenuItems = [];
const allIngredients = [];


function clearTodaysMenu(){
    $("ul#todaysMenuSection li").remove();
}

// Click Listeners for all days of the week
$("#mondayButton").on("click", () => {
    clearTodaysMenu()
    $("<li>").appendTo("ul#todaysMenuSection").prepend("Mondays Menu Placeholder")
});

$("#tuesdayButton").on("click", () => {
    clearTodaysMenu()
    $("<li>").appendTo("ul#todaysMenuSection").prepend("Tuesday Menu Placeholder")
});

$("#wednesdayButton").on("click", () => {
    clearTodaysMenu()
    $("<li>").appendTo("ul#todaysMenuSection").prepend("Wednesday Menu Placeholder")
});

$("#thursdayButton").on("click", () => {
    clearTodaysMenu()
    $("<li>").appendTo("ul#todaysMenuSection").prepend("Thursday Menu Placeholder")
});

$("#fridayButton").on("click", () => {
    clearTodaysMenu()
    $("<li>").appendTo("ul#todaysMenuSection").prepend("Friday Menu Placeholder")
});

$("#saturdayButton").on("click", () => {
    clearTodaysMenu()
    $("<li>").appendTo("ul#todaysMenuSection").prepend("Saturday Menu Placeholder")
});

$("#sundayButton").on("click", () => {
    clearTodaysMenu()
    $("<li>").appendTo("ul#todaysMenuSection").prepend("Sunday Menu Placeholder")
})

// Click listener for more ingredients button
$("#moreIngredientsButton").on("click", () => {
    $(`<div class="cell ingredientForm">
    <input type="text" name="newIngredient">
  </div>`).prependTo("div#ingredientsButtonDiv")
})
// click listener for add menu item button
$("#addMenuItemButton").on("click", () => {
    const menuItem = $(":input#newMenuItem").val();
    allMenuItems.push(menuItem);
    const ingredients = $("input[name^=newIngredient]").map(function(idx, elem){
        return $(elem).val();
    }).get();
    allIngredients.push(ingredients)
});
console.log(allMenuItems);
console.log(allIngredients)

