function quizRadioFormBehavior(quizRadioForm: HTMLFormElement) {
	const quizRadioButton = quizRadioForm.querySelector(
		"button",
	) as HTMLButtonElement;

	quizRadioForm.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	function checkValid() {
		if (quizRadioForm.checkValidity()) {
			quizRadioButton.disabled = false;
		} else {
			quizRadioButton.disabled = true;
		}
	}

	quizRadioForm.addEventListener("input", () => checkValid());

	quizRadioForm.addEventListener("reset", () => {
		// Allow the form time to recalculate validity
		setTimeout(checkValid, 0);
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
