async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;

    const img = document.querySelector("img");
    console.log(img)
    const image_url = img.getAttribute("src");
    console.log(image_url)
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content,
        image_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }); console.log(response)
  
    if (response.ok) {
      document.location.replace('/dashboard');
      console.log(response)
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);