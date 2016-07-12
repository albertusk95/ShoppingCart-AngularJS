app.factory('sharedproduct', [function() {
	var products = [];
	var statusItem = [];
	var packedProducts = [];
	var cost = 0;
	
	function saveItem(item) {
		products.push(item);
	}
	
	function loadItem() {
		return packedProducts;
	}
	
	function finalizedItems() {
		
		// initialize the item status 
		for (var i = 0; i < products.length; i++) {
			statusItem.push(1);
		}
		
		// count the total items for each type of object
		for (var i = 0; i < products.length; i++) {
			if (statusItem[i] === 1) {
				
				var count = 0;
				
				for (var j = 0; j < products.length; j++) {
					if (products[i] == products[j]) {
						count++;
						statusItem[j] = 0;
					}
				}
				
				var obj = {
					name: products[i].name,
					totalItem: count,
					totalPrice: products[i].price * count 
				};
				
				packedProducts.push(obj);
			}
		}
		
		// count the total price
		for (var i = 0; i < packedProducts.length; i++) {
			cost = cost + packedProducts[i].totalPrice;
		}
		
	}
	
	function loadTotalPrice() {
		return cost;
	}
	
	return {
		saveItem: saveItem,
		loadItem: loadItem,
		finalizedItems: finalizedItems,
		loadTotalPrice: loadTotalPrice
	}	
}]);