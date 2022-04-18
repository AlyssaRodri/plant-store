async function commentFormHandler(event) {
    event.preventDefault();

    const description = document.querySelector("#project-desc").value.trim();

    const blog_id = window.location.toString().split("/")
    [
        window.location.toString().split("/").length - 1
    ];

    if (description) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          blog_id,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
        console.log('this is the error')
        document.querySelector("#comment").style.display = "block";
      }
    }
}
var comment = document.querySelector('#comment');
comment.addEventListener("click", commentFormHandler);