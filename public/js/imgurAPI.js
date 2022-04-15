

// create cloudinary account
// utilize the cloudinary widget--allows for image and video uploads
// the upload function that cloudinary provides is promise based
//we upload stuff and it returns a successful insert of the image to their database
// this data includes the url for where to find it and look at it aka a source
// we then take that url and store it in OUR database
// images saved tabled
// user id, image_src => comes from the cloudinary widget (response.info), title, etc.