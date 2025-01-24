// Restaurant Picker Id's
const restaurantPickerText = document.getElementById("restaurantPickerText");
const restaurantPickerInput = document.getElementById("restaurantPickerInput");
const restaurantPickerBtn = document.getElementById("restaurantPickerBtn");

// Restaurant Picker Api Call
const RestaurantPickerApi = async (pizzaMexicanFastFood) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/${pizzaMexicanFastFood}`);
    const data = await promise.text();
    return data;
};

// Restaurant Picker Button Event
restaurantPickerBtn.addEventListener("click", async () => {
    restaurantPickerText.textContent = await RestaurantPickerApi(restaurantPickerInput.value);
});