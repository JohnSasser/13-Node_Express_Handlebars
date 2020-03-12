// Make sure we wait to attach our handlers until the DOM is fully loaded.

// what is a handler?
// what is the empty function waiting on?
$(() => {
	$(".create-form").on("submit", e => {
		e.preventDefault();
		console.log("new burger submit-event fired!");

		let newBurger = {
			burger_name: $("#burger")
				.val()
				.trim(),
			devoured: 0
		};

		console.log(newBurger);

		//  ?????
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(() => {
			console.log(`index.js / New Burger`);
			location.reload();
		});
	});

	// *****needsDoing
	// ajax call for the update burger status

	$(".devour-btn").on("click", function() {
		// ?????
		const id = $(this).data("id");
		console.log(id);

		// const newBurger = $(this).data.$("eatBurger");

		// const newBurgerState = {
		// 	eaten: newBurger
		// };

		$.ajax(`/api/burgers/${id}`, {
			type: "PUT",
			data: {
				burgerID: id
			}
		}).then(() => {
			console.log(`index.js / move the burger on webpage`);
			location.reload();
		});
	});

	$(".destroy-btn").on("click", function() {
		const id = $(this).data("id");

		// console.log(id);

		$.ajax(`/api/burgers/${id}`, {
			type: "DELETE"
		}).then(() => {
			console.log(`DELETED BURGER BY ID: ${id}`);
			location.reload();
		});
	});
});
