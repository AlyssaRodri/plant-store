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

function insertHandler(data){
console.log(data);
}

window.ml = cloudinary.createMediaLibrary(mloptions, {insertHandler: insertHandler}, "#my_btn")




