// Magic 8 Ball Id's
const magic8BallText = document.getElementById("magic8BallText");
const magic8BallInput = document.getElementById("magic8BallInput");
const magic8BallBtn = document.getElementById("magic8BallBtn");

// Magic 8 Ball Api Call
const Magic8BallApi = async (input) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/MagicEightBall/Question/${input}`);
    const data = await promise.text();
    return data;
};

// Magic 8 Ball Button Event
magic8BallBtn.addEventListener("click", async () => {
    magic8BallText.textContent = await Magic8BallApi(magic8BallInput.value);
});