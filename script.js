let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//Adding EventListener//
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });

  //adding validation//

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();

    }
  };  
//accepting data//
  let data = {};
  let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
  };

//uploading it on screen //
  let createPost = () => {
    posts.innerHTML+=`
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="updatePost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};

//Delete data//
let deletePost = (e) => {
  e.parentElement.parentElement.remove()
}

//updating post//
let updatePost=(e)=>{
  input.value= e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove()

}