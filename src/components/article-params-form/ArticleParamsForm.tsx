import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

// import components
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

import styles from './ArticleParamsForm.module.scss';

// import constants
import {
	backgroundColors,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	contentWidthArr,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';

type ArticleParamsFormProps = {
	setStyleOptions: React.Dispatch<
		React.SetStateAction<{
			fontFamilyOption: OptionType;
			fontColor: OptionType;
			backgroundColor: OptionType;
			contentWidth: OptionType;
			fontSizeOption: OptionType;
		}>
	>;
};

export const ArticleParamsForm = ({
	setStyleOptions,
}: ArticleParamsFormProps) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [fontFamilyOption, setFontFamilyOption] = useState(
		fontFamilyOptions[0]
	);
	const [fontSizeOption, setFontSizeOption] = useState(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);
	const [contentWidth, setContentWidth] = useState(contentWidthArr[0]);

	function handleReset() {
		setFontFamilyOption(fontFamilyOptions[0]);
		setFontSizeOption(fontSizeOptions[0]);
		setFontColor(fontColors[0]);
		setBackgroundColor(backgroundColors[0]);
		setContentWidth(contentWidthArr[0]);
		setStyleOptions(defaultArticleState);
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStyleOptions({
			fontFamilyOption,
			fontSizeOption,
			fontColor,
			contentWidth,
			backgroundColor,
		});
	}

	useEffect(() => {
		const handleCloseEvent = () => {
			setMenuIsOpen(false);
		};
		document.addEventListener('click', handleCloseEvent);

		return () => {
			document.removeEventListener('click', handleCloseEvent);
		};
	}, [menuIsOpen]);

	return (
		<>
			<ArrowButton
				isOpen={menuIsOpen}
				onClick={(event) => {
					event.stopPropagation(); /* so sidebar isn't closed on click on it */
					setMenuIsOpen(!menuIsOpen);
				}}
			/>
			<aside
				onClick={
					(event) =>
						event.stopPropagation() /* so sidebar isn't closed on click on it */
				}
				className={clsx(styles.container, menuIsOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						options={fontFamilyOptions}
						selected={fontFamilyOption}
						onChange={setFontFamilyOption}></Select>
					<RadioGroup
						title={'Размер шрифта'}
						options={fontSizeOptions}
						selected={fontSizeOption}
						onChange={setFontSizeOption}
						name={'radio'}></RadioGroup>
					<Select
						title={'Цвет шрифта'}
						options={fontColors}
						selected={fontColor}
						onChange={setFontColor}></Select>
					<Separator></Separator>
					<Select
						title={'Цвет фона'}
						options={backgroundColors}
						selected={backgroundColor}
						onChange={setBackgroundColor}></Select>
					<Select
						title={'Ширина контента'}
						options={contentWidthArr}
						selected={contentWidth}
						onChange={setContentWidth}></Select>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
