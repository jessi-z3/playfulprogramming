/** @jsxRuntime automatic */
import { Element } from "hast";

export interface QuizRadioOption {
	value: string;
	label: string;
	correct: boolean;
}

export interface QuizRadioProps {
	id: string;
	title: string;
	options: QuizRadioOption[];
	numberOfVotes: number;
	numberOfCorrectVotes: number;
	children: Element[];
}

/** @jsxImportSource hastscript */
export function QuizRadio(props: QuizRadioProps): Element {
	const { id, title, options, numberOfVotes, numberOfCorrectVotes, children } =
		props;

	return (
		<form
			data-quiz-radio
			{...{
				onsubmit: "event.preventDefault()",
			}}
			class="quizOptionContainer"

		>
			<fieldset required>
				<div class="quizOptionTitle">
					<legend class="text-style-headline-6">{title}</legend>
				</div>

				{children}

				{options.map((option) => {
					const optionId = option.value + "_id";
					return (
						<div>
							<input
								type="radio"
								id={optionId}
								name={id}
								value={option.value}
							/>
							<label for={optionId}>{option.label}</label>
						</div>
					);
				})}
			</fieldset>

			<div class="quizOptionButtonRowContainer">
				<p class="quizOptionVotes">{numberOfVotes} votes</p>
				<span class="quizOptionButtonContainer">
					<button
						disabled
						class="button text-style-button-regular primary-emphasized regular"
					>
						Submit
					</button>
				</span>
			</div>
		</form>
	) as never;
}
