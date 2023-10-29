import React from 'react';
import cn from 'classnames';
import { ConfigProvider, FloatButton } from 'antd';
import { ReactComponent as IconMore } from '../../assets/icons/more_vertical.svg';
import { ReactComponent as IconDownload } from '../../assets/icons/download.svg';
import { ReactComponent as IconInfo } from '../../assets/icons/info.svg';
import s from './style.module.scss';

function AdditionalMenu(): JSX.Element {

	return (
		<ConfigProvider
			theme={{ token: {
				controlHeightLG: 56,
			}}}>
			<FloatButton.Group
				trigger="click"
				style={{ position: 'absolute', margin: 'auto' }}
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
					/>
				</ConfigProvider>
			</FloatButton.Group>
		</ConfigProvider>
	);
}

export default AdditionalMenu;