var container=document.querySelector(".container")
var search=document.getElementById("search")
var quotes=container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<quotes.length;count=count+1){
        var name=quotes[count].querySelector("p").textContent

        if(name.toUpperCase().indexOf(enteredvalue)<0)
        {
            quotes[count].style.display="none"
        }
        else{
            quotes[count].style.display="block"
        }
    }
})