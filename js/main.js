let balance = -70;
let name = `Flavva Flave`;


// Greet the user by name
      // Search the document for the 'username' element
      let _username = document.getElementById('username');
      // Change the content of the element
      _username.innerHTML = name;

      // The above can be simplified:
      //    document.getElementById('username').innerHTML = name;


// 1. Let them know their starting balance
      // Search the document for the 'balance' element
      // Change the content of the element

document.getElementById('balance').innerHTML = balance;

let completeTransaction = function() {

  // Store the value from the 'amount' input in a variable (let)
        // Make sure it's a number, not a string!!!  parseInt()
  let _amount = parseInt(document.getElementById('amount').value);

  // 1. Update the balance using the transaction value
  balance += _amount;

  // 2. Add a record to the history showing the amount deposited
  document.getElementById('history').innerHTML += `<li>You deposited $${_amount}</li>`;

  // Update the balance in the document
  document.getElementById('balance').innerHTML = balance;

  // // 3. IF the balance is less than 0, make the balance red, else make it black
  let _balance = document.getElementById('balance').classList;
        // A) change the style.color of the balance
        // B) create a css class and .add() a class to the balance
        if (balance < 0) {
          _balance.add("lance");
        }
        else {
          _balance.remove("lance");
        };
};


document.getElementById('process').addEventListener('click', completeTransaction);

// EVENT:
//   1) Which object should it be listening to?     document.getElementById('process')
//   2) What type of event are we waiting for?      'click'
//   3) What do we do when it happens? (callback)   completeTransaction



// Note: Both records must be visible
