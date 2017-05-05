var image = document.querySelector("img");
var inputs = document.querySelectorAll("input");

inputs.forEach(function(item) {
	item.addEventListener("change", function() {
		var suffix = this.dataset.sizing || "";
		var val = this.value + suffix;
		var prop = "--" + this.name;
		document.documentElement.style.setProperty(prop, val); 
	});
});
