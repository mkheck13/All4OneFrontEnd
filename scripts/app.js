


// Say Hello Id's
const sayHelloText = document.getElementById("sayHelloText");
const sayHelloInput = document.getElementById("sayHelloInput");
const sayHelloBtn = document.getElementById("sayHelloBtn");





// Api Calls
async function SayHelloCall() {
    const promise = await fetch("");
    const data = await promise.json();

    console.log(data);

}

// Say Hello Button Event
// sayHelloBtn.addEventListener("click", async () => {

//     let sayHelloGet = await SayHelloCall();

//     console.log(sayHelloGet);

//     sayHelloText.innerText = 
// });