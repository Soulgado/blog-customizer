import { useState } from 'react';
import { clsx } from 'clsx';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
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
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
