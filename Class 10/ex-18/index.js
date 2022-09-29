let users = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jimmy",
      age: 20,
    },
    {
      name: "Amy",
      age: 43,
    },
  ];
  function addUsers() {
    const para = document.createElement("h1");
    const node = document.createTextNode(users);

    para.appendChild(node);
    
    document.body.appendChild(para);
    console.log("users added");
}