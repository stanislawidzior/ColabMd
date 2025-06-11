export function createElement(tag, classNames = [], content = ""){
let element = document.createElement(tag)
if(classNames.length > 0){
    element.classNames = className.join(' ')
}
if(content){
    element.textContent = content;
}
return element
}