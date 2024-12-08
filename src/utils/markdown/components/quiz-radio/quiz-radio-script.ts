function quizRadioFormBehavior(quizRadioForm: HTMLFormElement) {
	quizRadioForm.addEventListener("submit", (e) => {
		e.preventDefault();
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
