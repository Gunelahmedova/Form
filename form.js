const formPerson = document.querySelector("#personal");
const personalList = document.querySelector("#personalList");


const people = [];

formPerson.addEventListener("submit", function (e) {
  e.preventDefault();

 
  const FullName = this.fullname.value; 
  const age = this.age.value;
  const Position = this.position.value;
  const Phone = this.phone.value;


  const person = {
    FullName,
    age,
    Position,
    Phone,
  };

  people.push(person);
  console.log(people);

  const content = people
    .map(
      (personObj) => `
  <table class="table"  >
  <tr>
  <td > ${personObj.FullName}</td>
  <td>${personObj.age}</td>
  <td> ${personObj.Position}</td>
  <td>${personObj.Phone}</td>
</tr>

</table>
  `
    )
    .join("");

  personalList.innerHTML = content;
});

console.log(formPerson);



