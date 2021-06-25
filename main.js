addEventsCarousel()

function addEventsCarousel(){
    let buttonsLeft = document.getElementsByName("btn-left")
    let buttonsRigth = document.getElementsByName("btn-right")

    for(let i=0; i<buttonsLeft.length;i++){
        buttonsLeft[i].addEventListener("click",function(event){moveScroll(event,"left")})
    }

    for(let i=0; i<buttonsRigth.length;i++){
        buttonsRigth[i].addEventListener("click",function(event){moveScroll(event,"right")})
    }
}



function moveScroll(event,type){

    let boton = event.path[0];

    let siblignsButton = boton.parentNode.parentNode.childNodes


    for(let index in siblignsButton){

        let cadena = siblignsButton[index].className
        
        if(cadena !== undefined && cadena.includes("carousel")){

            if(type=="right"){
                siblignsButton[index].scrollLeft += 420;
            }
            else if(type=="left"){
                siblignsButton[index].scrollLeft -= 420;
            }            
        }
        
    }

}

