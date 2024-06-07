
var arr1 = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

// Function to create HTML table
function createTable(array) {
    var table = '<table border="1">';
    
    // Loop through each row in the array
    array.forEach(function(rowData) {
        table += '<tr>';

        // Loop through each element in the row
        rowData.forEach(function(cellData) {
            table += '<td>' + cellData + '</td>';
        });

        table += '</tr>';
    });

    table += '</table>';
    return table;
}

// Get the container element where you want to append the table
var container = document.getElementById('container');

// Create the table HTML and append it to the container
container.innerHTML = createTable(arr1);
