function quizRadioFormBehavior(quizRadioForm: HTMLFormElement) {
	const quizRadioButton = quizRadioForm.querySelector(
		"button",
	) as HTMLButtonElement;

	quizRadioForm.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	quizRadioForm.addEventListener("change", (e) => {
		console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
		quizRadioButton.disabled = false;
	});
}

export function enableQuizRadios() {
	const quizRadios = Array.from(
		document.querySelectorAll("[data-quiz-radio]"),
	) as HTMLFormElement[];
	for (const quizRadioForm of quizRadios) {
		quizRadioFormBehavior(quizRadioForm);
	}
}
