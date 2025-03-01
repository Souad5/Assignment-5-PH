let count = 6; // Initialize count
let increase = 23;

const btnn = document.querySelector('#btnn');
const btnn1 = document.querySelector('#btnn1');
const btnn2 = document.querySelector('#btnn2');
const btnn3 = document.querySelector('#btnn3');
const btnn4 = document.querySelector('#btnn4');
const btnn5 = document.querySelector('#btnn5');

function decreaseCount() {
    increase++;
    count--; 
    document.getElementById("increase").innerText = increase;
    document.getElementById("num06").innerText = count;
    
}

btnn.addEventListener('click', () => {
    btnn.disabled = true ;
    btnn.style.opacity = "0.2";
    btnn.style.cursor = "not-allowed";
    decreaseCount();
    alert("Board Successfully Updated");
});

btnn1.addEventListener('click', () => {
    btnn1.disabled = true ;
    btnn1.style.opacity = "0.2";
    btnn1.style.cursor = "not-allowed";
    decreaseCount();
    alert("Board Successfully Updated");
});

btnn2.addEventListener('click', () => {
    btnn2.disabled = true ;
    btnn2.style.opacity = "0.2";
    btnn2.style.cursor = "not-allowed";
    decreaseCount();
    alert("Board Successfully Updated");
});

btnn3.addEventListener('click', () => {
    btnn3.disabled = true ;
    btnn3.style.opacity = "0.2";
    btnn3.style.cursor = "not-allowed";
    decreaseCount();
    alert("Board Successfully Updated");
});

btnn4.addEventListener('click', () => {
    btnn4.disabled = true ;
    btnn4.style.opacity = "0.2";
    btnn4.style.cursor = "not-allowed";
    decreaseCount();
    alert("Board Successfully Updated");
});

btnn5.addEventListener('click', () => {
    btnn5.disabled = true ;
    btnn5.style.opacity = "0.2";
    btnn5.style.cursor = "not-allowed";
    decreaseCount();
    alert("Board Successfully Updated");
    if(count <= 0){
    alert("Congratulations! You have completed all the current tasks.");
}
});
