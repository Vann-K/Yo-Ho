// Entry Function, for when we click our Yo Ho Button
function getValues() {
    // Get the values from the three forms.
    // Parse to an Int
    let yoValue = parseInt(document.getElementById('yoValue').value);
    let hoValue = parseInt(document.getElementById('hoValue').value);
    let countToValue = parseInt(document.getElementById('countTo').value);

    // Check Validity
    if (Number.isInteger(yoValue) && Number.isInteger(hoValue) && Number.isInteger(countToValue)) {
        // 
        // Generate
        let numbersArray = generateYoHo(countToValue);
        // Display
        displayYoHo(yoValue, hoValue, numbersArray)
    } else {
        Swal.fire(
            {
                title: "Scurvy Dog!",
                text: "Ye be needin' numbers!",
                icon: 'error'
            }
        )
    }

}

// Logic Function, for parsing all the numbers from the received data
function generateYoHo(countToNumber) {
    // For loop to count through the values and generate the array
    let numbersArray = [];

    for (i = 1; i <= countToNumber; i++) {
        numbersArray.push(i);
    }
    return numbersArray;
}


// Display Function, to display it onto the html page.
function displayYoHo(yoValue, hoValue, numbers) {
    // Grab value for the html element where we will place it.
    let tableBody = document.getElementById('yoHoTable');
    let tableHtml = "";
    //  For each array value check if it is divisible by yo && ho
    for (i = 0; i < numbers.length; i++) {

        let value = numbers[i]
        let className = '';

        if (i % 5 == 0) {
            tableHtml += '<tr>'
        }

        // print yoho
        if (numbers[i] % yoValue == 0 && numbers[i] % hoValue == 0) {
            className = 'yoHo';
            tableHtml += `<td class="${className}">Yo-Ho! - ${value}</td>`;
        }
        // If divisible yo && not divisible by ho
        // Print Yo
        if (numbers[i] % yoValue == 0 && numbers[i] % hoValue != 0) {
            className = 'yo';
            tableHtml += `<td class="${className}">Yo! - ${value}</td>`;
        }
        //If divisble by 5 && not 3
        //Print Ho
        if (numbers[i] % yoValue != 0 && numbers[i] % hoValue == 0) {
            className = 'ho';
            tableHtml += `<td class="${className}">Ho! - ${value}</td>`;
        }
        // If neither
        // Print Value
        if (numbers[i] % yoValue != 0 && numbers[i] % hoValue != 0) {
            tableHtml += `<td>${value}</td>`;
        }

        if ((i + 1) % 5 == 0) {
            tableHtml += '</tr>'
        }

    }






    tableBody.innerHTML = tableHtml;


}