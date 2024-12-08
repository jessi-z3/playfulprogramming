/** @jsxRuntime automatic */
import { Element } from "hast";

interface QuizRadioProps {
	title: string;
	options: Array<{
		value: string;
		label: string;
	}>;
	// `value` of the correct option
	correct: string;
	numberOfVotes: number;
	numberOfCorrectVotes: number;
}

/** @jsxImportSource hastscript */
export function QuizRadio(props: QuizRadioProps): Element {
	const { title, options, correct, numberOfVotes, numberOfCorrectVotes } =
		props;

	return (
		<section>
			<h2
				data-no-heading-link
			>
				{title}
			</h2>
		</section>
	) as never;
}
