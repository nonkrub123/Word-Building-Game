//example 1 
// document.querySelector('#')
// document.querySelector('.')
// document.querySelectorAll

// document.getElementById("changeTextButton").addEventListener('click', () =>{
//     console.log(this);
// }) // arrow call the global

document.getElementById("changeTextButton").addEventListener('click', function (){
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph.textContent);
    paragraph.textContent = "Text has been changed";
    console.log(paragraph.textContent);
}) // arrow call the global

//example 2

document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let citieslist = document.getElementById("citiesList");
    let firstcity = citieslist.firstElementChild;
    console.log(firstcity);
    firstcity.classList.add("highlight");
    console.log(firstcity);
})

//example 3

document.getElementById("changeOrder").addEventListener("dblclick", function changetea(){
    let teaorder = document.getElementById("coffeeOrder");
    let order = teaorder.firstElementChild;
    order.innerHTML = "Espresso";
    console.log("Change successful");

    let coffeetype = document.getElementById("coffeeType");
    coffeetype.textContent = "Espresso";
    coffeetype.style.backgroundColor = "brown";
    coffeetype.style.padding = "5px";
})

//example 4

document.getElementById("addNewItem").addEventListener('click', function addNewItem(){

    let newitem = document.createElement("li");
    newitem.textContent = "Eggs"

    let shoppingList = document.getElementById("shoppingList").appendChild(newitem);
    console.log(shoppingList);
})

//example5

document.getElementById("removeLastTask").addEventListener('click', function(){
    let taskList = document.getElementById("taskList");
    taskList.lastChild.remove();
})

//example 6

document.getElementById("clickMeButton").addEventListener('click', function(){
    alert("Sorry but I love emilia")
})

//example 7

document.getElementById("teaList").addEventListener("click", function(event){
    clickedTea = event.target
    console.log(clickedTea);
    if(event.target && event.target.matches('.teaItem')){
        alert(`You selected a ${clickedTea.textContent}`)
    }
})

//example 8

document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();
    let label = document.getElementById("feedbackForm").querySelector('label').textContent;
    console.log(label);
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);

    document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback}`;

})

//example 9

document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById("domStatus").textContent = "DOM FULLY LOADED";
})

// example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
    console.log(descriptionText);
})

