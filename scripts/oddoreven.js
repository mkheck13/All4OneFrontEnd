// Odd Or Even Id's
const oddEvenText = document.getElementById("oddEvenText");
const oddEvenInput = document.getElementById("oddEvenInput");
const oddEvenBtn = document.getElementById("oddEvenBtn");

// Odd Or Even Api Call
const OddEvenApi = async (input) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${input}`);
    const data = await promise.text();
    return data;
};

// Odd Or Even Button Event
oddEvenBtn.addEventListener("click", async () => {
    oddEvenText.textContent = await OddEvenApi(oddEvenInput.value);
});