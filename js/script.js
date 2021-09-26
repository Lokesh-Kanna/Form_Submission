// Creating main container for left side (form)
var leftContainer = document.createElement('div');
leftContainer.setAttribute('class', 'left-container');
document.body.append(leftContainer);

// Creating the title
var title = document.createElement('h1');
title.innerHTML = "Form Submission:";
title.setAttribute('class', 'title')
leftContainer.appendChild(title);

// Creating form tag
var form = document.createElement('form');
leftContainer.appendChild(form);

// Creating firstname div
var fnameDiv = document.createElement('div');
form.appendChild(fnameDiv);

// Creating fname label
var fnamelabel = document.createElement('label');
fnamelabel.innerHTML = "First Name:<br>";
fnamelabel.setAttribute('for', 'fnameInput')
fnamelabel.setAttribute('id', 'fnamelabel');
fnameDiv.appendChild(fnamelabel);

// Creating first name Input field
var fnameInput = document.createElement('input');
fnameInput.setAttribute('name', 'fnameInput');
fnameInput.setAttribute('id', 'fnameInput');
fnameInput.setAttribute('class', 'inputfield');
fnameDiv.appendChild(fnameInput);
document.getElementById('fnameInput').required = true;

// Creating Last name div
var lnameDiv = document.createElement('div');
form.appendChild(lnameDiv);

// Creating last name label
var lnamelabel = document.createElement('label');
lnamelabel.innerHTML = "Last Name:<br>";
lnamelabel.setAttribute('for', 'lnameInput');
lnamelabel.setAttribute('id', 'lnamelabel');
lnameDiv.appendChild(lnamelabel);

// Creating last name input field
var lnameInput = document.createElement('input');
lnameInput.setAttribute('name', 'lnameInput');
lnameInput.setAttribute('id', 'lnameInput');
lnameInput.setAttribute('class', 'inputfield');
lnameDiv.appendChild(lnameInput);

// Creating address div
var addressDiv = document.createElement('div');
form.appendChild(addressDiv);

// Creating address label
var addresslabel = document.createElement('label');
addresslabel.innerHTML = "Address:<br>";
addresslabel.setAttribute('for', 'addressInput');
addresslabel.setAttribute('id', 'addresslabel');
addressDiv.appendChild(addresslabel);

// Creating address input field
var addressInput = document.createElement('input');
addressInput.setAttribute('name', 'addressInput');
addressInput.setAttribute('id', 'addressInput');
addressInput.setAttribute('class', 'inputfield');
addressDiv.appendChild(addressInput);

// Creating Pincode div
var pincodeDiv = document.createElement('div');
form.appendChild(pincodeDiv);

// Creating pincode label
var pincodelabel = document.createElement('label');
pincodelabel.innerHTML = "Pincode:<br>";
pincodelabel.setAttribute('for', 'pincodeInput')
pincodelabel.setAttribute('id', 'pincodelabel');
pincodeDiv.appendChild(pincodelabel);

// Creating pincode input
var pincodeInput = document.createElement('input');
pincodeInput.setAttribute('name', 'pincodeInput');
pincodeInput.setAttribute('id', 'pincodeInput');
pincodeInput.setAttribute('class', 'inputfield');
pincodeDiv.appendChild(pincodeInput);

// Creating gender div
var genderDiv = document.createElement('div');
form.appendChild(genderDiv);

// Creating gender label
var genderlabel = document.createElement('label');
genderlabel.innerHTML = "Gender:<br>";
genderlabel.setAttribute('for', 'genderSelector')
genderlabel.setAttribute('id', 'genderlabel');
genderDiv.appendChild(genderlabel);

// Creating selectable gender menu:
var genderSelector = document.createElement('select');
genderSelector.setAttribute('id', 'genderSelector');
genderSelector.setAttribute('name', 'genderSelector');
genderDiv.appendChild(genderSelector);

// Creating gender options Male
var genderOption1 = document.createElement('option');
genderOption1.setAttribute('value', 'Male');
genderOption1.innerHTML = "Male";
genderSelector.appendChild(genderOption1);

// Creating gender option Female
var genderOption2 = document.createElement('option');
genderOption2.setAttribute('value', 'Female');
genderOption2.innerHTML = "Female";
genderSelector.appendChild(genderOption2);

// Creating gender option other
var genderOption3 = document.createElement('option');
genderOption3.setAttribute('value', 'Female');
genderOption3.innerHTML = "Other";
genderSelector.appendChild(genderOption3);

// Creating gender option not reveal
var genderOption4 = document.createElement('option');
genderOption4.setAttribute('value', "I don't want to answer");
genderOption4.innerHTML = "I don't want to answer";
genderSelector.appendChild(genderOption4);

// Creating food div
var foodDiv = document.createElement('div');
foodDiv.setAttribute('id', 'foodDiv')
form.appendChild(foodDiv);

// Creating food title
var foodtitle = document.createElement('label');
foodtitle.innerHTML = "Choice of food:<br>";
foodDiv.appendChild(foodtitle);

// Creating food option 1 
var foodOption1 = document.createElement('input');
foodOption1.setAttribute('type', 'checkbox')
foodOption1.setAttribute('name', 'foodOptions');
foodOption1.setAttribute('id', 'foodOption1');
foodOption1.setAttribute('class', 'checkbox')
foodDiv.appendChild(foodOption1);

// Creating food label 1
var foodlabel1 = document.createElement('label');
foodlabel1.innerHTML = "Biriyani<br>";
foodlabel1.setAttribute('for', 'foodOption1')
foodlabel1.setAttribute('id', 'foodlabel1');
foodDiv.appendChild(foodlabel1);

// Creating food option 2 
var foodOption2 = document.createElement('input');
foodOption2.setAttribute('type', 'checkbox')
foodOption2.setAttribute('name', 'foodOptions');
foodOption2.setAttribute('id', 'foodOption2');
foodOption2.setAttribute('class', 'checkbox')
foodDiv.appendChild(foodOption2);

// Creating food label 2
var foodlabel2 = document.createElement('label');
foodlabel2.innerHTML = "Fried Rice<br>";
foodlabel2.setAttribute('for', 'foodOption2')
foodlabel2.setAttribute('id', 'foodlabel2');
foodDiv.appendChild(foodlabel2);

// Creating food option 3
var foodOption3 = document.createElement('input');
foodOption3.setAttribute('type', 'checkbox')
foodOption3.setAttribute('name', 'foodOptions');
foodOption3.setAttribute('id', 'foodOption3');
foodOption3.setAttribute('class', 'checkbox')
foodDiv.appendChild(foodOption3);

// Creating food label 3
var foodlabel3 = document.createElement('label');
foodlabel3.innerHTML = "Parotta<br>";
foodlabel3.setAttribute('for', 'foodOption3')
foodlabel3.setAttribute('id', 'foodlabel3');
foodDiv.appendChild(foodlabel3);

// Creating food option 4
var foodOption4 = document.createElement('input');
foodOption4.setAttribute('type', 'checkbox')
foodOption4.setAttribute('name', 'foodOptions');
foodOption4.setAttribute('id', 'foodOption4');
foodOption4.setAttribute('class', 'checkbox')
foodDiv.appendChild(foodOption4);

// Creating food label 4
var foodlabel4 = document.createElement('label');
foodlabel4.innerHTML = "Noodles<br>";
foodlabel4.setAttribute('for', 'foodOption4')
foodlabel4.setAttribute('id', 'foodlabel4');
foodDiv.appendChild(foodlabel4);

// Creating food option 5
var foodOption5 = document.createElement('input');
foodOption5.setAttribute('type', 'checkbox')
foodOption5.setAttribute('name', 'foodOptions');
foodOption5.setAttribute('id', 'foodOption5');
foodOption5.setAttribute('class', 'checkbox')
foodDiv.appendChild(foodOption5);

// Creating food label 5
var foodlabel5 = document.createElement('label');
foodlabel5.innerHTML = "Poori<br>";
foodlabel5.setAttribute('for', 'foodOption5')
foodlabel5.setAttribute('id', 'foodlabel5');
foodDiv.appendChild(foodlabel5);

// Creating state div 
var stateDiv = document.createElement('div');
form.appendChild(stateDiv);

// Creating state label
var statelabel = document.createElement('label');
statelabel.innerHTML = "State:<br>";
statelabel.setAttribute('for', 'stateInput')
statelabel.setAttribute('id', 'statelabel');
stateDiv.appendChild(statelabel);

// Creating state Input field
var stateInput = document.createElement('input');
stateInput.setAttribute('name', 'stateInput');
stateInput.setAttribute('id', 'stateInput');
stateInput.setAttribute('class', 'inputfield');
stateDiv.appendChild(stateInput);

// Creating country div 
var countryDiv = document.createElement('div');
form.appendChild(countryDiv);

// Creating country label
var countrylabel = document.createElement('label');
countrylabel.innerHTML = "Country:<br>";
countrylabel.setAttribute('for', 'countryInput')
countrylabel.setAttribute('id', 'countrylabel');
countryDiv.appendChild(countrylabel);

// Creating country Input field
var countryInput = document.createElement('input');
countryInput.setAttribute('name', 'countryInput');
countryInput.setAttribute('id', 'countryInput');
countryInput.setAttribute('class', 'inputfield');
countryDiv.appendChild(countryInput);

// Creating Sunbmit Button
var submit = document.createElement('button');
submit.innerHTML = 'Submit';
submit.setAttribute('type', 'button');
submit.setAttribute('id', 'submit');
submit.setAttribute('name', 'submit');
submit.addEventListener('click', foo);
form.appendChild(submit);

//----------------------------------------------------------------

// Creating main container for right side (table)
var rightContainer = document.createElement('div');
rightContainer.setAttribute('class', 'right-container');
document.body.append(rightContainer);

// Creating the title
var tabletitle = document.createElement('h1');
tabletitle.innerHTML = "Temporary Database Table";
tabletitle.setAttribute('class', 'title')
rightContainer.appendChild(tabletitle);

// Creating the table tag
var table = document.createElement('table');
table.setAttribute('id', 'dataTable')
rightContainer.appendChild(table);

// Creating tr
var tr1 = document.createElement('tr');
table.appendChild(tr1);

// Creating th
var th1 = document.createElement('th');
th1.innerHTML = "First Name";
th1.setAttribute('class', 'th');
var th2 = document.createElement('th');
th2.innerHTML = "Last Name";
th2.setAttribute('class', 'th');
var th3 = document.createElement('th');
th3.innerHTML = "Address";
var th4 = document.createElement('th');
th4.innerHTML = "Pincode";
var th5 = document.createElement('th');
th5.innerHTML = "Gender";
var th6 = document.createElement('th');
th6.innerHTML = "Choice of Food";
var th7 = document.createElement('th');
th7.innerHTML = "State";
var th8 = document.createElement('th');
th8.innerHTML = "Country";
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);

// Creating function 
function foo() {
    var firstName = document.getElementById('fnameInput').value;
    var lastName = document.getElementById('lnameInput').value;
    var address = document.getElementById('addressInput').value;
    var pincode = document.getElementById('pincodeInput').value;
    var gender = document.getElementById('genderSelector').value;
    var food1 = document.getElementById('foodOption1');
    var food2 = document.getElementById('foodOption2');
    var food3 = document.getElementById('foodOption3');
    var food4 = document.getElementById('foodOption4');
    var food5 = document.getElementById('foodOption5');
    var state = document.getElementById('stateInput').value;
    var country = document.getElementById('countryInput').value;

    var tempTable = document.getElementById('dataTable');
    var newRow = tempTable.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var text1 = document.createTextNode(firstName);
    console.log(text1);
    cell1.appendChild(text1);

    var cell2 = newRow.insertCell(1);
    var text2 = document.createTextNode(lastName);
    console.log(text2);
    cell2.appendChild(text2);

    var cell3 = newRow.insertCell(2);
    var text3 = document.createTextNode(address);
    console.log(text3);
    cell3.appendChild(text3);

    var cell4 = newRow.insertCell(3);
    var text4 = document.createTextNode(pincode);
    console.log(text4);
    cell4.appendChild(text4);

    var cell5 = newRow.insertCell(4);
    var text5 = document.createTextNode(gender);
    console.log(text5);
    cell5.appendChild(text5);

    //enter 5
    var cell6 = newRow.insertCell(5);
    var getText = "";
    let arr = [food1, food2, food3, food4, food5];
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        var lableID = [foodlabel1, foodlabel2, foodlabel3, foodlabel4, foodlabel5];
        if(arr[i].checked) {
            let txt = lableID[i].innerText;
            getText = getText + ' ' + txt;
            count++;
        }
        else {
            null;
        }
    }
    if(count < 2) {
        alert('Select atleast 2 items in food choice')
    }
    else {
        null;
    }
    console.log((getText));
    var text6 = document.createTextNode(getText);
    cell6.appendChild(text6);

    var cell7 = newRow.insertCell(6);
    var text7 = document.createTextNode(state);
    console.log(text7);
    cell7.appendChild(text7);

    var cell8 = newRow.insertCell(7);
    var text8 = document.createTextNode(country);
    console.log(text8);
    cell8.appendChild(text8);

    var clearForm = document.getElementsByTagName('form');
    form.reset();
}