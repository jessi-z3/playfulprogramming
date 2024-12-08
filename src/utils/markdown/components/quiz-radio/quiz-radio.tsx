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
		<section>
			<fieldset>
				<legend>{title}</legend>

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
		</section>
	) as never;
}
