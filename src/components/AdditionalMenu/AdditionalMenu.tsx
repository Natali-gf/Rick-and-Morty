import React from 'react';
import cn from 'classnames';
import { ConfigProvider, FloatButton } from 'antd';
import { ReactComponent as IconMore } from '../../assets/icons/more_vertical.svg';
import { ReactComponent as IconDownload } from '../../assets/icons/download.svg';
import { ReactComponent as IconInfo } from '../../assets/icons/info.svg';
import s from './style.module.scss';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { ICharacter } from '../../interfaces/character';

function AdditionalMenu(): JSX.Element {
	const { characters } = useAppSelector((state: RootState) => state.characters);

	function downloadCharacters(characters: ICharacter[]) {
		let csvData: string = "id, name, species, status, image, type, gender, location, episode\n";

		characters.forEach((character: ICharacter): void => {
			const { id, name, species, status, image, type, gender, location, episode } = character;
			csvData += `${id}, ${name}, ${species}, ${status}, ${image}, ${type}, ${gender}, ${location.name}, ${episode[0].name}\n`;
		});

		const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
		const link: HTMLAnchorElement = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "characters.csv";
		link.click();
	}

	return (
		<ConfigProvider
			theme={{ token: {
				controlHeightLG: 56,
			}}}>
			<FloatButton.Group
				trigger="click"
				style={{ position: 'absolute', margin: 'auto', bottom: '40px' }}
				icon={<IconMore className={s.fabButton__icon}/>}>
				<ConfigProvider
					theme={{ token: {
						controlHeightLG: 40,
						fontSizeIcon: 16,
						fontSize: 20,
					}}}>
					<FloatButton className={s.fabButton}
								 icon={<IconInfo />}
					/>
					<FloatButton className={s.fabButton}
								 icon={<IconDownload />}
								 onClick={() => downloadCharacters(characters)}
					/>
				</ConfigProvider>
			</FloatButton.Group>
		</ConfigProvider>
	);
}

export default AdditionalMenu;