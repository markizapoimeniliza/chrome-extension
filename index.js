const input = document.getElementById("in")
const button = document.getElementById("btn")
let myLeads = []
const ullist = document.getElementById("list")
let btn2 = document.getElementById("stbtn")
const tabtn = document.getElementById("tabtn")

const leadFromlocalStorage = JSON.parse(localStorage.getItem("MyLeads"))



tabtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow: true},function (tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("MyLeads",JSON.stringify(myLeads))
        render(myLeads)})

})
    





if(leadFromlocalStorage){
    myLeads = leadFromlocalStorage
    render(myLeads)
}


function render(cool){
    let listItems = ""
    for (let i = 0; i < cool.length; i++){
        listItems += `<li> 
        <a target = "_blank" href = "${cool[i]}" >
        ${cool[i]}
        </a> 
        </li>`
    }
     ullist.innerHTML = listItems
     
    }



btn2.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

button.addEventListener("click",function (){
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("MyLeads", JSON.stringify(myLeads))
    render(myLeads)
})


// const welcome = document.getElementById("greeting")

// function greet(greeting,Name,emoji){
//     welcome.textContent = `${greeting}, ${Name}, ${emoji}` 
// }
// greet("Welcome back","Elizaveta","🧛🏻")



// function add(number1,number2){
//     return number1 + number2
// }

// console.log(add(10,102))

// function Getfirst(arr){
//     return arr[2]
// }

// console.log(Getfirst([123,124,125]))

// var currentViews = null
// var trfl = Boolean(34)
// console.log(trfl)

// myLeads = JSON.parse(myLeads)
// myLeads.push("124")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
// myLeads = JSON.parse(myLeads)
// myLeads.push("1111")
// console.log(myLeads)


// false
// true
// true
// false
// true
// true











// localStorage.setItem("MyItems","coke")
// localStorage.clear()
// console.log(localStorage.getItem("My items"))
// output: null

// butt.addEventListener("click",function(){
//    Eli.undo()
// })! methods ONLY TO OBJECTS!!!!!!!


// (x === 5) ? console.log (true)  : console.log (3)


// var sender = "Elizaveta"
// var recipient = "Ann"

// const email = `
// Hey,${recipient}.
//  How is it going?
//  It's ${sender}
//  `


// console.log(email)
 

// var div = document.getElementById("div")

// div.innerHTML = "<button onclick = 'buy()''>" + "Buy!" + "</button>"

// function buy(){
//     div.innerHTML += "<p>Thank you for buying!</p>"
// }



//const fullPrice - 1
//const basePrice(1 stuff)
//const discount(1 stuff)


// let box = document.getElementById("bX")

// box.addEventListener("click",function(){
//     console.log("I want to open the box!")
// })



// input.addEventListener("click",malvina)

// function malvina(){
//    console.log("Coding")
// }

// const player = "Per"
// let credits = 15

// credits -= 10

