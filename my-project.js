let dataBlog=[];


function addBlog(event) { 
    event.preventDefault() 


    let title = document.getElementById("projectinput").value
    let content = document.getElementById("description").value
    let date1 = document.getElementById("startdate").value
    // let date2 = document.getElementById("enddate").value
    // let node = document.getElementById("technologies1").checked;
    // let react = document.getElementById("technologies2").checked;
    // let next = document.getElementById("technologies3").checked;
    // let type = document.getElementById("technologies4").checked;
    // let upload = document.getElementById("upload").files;

    let blog={
        title: title,
        content: content,
        date1: date1
        // date2: date2
        // node,
        // react,
        // next,
        // type,
        // upload,
    };

    dataBlog.push(blog) 


    renderBlog()
}




function renderBlog(){
    let name = "Heru";
    document.getElementById("contents").innerHTML = ``; 

    for(let i=0; i< dataBlog.length;i++){
        document.getElementById("contents").innerHTML += 
        `     
        <div class="card">
            <img class="card-image"
            src="/Assets/Images/pencil.jpg" 
            alt="image"
            >
           
            <a href="google.com"; class="card-link">
                <h1 class="card-h1">${dataBlog[i].title}</h1>
            </a>
             <p class="card-p">
            <a href="blog-delail.html" target="_blank"
            >${dataBlog[i].date1}</a>
            </p>
            <p class="card-p">${dataBlog[i].content}</p>
        </div>
        `

        
    }
}