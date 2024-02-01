// The window.Console property returns a reference to the console object, which provides methods for logging information to the browser's console.
console.log("JS file connected");

const vectorgraphics= document.querySelector('')

function logThisid(){
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorgraphics.addEventListener('click', logThisid);