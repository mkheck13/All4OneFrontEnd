// Say Hello Id's
const sayHelloText = document.getElementById("sayHelloText");
const sayHelloInput = document.getElementById("sayHelloInput");
const sayHelloBtn = document.getElementById("sayHelloBtn");

// Say Hello Api Call
const SayHelloApi = async (userName) => {
    const promise = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net//SayHello/SayHello/${userName}`);
    const data = await promise.text();
    // console.log(data);
    return data;
};

// Say Hello Button Event
sayHelloBtn.addEventListener("click", async () => {
    sayHelloText.textContent = await SayHelloApi(sayHelloInput.value);
});

