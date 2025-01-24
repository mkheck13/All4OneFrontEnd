// Asking Questions Id's
const askNameInput = document.getElementById("askNameInput");
const askTimeInput = document.getElementById("askTimeInput");
const askQuestionText = document.getElementById("askQuestionText");
const askQuestionBtn = document.getElementById("askQuestionBtn");

// Asking Questions Api Call
const AskingQuestionApi = async (userName, wakeUpTime) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/AskingQuestions/AskingQuestions/${userName}/${wakeUpTime}`);
    const data = await promise.text();
    return data;
};

// Asking Questions Button Event
askQuestionBtn.addEventListener("click", async () => {
    askQuestionText.textContent = await AskingQuestionApi(askNameInput.value, askTimeInput.value);
});