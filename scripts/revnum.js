// Add Two Number Id's
const revNumText = document.getElementById("revNumText");
const revNumInput = document.getElementById("revNumInput");
const revNumBtn = document.getElementById("revNumBtn");

// Add Two Number Api Call
const ReverseNumApi = async (userNum) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/ReverseItNum/ReverseItNum/${userNum}`);
    const data = await promise.text();
    return data;
};

// Add Two Number Button Event
revNumBtn.addEventListener("click", async () => {
    revNumText.textContent = await ReverseNumApi(revNumInput.value);
});