const button=document.getElementById("button-reg")

button.addEventListener("click",(e)=>{
const para=document.getElementById("jokes")
let parsed;
const val=fetch("https://official-joke-api.appspot.com/random_joke").then(async (response)=>{
    parsed=await response.json();
    console.log(parsed)
    para.innerText=parsed.punchline
    console.log(parsed.punchline)
})

})


console.log(`Outside the fetch function ${val}`)