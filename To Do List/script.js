
//adding HTML id's
let submitButton = document.getElementById('btn-submit')
let listDOM = document.getElementById('list')
let inputText = document.getElementById('inputText')


//if user enter data, plus button is active

inputText.onkeyup = () => {
    let userData = inputText.value;
    if(userData.trim() !=0){ // if value is 0, button inactive
        submitButton.classList.add('active');
        

    }else{
        submitButton.classList.remove('active');
    }

}

//Button Configuration

submitButton.onclick = () => {
    let userData = inputText.value;
    let getLocalstorage = localStorage.getItem("Todo"); 
    if(getLocalstorage == null){
        listArr = [];
        inputText.value="";
        }else{
            listArr = JSON.parse(getLocalstorage);
        }
        listArr.push(userData);
        localStorage.setItem("Todo", JSON.stringify(listArr));
        showTasks();
}
//LocalStorage and Todo add list İtem
function showTasks(){
    let getLocalstorage = localStorage.getItem("Todo");
    if(getLocalstorage == null){
        listArr = [];
        }else{
            listArr = JSON.parse(getLocalstorage);
        }
        let addLi = '';
    listArr.forEach((element, index) => {
        addLi += `<li> ${element} <span onclick = "deleteTask(${index})"; > <i class="fa solid fa-xmark"></i></span></li>`;
        
     });   
     listDOM.innerHTML = addLi;
     inputText.value="";
    }


//Local Storage and Todo Delete
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("Todo");
    listArr = JSON.parse(getLocalStorage); 
    listArr.splice(index, 1);
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTasks();
}

//ress enter keycode for add list item
let enter = document.getElementById("inputText");
inputText.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn-submit").click();
    }  
         
});

