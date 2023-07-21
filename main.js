//const NodeComm = document.querySelector('.com')
//let a = prompt('Введите 1 число');
//let b = prompt('Введите 2 число');
//const answerWrong ='Ты неправ!' ;
//let sum = a+b;
//const answerTrue ='Ты молдец ведь ответ!';

//if(sum != 6){
//    NodeComm.innerText = answerWrong;
//}else(sum == 6 );
//    NodeComm.innerText = answerTrue + sum;
    

//Тут будет код на добавления коментов

const INPUTfeedback = document.querySelector(".textfeed")//коммент
const BTNfeedback = document.querySelector(".juje")//добавка комента
const NodeComm = document.querySelector(".comment")//текст комента
const NodeMail = document.querySelector(".mail")// маил
const NodeProject = document.querySelector(".prjcom")




document.forms.publish.onsubmit = function addComment(){

    var maill = this.mail.value;
    localStorage.setItem('mail', maill)
    NodeMail.innerText = maill;  
   
    var projects = this.project.value;
    localStorage.setItem('prjoctssub', projects)
    NodeProject.innerText = projects; 
    
    var message = this.com.value;
    localStorage.setItem('message', message)
    NodeComm.innerText = message;
    
    return false;   
}





//надо создать цикл с проверкой gmail
// надо создать локальную память для прорверки 
// потом после надо сделать так чтоб коменты оставались на странице и создвались новые 