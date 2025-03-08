import { useState, CSSProperties } from 'react';

import { defaultArticleState } from 'src/constants/articleProps';

import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [styleOptions, setStyleOptions] = useState(defaultArticleState);
	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': styleOptions.fontFamilyOption.value,
					'--font-size': styleOptions.fontSizeOption.value,
					'--font-color': styleOptions.fontColor.value,
					'--container-width': styleOptions.contentWidth.value,
					'--bg-color': styleOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setStyleOptions={setStyleOptions} />
			<Article />
		</main>
	);
};
