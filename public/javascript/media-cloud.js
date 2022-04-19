const mloptions = {
    cloud_name: 'plantblog',
    api_key: '278972643829527',
    username: 'alyssa.taylor.rodriguez@gmail.com',
    uploadPreset: 'unsigned',
    button_class: 'myBtn',
    button_caption: 'View Our Image Library!',
    default_transformations: [{quality: "auto"},{format: "auto"}],    
    insert_transformation: true,
}

const handleInsert = (data) => {
    // console.log(data);
    let img = document.createElement("img");
    img.setAttribute("src", data.assets[0].url);
    document.getElementById('image-here').appendChild(img);
}
 
window.ml = cloudinary.createMediaLibrary(mloptions, {insertHandler: handleInsert}, "#my_btn")


// Create a handler for when the Create button is clicked
/*
    Get the title and content of the post, PLUS the cloudinary image url, and POST all of that to the api so it can store it in the db.
*/

/*
    To render a blog post:
    localhost/blog/<id>
    express will ask sequelize for the data for that blog entry
    send all that data to handlebars

*/

