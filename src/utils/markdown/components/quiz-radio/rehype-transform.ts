import { QuizRadio } from "./quiz-radio";
import { RehypeFunctionComponent } from "../types";

export const transformQuizRadio: RehypeFunctionComponent = ({ attributes }) => {
	return QuizRadio({
		title: "Based on what you’ve seen: Why does JS?",
		options: [
			{ value: "1", label: "Option 1" },
			{ value: "2", label: "Option 2" },
			{ value: "3", label: "Option 3" },
			{ value: "4", label: "Option 4" },
		],
		correct: "2",
		numberOfVotes: 23,
		numberOfCorrectVotes: 13,
	});
};
