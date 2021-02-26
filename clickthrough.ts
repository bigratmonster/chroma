const ratImg = document.getElementById('rat-img');
let chroma = false;

function toggleChroma(chroma: boolean): boolean {
	if (!chroma) {
		(ratImg as HTMLImageElement).src = './bigrat-chroma.gif';
		return true
	} else {
		(ratImg as HTMLImageElement).src = './bigrat-static.png';
		return false
	}
}


(ratImg as HTMLImageElement).addEventListener('click', () => { chroma = toggleChroma(chroma)});

document.addEventListener('keydown', (pressed) => {
	if(pressed.key == 'j') { chroma = toggleChroma(chroma) }
});

