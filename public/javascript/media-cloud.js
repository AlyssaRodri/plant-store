const mloptions = {
    cloud_name: 'plantblog',
    api_key: '278972643829527',
    username: 'alyssa.taylor.rodriguez@gmail.com',
    button_class: 'myBtn',
    button_caption: 'View Our Image Library!',
    default_transformations: [{quality: "auto"},{format: "auto"}],    
    insert_transformation: true,
    }

function insertHandler(data){
    console.log(data);
    // create a DOM element for the img tag
    // the src attribite will be secure_url
    // insert the image into the DOM for the page
const img_url = (data.url);
let img = document.createElement("img");
// img.src = img_url;

img.setAttribute("src", img_url);
img.setAttrbute("style", "border: 10px solid orange; border-radius: 10px;")
// img.style.border = "10px solid orange";
// img.style.borderRadius = "10px";

document.getElementById("image-here").appendChild(img);
}
 
window.ml = cloudinary.createMediaLibrary(mloptions, {insertHandler: insertHandler}, "#my_btn")




