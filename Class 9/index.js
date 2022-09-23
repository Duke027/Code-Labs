fetch('https://random.dog/woof.json')
  .then((response) => response.json())
  .then((data) => {
 let imageElement = document.getElementById("random-image");

 console.log(data);
 imageElement.src = data.url;
  });