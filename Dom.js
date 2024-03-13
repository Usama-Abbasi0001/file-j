//using id simple
document.getElementById("Lorem").innerHTML="This work on Dom Using ID";
document.getElementById("Lorem").style.color="pink";

let gear = document.querySelector(".lipsm")

gear.style.color="pink";
      // Get all <p> elements in the document
      var paragraphs = document.getElementsByTagName("p");

      // Loop through the <p> elements and change their color
      for (var i = 0; i < paragraphs.length; i++) {
          paragraphs[i].style.color = "blue";
      }

// using of id..
var Sheet = document.getElementById("Sheet");
//Sheet.textContent = "Hello IS Dom";
//Sheet.innerText = "Usama With Dom";
Sheet.innerHTML="Osama Bin Ladin";
Sheet.style.borderBottom = "2px solid gold";
Sheet.style.color="blue";

var work = document.getElementById("work");
work.innerHTML= "Attact In Amaric 9-11";
work.style.color="green";

//using of class
var Apprex = document.getElementsByClassName("Apprex");
Apprex[0].innerText= 'Owner';
Apprex[1].innerText= 'hyderabad';
Apprex[2].innerText= 'Atto-Ban';
Apprex[3].innerText= 'Tando';

//using Quart Selector
var z = document.querySelector(".dolor");
z.style.color="red";

 document.querySelector("#sit").style.color='green';

 document.querySelector("input").style.border="1px solid green";
 document.querySelector("input").value="your name";
 document.querySelector("input").style.backgroundColor='red';
 document.querySelector("input").style.color='white';

 var button = document.querySelector("input[type='button']");
 button.style.color='red';
 button.style.backgroundColor='pink';


var image = document.getElementById("picture");
image.setAttribute("src", "technology 1.png");