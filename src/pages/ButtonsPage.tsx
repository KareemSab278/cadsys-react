import {
	ButtonPrimaryRound,
	ButtonPrimarySquare,
	DangerButtonRound,
	DangerButtonSquare,
	SuccessButtonRound,
	SuccessButtonSquare,
} from '../components/Buttons/Buttons';

function ButtonsPage() {
	return (
		<>
			<ButtonPrimaryRound text="Primary Round" onClick={() => alert('Primary Round Button Clicked!')} />
			<ButtonPrimarySquare text="Primary Square" onClick={() => alert('Primary Square Button Clicked!')} />
			<DangerButtonRound text="Danger Round" onClick={() => alert('Danger Round Button Clicked!')} />
			<DangerButtonSquare text="Danger Square" onClick={() => alert('Danger Square Button Clicked!')} />
			<SuccessButtonRound text="Success Round" onClick={() => alert('Success Round Button Clicked!')} />
			<SuccessButtonSquare text="Success Square" onClick={() => alert('Success Square Button Clicked!')} />
		</>
	);
}

export { ButtonsPage };
