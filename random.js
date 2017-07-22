let pix = ["images/left.jpg", "images/right.jpg"]


//create a function named displayImage
//it should not have any values passed into it

function displayImage(){
    var num = Math.floor(Math.random() * (pix.length+1));
    document.getElementById('here').src = pix[num];
}

displayImage();

let raw = document.getElementById('here');
raw.addEventListener('click', handleClick);

function handleClick(MouseEvent){
    displayImage();
    /*let targ = MouseEvent.target.src;
    raw.src = displayImage();*/
}