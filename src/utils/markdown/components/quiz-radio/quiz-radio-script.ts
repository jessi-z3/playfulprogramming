function waitRandomTimeAndPossiblyFail() {
	return new Promise<void>((resolve, reject) => {
		setTimeout(
			() => {
				if (Math.random() <= 0.3) {
					reject();
				} else {
					resolve();
				}
			},
			Math.floor(Math.random() * 1000),
		);
	});
}

function disableQuizRadio(quizRadioForm: HTMLFormElement) {
	quizRadioForm.disabled = true;
	Array.from(quizRadioForm.elements).forEach(
		(el) => ((el as HTMLInputElement).disabled = true),
	);
}

function enableQuizRadio(quizRadioForm: HTMLFormElement) {
	quizRadioForm.disabled = false;
	Array.from(quizRadioForm.elements).forEach(
		(el) => ((el as HTMLInputElement).disabled = false),
	);
}

function quizRadioFormBehavior(quizRadioForm: HTMLFormElement) {
	const quizRadioButton = quizRadioForm.querySelector(
		"button",
	) as HTMLButtonElement;

	const messageSection = quizRadioForm.querySelector(
		"[data-message-section]",
	) as HTMLDivElement;

	const errorSection = quizRadioForm.querySelector(
		"[data-error-message]",
	) as HTMLElement;

	const loadingMessage = quizRadioForm.querySelector(
		"[data-loading-message]",
	) as HTMLElement;

	const votes = quizRadioForm.querySelector("[data-votes]") as HTMLElement;

	quizRadioForm.addEventListener("submit", (e) => {
		e.preventDefault();
		disableQuizRadio(quizRadioForm);
		errorSection.style.display = "none";
		votes.style.display = "none";
		loadingMessage.style.display = "flex";
		waitRandomTimeAndPossiblyFail()
			.then(() => {
				loadingMessage.style.display = "none";
				errorSection.style.display = "none";
				votes.style.display = "flex";
			})
			.catch((err) => {
				loadingMessage.style.display = "none";
				errorSection.style.display = "block";
				votes.style.display = "flex";
				enableQuizRadio(quizRadioForm);
			});
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
