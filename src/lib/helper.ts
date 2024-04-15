function remToPx(rem: number) {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Smooth scroll to linked id, adds 8rem buffer above target
export function scrollTo(ev: MouseEvent) {
	const target = ev.target as HTMLAnchorElement;
	const href = target.getAttribute('href');
	if (!href) return;
	const element = document.querySelector(href);
	if (!element) return;
	const headerOffset = remToPx(8);
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
}
