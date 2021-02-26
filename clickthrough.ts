const ratImg = document.getElementById('rat-img');
let chroma = false;

(ratImg as HTMLImageElement).addEventListener('click', () => {
	if (!chroma) {
		(ratImg as HTMLImageElement).src = './bigrat-chroma.gif';
		chroma = true
	} else {
		(ratImg as HTMLImageElement).src = './bigrat-static.png';
		chroma = false
	}
});