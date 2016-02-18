/*
RENDERS INITIAL DATA AS TABLE ROWS, AND UPDATES THE FORM ON SELECT (CLICK)
ADDS NEW DATA TO INITLAL_DATA, REMOVES & UPDATES THE SAME.
*/

$().ready(function(){
	// Inital Data
	var initial_data = [
		{name: "Vasanth", number: 9056142325,age:23},
		{name: "Chandy", number:  9395314152,age:22},
		{name: "Ganesh", number:  23682475,age:21}
	]

	var dataTOTable = function() {
		/* Iterate through the inital data and render on screen., */

		// Clear all data which is the child of the table_body
		$("#table_body").html("");

		for (var i = 0; i<=initial_data.length - 1; i++) {
			var tr=$("<tr>");
			tr.append($("<td class='name'>"+ initial_data[i].name+ "</td>"));
			tr.append($("<td>"+ initial_data[i].number+ "</td>"));
			tr.click(changeRowColor);
			$("#table_body").append(tr);
		};
	}

	var changeRowColor = function (ev) {
		/* Change the css on mouse click 
		& Display the data in the form */ 
		
		var items_with_class = $("#table_body tr.mouseover");
		for(var i=0; i<=items_with_class.length-1; i++){
			$(items_with_class[i]).removeClass("mouseover");
		}

		// Add mouseover to the current element
		var parent = $(ev.target).parent();
		$(parent).addClass("mouseover");

		// Get the name of the current row, no matter which cell the 
		// user clicks on
		var selected_name = $(".mouseover > td.name").html();
		for(var x=0; x<=initial_data.length-1; x++) {
			// Search the initial data where name is selected_name
			var item = initial_data[x];
			if(item.name === selected_name) {
				var name = item.name;
				var number = item.number;
				var age = item.age;
				console.log(name, number, age);
				$("#name").val(name);
				$("#number").val(number);
				$("#age").val(age);
			}
		}
	}

	var filter =function () {
		// Filter data (search)
		var search_item = $("#search").val();
		console.log(search_item);
		for(var y=0; y<=initial_data.length-1; y++)
		{
			var it =initial_data[y];
			if ((search_item.toLowerCase() === it.name.toLowerCase()) || (parseInt(search_item) === it.number) 
				|| (parseInt(search_item) === it.age)) {
				var name=it.name;
				var number=it.number;
				var age=it.age;
				$("#name").val(name);
				$("#number").val(number);
				$("#age").val(age);
				// add css class to the correct element

				break;
			} else {
				$("#name").val("");
				$("#number").val("");
				$("#age").val("");
			}
		}
	}
	$("#filter").click(filter);

	var clear =function(){
		// Clears the data in the form
		$("#name").val("");
		$("#number").val("");
		$("#age").val("");
		$("#search").val("");
	}
	
	$("#clear").click(clear);

	var add =function() {
		// Add from form to initial_data
		var name = $("#name").val();
		var number = parseInt($("#number").val());
		var age = parseInt($("#age").val());
		var new_data={
			"name": name,
			"number": number,
			"age":age
		};
		initial_data.push(new_data);
		dataTOTable();
    }
    
	$("#add").click(add);
	dataTOTable();

	console.log(user_base_details);

});