const displayContent=(content)=>{
    display.value+=content
}
const clearContent=()=>{
    display.value=""
    display.placeholder="0"
}
const showResult=()=>{
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value=""
        display.placeholder="Invalid Expression"
    }
}
const clearLast = () => {
  display.value=display.value.slice(0,-1)
}
 
