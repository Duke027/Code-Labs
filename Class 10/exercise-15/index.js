let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function addNumbersToWebpage() {
    const para = document.createElement("h1");
    const node = document.createTextNode(numbers);

    para.appendChild(node);
    
    document.body.appendChild(para);
    console.log("numbers added");
}
