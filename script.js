//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let currentSound = null;

buttons.forEach(button =>
	{
		button.addEventListener('click', () =>
			{
				const soundName = button.getAttribute('data-sound');
				const audio = document.getElementById(`${soundName}-audio`);
				if(currentSound){
					currentSound.pause();
				currentSound.currentTime = 0;
			}
				currentSound = audio;
				audio.play();
			});
	});
stopButton.addEventListener('click', () =>
	{
		if(currentSound)
		{
			currentSound.pause();
			currentSound.currentTime = 0;
			currentSound = null;
		}
	});








