// Restaurant Picker Id's
const restaurantPickerText = document.getElementById("restaurantPickerText");
const pizzaBtn = document.getElementById("pizzaBtn");
const mexicanBtn = document.getElementById("mexicanBtn");
const fastFoodBtn = document.getElementById("fastFoodBtn");


// Restaurant Picker Api Call
const RestaurantPickerApi = async (pizzaMexicanFastFood) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/${pizzaMexicanFastFood}`);
    const data = await promise.text();
    return data;
};

// Restaurant Picker Button(s) Event
pizzaBtn.addEventListener("click", () => {
    RestaurantPickerApi("pizza").then(paramater => {
        document.getElementById("restaurantPickerText").textContent = paramater;
    });
});

mexicanBtn.addEventListener("click", () => {
    RestaurantPickerApi("mexican").then(paramater => {
        document.getElementById("restaurantPickerText").textContent = paramater;
    });
});

fastFoodBtn.addEventListener("click", () => {
    RestaurantPickerApi("fastfood").then(paramater => {
        document.getElementById("restaurantPickerText").textContent = paramater;
    });
});