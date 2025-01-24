//MadLib Id's
const madlibText = document.getElementById("madlibText");
const madlib1Input = document.getElementById("madlib1Input");
const madlib2Input = document.getElementById("madlib2Input");
const madlib3Input = document.getElementById("madlib3Input");
const madlib4Input = document.getElementById("madlib4Input");
const madlib5Input = document.getElementById("madlib5Input");
const madlib6Input = document.getElementById("madlib6Input");
const madlib7Input = document.getElementById("madlib7Input");
const madlib8Input = document.getElementById("madlib8Input");
const madlib9Input = document.getElementById("madlib9Input");
const madlib10Input = document.getElementById("madlib10Input");
const madlibBtn = document.getElementById("madlibBtn");

//MadLib Api Call
const AddTwoNumApi = async (age, familyRelation, job, stageOfLife, thing, size, humanSettlment, toyBrand, profession, celestialBody) => {
    const promise =await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/MabLib/MabLib/${age}/${familyRelation}/${job}/${stageOfLife}/${thing}/${size}/${humanSettlment}/${toyBrand}/${profession}/${celestialBody}`);
    const data = await promise.text();
    return data;
};

//MadLib Button Event
madlibBtn.addEventListener("click", async () => {
    madlibText.textContent = await AddTwoNumApi(madlib1Input.value, madlib2Input.value , madlib3Input.value , madlib4Input.value , madlib5Input.value , madlib6Input.value , madlib7Input.value , madlib8Input.value , madlib9Input.value , madlib10Input.value);
});

