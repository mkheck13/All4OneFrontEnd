// Greater Then, Less Then Id's
const greaterText = document.getElementById("greaterText");
const numOneGreatInput = document.getElementById("numOneGreatInput");
const numTwoGreatInput = document.getElementById("numTwoGreatInput");
const greaterThenBtn = document.getElementById("greaterThenBtn");

// Greater Then, Less Then Api Call
const GreaterThenApi = async (num1, num2) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/GreaterThen/GreaterThen/${num1}/${num2}`);
    const data = await promise.text();
    return data;
};

// Greater Then, Less Then Button Event
greaterThenBtn.addEventListener("click", async () => {
    greaterText.textContent = await GreaterThenApi(numOneGreatInput.value, numTwoGreatInput.value);
});