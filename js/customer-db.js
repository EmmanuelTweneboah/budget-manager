//Customers Constructor


function Customers (firstName, lastName, job){
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
};

//UI Constructor function

function UI () {
    //Add book list
    UI.prototype.addBookToList = function (customersParam) {

         const list = document.getElementById("book-list");

         //Create tr element
         const row = document.createElement("tr");

         //Insert cols
         row.innerHTML = `
                    <td>${customersParam.firstName}</td>
                    <td>${customersParam.lastName}</td>
                    <td>${customersParam.job}</td>`;
         //Append to list
         list.appendChild(row);

    };
};


//App controller - Event-Listener

document.getElementById("book-form").addEventListener("submit", function(e){
 e.preventDefault();

  //Get form Values
  const firstName = document.getElementById("first-name").value;
  lastName = document.getElementById("last-name").value;
  job = document.getElementById("job").value;


  //Instantiating customers object
  const customer = new Customers(firstName, lastName, job)

  const ui = new UI();
  ui.addBookToList(customer);
});



