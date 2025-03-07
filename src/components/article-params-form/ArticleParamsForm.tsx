import { useState } from 'react';
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
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [fontOption, setFontOption] = useState(fontFamilyOptions[0]);
	const [fontSizeOption, setFontSizeOption] = useState(fontSizeOptions[0]);
	const [fontColorOption, setFontColorOption] = useState(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);
	const [contentWidth, setContentWidth] = useState(contentWidthArr[0]);

	function handleReset() {
		setFontOption(fontFamilyOptions[0]);
		setFontSizeOption(fontSizeOptions[0]);
		setFontColorOption(fontColors[0]);
		setBackgroundColor(backgroundColors[0]);
		setContentWidth(contentWidthArr[0]);
	}

	return (
		<>
			<ArrowButton
				isOpen={menuIsOpen}
				onClick={() => {
					setMenuIsOpen(!menuIsOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, menuIsOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						options={fontFamilyOptions}
						selected={fontOption}
						onChange={setFontOption}></Select>
					<RadioGroup
						title={'Размер шрифта'}
						options={fontSizeOptions}
						selected={fontSizeOption}
						onChange={setFontSizeOption}
						name={'radio'}></RadioGroup>
					<Select
						title={'Цвет шрифта'}
						options={fontColors}
						selected={fontColorOption}
						onChange={setFontColorOption}></Select>
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
