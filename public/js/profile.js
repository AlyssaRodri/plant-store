const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};


<<<<<<< HEAD
// window.onload = function showUploadWidget() {
//   cloudinary.openUploadWidget({
//     cloudName: "plantblog",
//     uploadPreset: "unsigned",
//     sources: [
//       "local",
//       "url",
//       "camera",
//       "image_search",
//       "google_drive",
//       "facebook",
//       "dropbox",
//       "instagram",
//       "shutterstock",
//       "getty",
//       "istock",
//       "unsplash"
//     ],
//     googleApiKey: "<image_search_google_api_key>",
//     showAdvancedOptions: true,
//     cropping: true,
//     multiple: false,
//     defaultSource: "local",
//     styles: {
//       palette: {
//         window: "#3DAD41",
//         windowBorder: "#58CC23",
//         tabIcon: "#32FF00",
//         menuIcons: "#060606",
//         textDark: "#000000",
//         textLight: "#FFFFFF",
//         link: "#3DAD41",
//         action: "#060606",
//         inactiveTabIcon: "#060606",
//         error: "#F44235",
//         inProgress: "#8FEC73",
//         complete: "#20B832",
//         sourceBg: "#83FFAA"
//       },
//       fonts: {
//         default: null,
//         "'Space Mono', monospace": {
//           url: "https://fonts.googleapis.com/css?family=Space+Mono", active: true
//         }
//       }
//     }
//   },
//     (err, info) => {
//       if (!err) {
//         console.log("Upload Widget event - ", info);
//       }
//     })
// }
=======
function showUploadWidget() {
  cloudinary.openUploadWidget({
    cloudName: "plantblog",
    uploadPreset: "unsigned",
    sources: [
      "local",
      "url",
      "camera",
      "google_drive",
      "facebook",
      "dropbox",
      "instagram",
      "shutterstock",
      "getty",
      "istock",
      "unsplash"
    ],
    showAdvancedOptions: true,
    cropping: true,
    multiple: false,
    defaultSource: "local",
    styles: {
      palette: {
        window: "#3DAD41",
        windowBorder: "#58CC23",
        tabIcon: "#32FF00",
        menuIcons: "#060606",
        textDark: "#000000",
        textLight: "#FFFFFF",
        link: "#3DAD41",
        action: "#060606",
        inactiveTabIcon: "#060606",
        error: "#F44235",
        inProgress: "#8FEC73",
        complete: "#20B832",
        sourceBg: "#83FFAA"
      },
      fonts: {
        default: null,
        "'Space Mono', monospace": {
          url: "https://fonts.googleapis.com/css?family=Space+Mono", active: true
        }
      }
    }
  },
    (err, info) => {
      if (!err) {
        console.log("Upload Widget event - ", info);
      }
    })
    
}
>>>>>>> 7ae4f48cf2c78ce6fb950cc7f3f500dd51a2ce33

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'plantblog', 
  uploadPreset: 'unsigned'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)


document.getElementById("upload_widget").addEventListener("click", myWidget.open());


document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);



