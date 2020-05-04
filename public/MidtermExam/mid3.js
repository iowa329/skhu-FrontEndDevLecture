let persons1 = [
    { name: "홍길동", age: 16 },
    { name: "홍길동", age: 17 },
    { name: "홍길동", age: 18 }
  ];

  let persons2 = persons1.slice(0);
  persons1[0].age = 20;

  console.log(persons1);
  console.log(persons2);