//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const buttons = document.querySelectorAll('.stop');

let currentSound = null;

buttons.forEach(button =>
	{
		button.addEventListener('click', () =>
			{
				const soundName = button.getAttribute('data-sound');
				const audio = new Audio ('sounds/${soundName}.mp3');
				if(currentSound)
					currentSound.pause();
				currentSound.current
			})
	})