//initialize function called when the script loads
function initialize(){
	cities();
	
};

function cities(){
	//create an array to store the city name and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	//create table element
    var table = document.createElement("table");

    //create header row
    var headerRow = document.createElement("tr");

    //add "City" and "Population" columns to the header 
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);
	
	
	for (var i = 0; i < cityPop.length; i++){
		
        //assign html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		
        //add the rows html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    };
	
	//add table to the div in index.html
	var mydiv = document.getElementById("mydiv");
	mydiv.appendChild(table);

	function addColumns(cityPop){
		//select each table row 
		document.querySelectorAll("tr").forEach(function(row, i){

			//the first row
			if (i == 0){
				
				//write City Size in the header
				row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
				
			} else {
				//if it is all the other rows, then categorize the city based on its population
				var citySize;
	
				if (cityPop[i-1].population < 100000){
					citySize = 'Small';
					
	
				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium';
					
				} else {
					citySize = 'Large';
					
				};
				//category of city as the last element of that row
				row.insertAdjacentHTML('beforeend', '<td>'+citySize + '</td>');
				
			};
			
		});
		
	};
	addColumns(cityPop);
	
	
	
	function addEvents(){
		
		//add interection called mouseover to table
		document.querySelector("table").addEventListener("mouseover", function(){
			
			var color = "rgb(";
		
        
			for (var j=0; j<3; j++){
				
				var random = Math.round(Math.random() * 255);
	
				color += random;
	
				if (j<2){
					
					color += ",";
				
				} else {
					
					color += ")";
				}
				
			};
	
			//set the color to change every time the mouse is over the table
			document.querySelector("table").style.color = color 
			
		});
		//add interaction "click", so a message will pop up if user clicks the table
		document.querySelector("table").addEventListener("click", function(){
			alert('Hey, you clicked me!');
		});
		
	};
	
	addEvents();
	
	
	
}

window.onload = initialize();