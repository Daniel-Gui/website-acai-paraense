function createMobileMenuState() {
	let isMenuOpen = $state(false);
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	
	return {
		get isMenuOpen() {
			return isMenuOpen;
		},
		toggleMenu
	};
}

export const mobileMenuState = createMobileMenuState();
