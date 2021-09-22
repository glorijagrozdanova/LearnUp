const navbarToggler = document.querySelector(".navbar-toggler");
/*the list within the navbar*/
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a"); /*this return a nodelist with all the navbar links including the navbar-brand*/
/*the list has a length property and the objects can be accessed via their index*/

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

randomNumber = Math.floor(Math.random()*3+1);

/*let's add en event listener for a click event of navbar toggler*/

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler"); /*open-navba-toggler claass will be added to navbarToggler if it does not already exist or it will be removed if it already exists*/
    navbarMenu.classList.toggle("open");
}
/*we need the navigation menu to close whenever we make a selection*/
/*next step is to look through the navbar links node list and add an event listener for each element of the list*/
navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() { 
    /*first we need to check if the navbar menu is indeed opened*/
    if(navbarMenu.classList.contains("open"))
    {
        /*in this case we could either remove the open classes or visually click the navbar toggler*/
        /*we'll go with the second option*/
        navbarToggler.click();
    }
}


/*we should look through the node list containing the elements adding the 
drag related event listeners to each element */
/*we can do this using the forEach method  over the draggable list
and for each elem we want to add an event listener for the dragstart event
and whenever the dragstart event occurs, we want to call the 
dragStart function*/
/*Fires as soon as the user starts dragging an item
 - This is where we can define the drag data:
 that is the data which is transfered during the drag and drop operation */
draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag); 
    // Fires when a dragged item (element or text selection) is dragged
    // elem.addEventListener("dragend", dragEnd);
    // Fires when a drag operation ends
    // (such as releasing a mouse button or hitting the Esc key)
    // - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {

    elem.addEventListener("dragenter", dragEnter); 
    // Fires when a dragged item enters a valid drop target
    elem.addEventListener("dragover", dragOver); 
    // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
    elem.addEventListener("dragleave", dragLeave); 
    // Fires when a dragged item leaves a valid drop target
    elem.addEventListener("drop", drop); 
    // Fires when an item is dropped on a valid drop target
});
//Drag and Drop Functions

//here we will define the data for the drag and drop operation
//each drag event has a data transfer property that holds the
//event's data
/*this property also has methods to manage the drag data*/
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    /*the data transfer propery is a crucial part od the drag and drop operation
    since the data set in the dragStart event will be available to be read
    and handled in the drop event */

}

function dragEnter(event) {
     //here we want to add the class droppable-hover to the taret droppable element
     //but only if the target element does not already contain the dropped class
     if(!event.target.classList.contains("dropped"))
     {
        event.target.classList.add("droppable-hover");
     }
}

function dragLeave(event) {
    //on dragLeave we want to remove the droppable-hover class
    if(!event.target.classList.contains("dropped")) {

        event.target.classList.remove("droppable-hover");
    }
   
}
function dragOver(event) {
    /*we want to prevent the default behaviour which is to not allow a drop */
    //we only want to make the element droppable if it doesn't already contain
    //the class dropped
    if(!event.target.classList.contains("dropped")) {
        event.preventDefault();

    }
    
}

function drop(event) {
    /*now, if for example, we dropped an image or a link in a droppable element,
    then the default event handling by the browser would be to open the link.*/

    event.preventDefault();
    event.target.classList.remove("droppable-hover");
    /*next step is to access the dragged data and store it into a variable */
    //we want to get the data that was set as a type text in the method
    const draggableElementData = event.dataTransfer.getData("text");     
    //once we have accessed the dragged data, we can handle it anywhere we want
    //now he draggableElementData is the dragged's element id and we need to compare it
    //with the data-draggable-id attribute from the droppable target
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    const srcImg = document.getElementById(droppableElementData).src;
    if(draggableElementData === droppableElementData) {
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        event.target.style.backgroundColor = draggableElement.style.color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        if(draggableElement.tagName == 'IMG'){
            event.target.insertAdjacentHTML("afterbegin", `<img src="${srcImg}" class="${draggableElementData}">`);
            console.log(srcImg);
        }
        else{
            event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);

        }
        

    }

    
}
var score1=0;
var int11 = Math.floor(Math.random() * 10) + 1;
var int21 = Math.floor(Math.random() * 10) + 1;
var answer1 = int11 + int21;
document.getElementById('question1').innerHTML = int11 + " " + "+" + " " + int21;


function quiz1() {
  

  var user_answer = document.getElementById('answer1').value;

   if (user_answer == answer1) {
          alert("Correct");
          score1=(score1)+1;
          document.getElementById('score1').innerHTML =score1;     
      } else {
          alert("OOPS Try Again!")
          score1= (score1)-2;
          document.getElementById('score1').innerHTML =score1;
      }
  
   // you need to reset the int1, int2, and answer by generating new numbers
   int11 = Math.floor(Math.random() * 10) + 1;
   int21 = Math.floor(Math.random() * 10) + 1;
   answer1 = int11 + int21;
   document.getElementById('question1').innerHTML = int11 + " " + "+" + " " + int21;
  
}
var score2=0;
var int12 = Math.floor(Math.random() * 10) + 1;
var int22 = Math.floor(Math.random() * 10) + 1;
var answer2 = int12 - int22;
document.getElementById('question2').innerHTML = int12 + " " + "-" + " " + int22;


function quiz2() {
  

  var user_answer = document.getElementById('answer2').value;

   if (user_answer == answer2) {
          alert("Correct");
          score2=(score2)+1;
          document.getElementById('score2').innerHTML =score2;     
      } else {
          alert("OOPS Try Again!")
          score2= (score2)-2;
          document.getElementById('score2').innerHTML =score2;
      }
  
   // you need to reset the int1, int2, and answer by generating new numbers
   int12 = Math.floor(Math.random() * 10) + 1;
   int22 = Math.floor(Math.random() * 10) + 1;
   answer2 = int12 - int22;
   document.getElementById('question2').innerHTML = int12 + " " + "-" + " " + int22;
  
}



  var colorArray=["#66CDAA","#87CEFA","#BC8F8F","#800000","#FF0000","#C0392B","#FF1493","#9932CC","#E9967A","#FFA500","#00FA9A","#C71585","#FF00FF","#7B68EE",
  "#4B0082","#F08080","#FF0000","#FF8C00","#FFD700","#00FF00","#228B22","#20B2AA","#DC143C","#00008B","#B00000", "#FF0000"];
  var cardState;
  var currentQuestion=0;
  var qbank=[["Aa","Apple"],["Bb","Ball"],["Cc","Cake"],["Dd","Duck"],["Ee","Egg"],["Ff","Fish"],["Gg","Giraffe"],
  ["Hh","Heart"],["Ii","Ice Cream"],["Jj","Jellyfish"],["Kk","Key"],["Ll","Lemon"],["Mm","Moon"],["Nn","Number"],["Oo","Orange"],["Pp","Pig"],
  ["Qq","Queen"],["Rr","Robot"],["Ss","Sun"],["Tt","Turtle"],["Uu","Umbrella"],["Vv","Violin"],["Ww","Watermelon"],["Xx","Xylophone"],["Yy","Yarn"],["Zz","Zebra"]];
  
   
  
   
   
  
 window.onload = function() {
    cardState=0;
    var color1=colorArray[Math.floor(Math.random()*colorArray.length)];
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
    $("#card1").css("background-color",color1);
    $("#card2").css("background-color","#34495E");
    $("#card2").css("top","200px");
    $("#cardArea").on("click",function(){
     if(cardState!=1){
      cardState=1;
      //togglePosition();
      $("#card1").animate({top: "-=200"}, 150, function() {cardState=0;togglePosition();});
      $("#card2").animate({top: "-=200"}, 150, function() {togglePosition2();});
     }//if
    });//click function
    currentQuestion++;
    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="nextButton">NEXT</div>');
    $("#nextButton").on("click",function(){
     if(currentQuestion<qbank.length){beginActivity();}
     else{displayFinalMessage();}
    });//click function

   

    
 }
 function beginActivity(){
    cardState=0;
    var color1=colorArray[Math.floor(Math.random()*colorArray.length)];
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
    $("#card1").css("background-color",color1);
    $("#card2").css("background-color","#34495E");
    $("#card2").css("top","200px");
    $("#cardArea").on("click",function(){
     if(cardState!=1){
      cardState=1;
      //togglePosition();
      $("#card1").animate({top: "-=200"}, 150, function() {cardState=0;togglePosition();});
      $("#card2").animate({top: "-=200"}, 150, function() {togglePosition2();});
     }//if
    });//click function
    currentQuestion++;
    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="nextButton">NEXT</div>');
    $("#nextButton").on("click",function(){
     if(currentQuestion<qbank.length){beginActivity();}
     else{displayFinalMessage();}
    });//click function
   }//beginactivity

 function togglePosition(){
    if($("#card1").position().top==-200){$("#card1").css("top","200px");};
   }//toggle
   
   function togglePosition2(){
    if($("#card2").position().top==-200){$("#card2").css("top","200px");};
   }//toggle2
   
   function displayFinalMessage(){
    $("#buttonArea").empty();
    $("#cardArea").empty();
    $("#cardArea").append('<div id="finalMessage">WELL DONE!</div>');
   }//final message

    
     

  
 
function smeniGolemina(size) {
  
    // Set value of the parameter as fontSize
    var sekcii = document.getElementsByTagName('section');
    for(var i = 0; i < sekcii.length; i ++)
    {
        sekcii[i].style.fontSize = size;
    }

} 


let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');
for(var i = 0; i < btn.length; i ++)
{
    btn[i].addEventListener('click', function(){
        let momentalen = document.getElementsByClassName('active');
        momentalen[0].className = momentalen[0].className.replace("active", "");
        this.className += " active";
    })
}



