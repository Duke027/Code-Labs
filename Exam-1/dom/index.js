let post = {
    title: "the ancient civilization of Rome",
    description:"In modern historiography, ancient Rome refers to Roman civilization from the founding of the city of Rome in the 8th century BC to the collapse of the Western Roman Empire in the 5th century AD. It encompasses the Roman Kingdom, Roman Republic and Roman Empire until the fall of the western empire."
}
const para = document.createElement("h1");
const node = document.createTextNode(title);
para.appendChild(node);
const para1 = document.createElement("p");
const node1 = document.createTextNode(desctiption);
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);
const element1 = document.getElementById("div1");
element.appendChild(para1);