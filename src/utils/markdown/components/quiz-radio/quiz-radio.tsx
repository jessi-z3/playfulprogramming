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
}

/** @jsxImportSource hastscript */
export function QuizRadio(props: QuizRadioProps): Element {
	const { title, options, numberOfVotes, numberOfCorrectVotes } = props;

	return (
		<section>
			<h2 data-no-heading-link>{title}</h2>
			<code>Options: {JSON.stringify(options)}</code>
		</section>
	) as never;
}
