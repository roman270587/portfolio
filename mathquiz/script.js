"use strict";let score,number1,number2,number3,result,challenge,userInput,next=!0;function renderField(){score=localStorage.getItem("score");for(let e=1;e<=9;e++)document.getElementById(e).style.backgroundColor="#ACCCC2",document.getElementById(e).style.color="black",document.getElementById(e).style.fontWeight="normal",document.getElementById(e).style.borderColor="transparent",document.getElementById(e).style.boxShadow="none";for(let t=1;t<=8;t++)document.getElementById("line"+t).style.backgroundColor="#ACCCC2",document.getElementById("line"+t).style.borderColor="#ACCCC2";for(let r=1;r<=score-1;r++)document.getElementById(r).style.backgroundColor="#A7171E",document.getElementById(r).style.color="white",document.getElementById(r).style.fontWeight="bold",document.getElementById(r).style.borderColor="lightgrey",document.getElementById(r).style.boxShadow="0 0 2px white",document.getElementById(r).style.animationName="blink",document.getElementById(r).style.animationDuration="0.2s";if(10==score){for(let l=1;l<=score-1;l++)document.getElementById(l).style.animationName="blink",document.getElementById(l).style.animationDuration="5s";for(let n=1;n<=score-2;n++)document.getElementById("line"+n).style.backgroundColor="#A7171E",document.getElementById("line"+n).style.borderColor="#A7171E"}else for(let o=1;o<=score-1;o++)document.getElementById("line"+o).style.backgroundColor="#A7171E",document.getElementById("line"+o).style.borderColor="#A7171E";document.getElementById("line3").style.backgroundColor="transparent",document.getElementById("line6").style.backgroundColor="transparent"}function newGame(){deleteLocalStorage(),score=1,next=!0,localStorage.setItem("score",score),location.reload(),nextGame()}function nextGame(){0!=score&&!0==next&&(10==score?(textField.setAttribute("placeholder","Congrats!"),document.getElementById("textField").focus()):(renderField(),play(score))),next=!1}function play(e){if(textField.value="",getLocalStorage(),document.getElementById("textField").focus(),null==number1||null==number2||null==number3||null==result||null==challenge)switch(e){case"1":result=(number1=Math.floor(50*Math.random())+1)+(number2=Math.floor(50*Math.random())+1),challenge=number1+" + "+number2,setLocalStorage();break;case"2":result=(number1=Math.floor(100*Math.random())+51)-(number2=Math.floor(50*Math.random())+1),challenge=number1+" - "+number2,setLocalStorage();break;case"3":result=(number1=Math.floor(10*Math.random())+1)*(number2=Math.floor(10*Math.random())+1),challenge=number1+" * "+number2,setLocalStorage();break;case"4":number2=10,result=(number1=Math.floor(100*Math.random()))/number2,challenge=number1+" / "+number2,setLocalStorage();break;case"5":number1=Math.floor(100*Math.random())+1,result=number1+(number2=Math.floor(100*Math.random())+1)+(number3=Math.floor(100*Math.random())+1),challenge=number1+" + "+number2+" + "+number3,setLocalStorage();break;case"6":number1=Math.floor(100*Math.random())+1,result=number1-(number2=Math.floor(100*Math.random())+1)-(number3=Math.floor(100*Math.random())+1),challenge=number1+" - "+number2+" - "+number3,setLocalStorage();break;case"7":number1=Math.floor(100*Math.random())+1,result=number1+(number2=Math.floor(100*Math.random())+1)-(number3=Math.floor(100*Math.random())+1),challenge=number1+" + "+number2+" - "+number3,setLocalStorage();break;case"8":result=Math.pow(number1=Math.floor(3*Math.random())+1,number2=Math.floor(3*Math.random())+1),challenge=number1+"^"+number2,setLocalStorage();break;case"9":result=Math.pow(number1=Math.floor(5*Math.random())+1,number2=Math.floor(5*Math.random())+1),challenge=number1+"^"+number2,setLocalStorage()}console.log("Score = "+e+"  |  Challenge = "+challenge+"  |  Result = "+result),textField.setAttribute("placeholder",challenge),buttonSubmit.addEventListener("click",submit)}reset(),score=localStorage.getItem("score"),renderField(),null!=score?(0==score&&(textField.setAttribute("placeholder","Click new to start"),document.getElementById("textField").focus()),nextGame()):(score=0,localStorage.setItem("score",score),textField.setAttribute("placeholder","Click new to start"),document.getElementById("textField").focus());let input=document.getElementById("textField");function submit(){if("Right"==textField.getAttribute("placeholder")||"Click next"==textField.getAttribute("placeholder")){textField.value="",setTimeout(function e(){textField.style.color="black",textField.value=""},1e3),textField.setAttribute("placeholder","Click next");return}return(""!=(userInput=textField.value)&&console.log("User input = "+userInput),userInput==result&&""!=userInput)?(console.log("true"),9!=score&&(textField.value="Right"),setTimeout(function e(){textField.style.color="black",textField.value=""},1e3),score++,localStorage.setItem("score",score),deleteLocalStorage(),10==score)?(renderField(),location.reload(),!0):(textField.setAttribute("placeholder","Click next"),reset(),renderField(),next=!0,!0):""!=textField.value?(console.log("false"),textField.style.color="red",textField.value="Wrong",document.getElementById(score).style.animationName="blinkWrong",document.getElementById(score).style.animationDuration="2s",renderField(),setTimeout(function e(){textField.style.color="black",textField.value="",location.reload()},2e3),reset(),!1):void(next=!1)}function reset(){number1="",number2="",number3="",challenge="",userInput=""}function setLocalStorage(){localStorage.setItem("number1",number1),localStorage.setItem("number2",number2),localStorage.setItem("number3",number3),localStorage.setItem("result",result),localStorage.setItem("challenge",challenge)}function getLocalStorage(){number1=localStorage.getItem("number1"),number2=localStorage.getItem("number2"),number3=localStorage.getItem("number3"),result=localStorage.getItem("result"),challenge=localStorage.getItem("challenge")}function deleteLocalStorage(){localStorage.removeItem("number1"),localStorage.removeItem("number2"),localStorage.removeItem("number3"),localStorage.removeItem("result"),localStorage.removeItem("challenge")}input.addEventListener("keyup",function(e){"Enter"===e.key&&(e.preventDefault(),"Congrats!"==textField.getAttribute("placeholder")||"Click new to start"==textField.getAttribute("placeholder")?document.getElementById("buttonNewGame").click():(document.getElementById("buttonNextGame").click(),document.getElementById("buttonSubmit").click()))});