// Add Two Number Id's
const revAlphaText = document.getElementById("revAlphaText");
const revAlphaInput = document.getElementById("revAlphaInput");
const revAlphaBtn = document.getElementById("revAlphaBtn");

// Add Two Number Api Call
const ReverseAlphaApi = async (input) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/ReverseItAlpha/ReverseAlpha/${input}`);
    const data = await promise.text();
    return data;
};

// Add Two Number Button Event
revAlphaBtn.addEventListener("click", async () => {
    revAlphaText.textContent = await ReverseAlphaApi(revAlphaInput.value);
});