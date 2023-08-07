import { PropsWithChildren } from "components/types";
import { useState } from "preact/hooks";
import { useElementSize } from "../../../hooks/use-element-size";
import styles from "./filter-section.module.scss";
import { Chip } from "components/chip/chip";

interface FilterSectionProps {
	title: string;
	selectedNumber: number;
	onClear: () => void;
	class?: string;
	className?: string;
}

export const FilterSection = ({
	title,
	children,
	selectedNumber,
	onClear,
	class: className = "",
	className: classNameName = "",
}: PropsWithChildren<FilterSectionProps>) => {
	const [collapsed, setCollapsed] = useState(false);

	const { setEl, size } = useElementSize();

	return (
		<div
			className={`${styles.section} ${
				collapsed ? "" : styles.sectionExpanded
			} ${className} ${classNameName}`}
		>
			<div className={styles.sectionHeader}>
				<button
					type="button"
					className={styles.sectionTitle}
					style={{
						paddingRight: size?.width,
					}}
					aria-expanded={!collapsed}
					onClick={() => setCollapsed(!collapsed)}
				>
					<span
						className={`${styles.collapseIcon} ${
							collapsed ? styles.collapsed : ""
						}`}
					/>
					<span
						className={`text-style-button-large ${styles.sectionTitleText}`}
					>
						{title}
					</span>
					<span
						className={`text-style-button-large ${styles.sectionNumberText}`}
					>
						{selectedNumber ? `(${selectedNumber})` : null}
					</span>
				</button>
				{!!selectedNumber && (
					<div className={styles.clearContainer} ref={setEl}>
						<Chip
							tag="button"
							type="button"
							className={styles.clearChip}
							onClick={onClear}
						>
							Clear
						</Chip>
					</div>
				)}
			</div>
			<div className={styles.sectionContent} aria-hidden={collapsed}>
				{children}
			</div>
		</div>
	);
};
