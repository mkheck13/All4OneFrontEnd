// Add Two Number Id's
const addNumText = document.getElementById("addNumText");
const numOneInput = document.getElementById("numOneInput");
const numTwoInput = document.getElementById("numTwoInput");
const add2NumBtn = document.getElementById("add2NumBtn");

// Add Two Number Api Call
const AddTwoNumApi = async (num1, num2) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/AddTwoNumbers/AddTwoNumbers/${num1}/${num2}`);
    const data = await promise.text();
    return data;
};

// Add Two Number Button Event
add2NumBtn.addEventListener("click", async () => {
    addNumText.textContent = await AddTwoNumApi(numOneInput.value, numTwoInput.value);
});