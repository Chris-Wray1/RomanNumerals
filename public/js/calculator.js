// Function that display value 
function dis(e) {
    let tmp = e.parentNode;
    let calc = tmp.parentNode;
    let display = calc.getElementsByClassName("display")[0];
    let view = calc.getElementsByClassName("view")[0];
    let val = e.getAttribute("dis");
    let viewVal = e.getAttribute("value");

	display.value += val;
    if (typeof view != 'undefined') {
        if (view.innerHTML == '&nbsp;') {
            view.innerHTML = viewVal;
        } else {
            view.innerHTML += viewVal;
        }
    }
} 

function myFunction(e) { 
    let tmp = e.parentNode;
    let calc = tmp.parentNode;
    let display = calc.getElementsByClassName("display")[0];

	if (e.key == '0' || e.key == '1' 
		|| e.key == '2' || e.key == '3' 
		|| e.key == '4' || e.key == '5' 
		|| e.key == '6' || e.key == '7' 
		|| e.key == '8' || e.key == '9') 

    	display.value += e.key; 
} 

// Function that clear the display 
function clr(e) {
    let tmp = e.parentNode;
    let calc = tmp.parentNode;
    let display = calc.getElementsByClassName("display")[0];
    let view = calc.getElementsByClassName("view")[0];
	display.value = "";
    view.innerHTML = '&nbsp;';
} 

// Function to convert using API
async function convValue(e) {
    let tmp = e.parentNode;
    let calc = tmp.parentNode;
    let display = calc.getElementsByClassName("display")[0];
    let result = calc.getElementsByClassName("result")[0];

    let myForm = document.getElementById('submission');

    document.getElementById('method').value = calc.getAttribute('id');
    document.getElementById('toconvert').value = display.value;

    let url = "http://laravel.localhost/" + document.getElementById('method').value;

    let formData = new FormData(myForm);
    let json = await submitForm(url, 'post', formData);

    console.table(json);

    if (json.status >= 200 && json.status < 300) {
        if (json.response.status == 'true') {
            console.log("Success");
            result.innerHTML = json.response.view;
        }   
    }

    if (json.status < 200 || json.status >= 300) {
        console.log("Failed");
    }


//    result.value = display.value;
}
