let button = document.getElementById('submit')
button.addEventListener('click', function(){
   // alert("Hello")

    let task = document.getElementById('task')
    //console.log(task)
    if(task.value == ''){
        alert("please Enter Something into the field")
    }
    else{
       // alert("Good")
        let li = document.createElement('li')
        li.className = "item"
        let UserText = document.createTextNode(task.value)
        li.appendChild(UserText)
        //console.log(li)
        let ul = document.getElementById('ul')
        ul.appendChild(li)
    }

})