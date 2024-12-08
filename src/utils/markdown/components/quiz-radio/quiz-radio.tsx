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
		<form data-quiz-radio class="quizOptionContainer">
			<fieldset>
				<div class="quizOptionTitle">
					<legend class="text-style-headline-6">{title}</legend>
				</div>

				{children}

				<div class="quizOptionOptionsContainer">
					{options.map((option) => {
						const optionId = option.value + "_id";
						return (
							<div class="quizOptionOptionContainer">
								<label>
									<input
										class="quizOptionOptionInput"
										required
										type="radio"
										name={id}
										value={option.value}
									/>
									<div class="quizOptionOptionInnerContainer">
										{option.label}
									</div>
								</label>
							</div>
						);
					})}
				</div>
			</fieldset>

			<div data-message-section></div>

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
