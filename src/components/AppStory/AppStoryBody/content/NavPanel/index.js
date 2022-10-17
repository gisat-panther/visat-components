import AppStoryNavPanelContainer from './AppStoryNavPanelContainer';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryNavPanel = ({
	className,
	activeSection,
	setJumpSection,
	sidePanelRef,
	layout,
	contentSize,
	theme,
}) => {
	const classes = classnames('ptr-AppStoryNavPanel', {}, layout, className);
	const jumpSection = section => {
		setJumpSection(section);
	};

	return (
		<div className={classes}>
			<AppStoryNavPanelContainer
				className={''}
				activeSection={activeSection}
				jumpSection={jumpSection}
				sidePanelRef={sidePanelRef}
				contentSize={contentSize}
				theme={theme}
			/>
		</div>
	);
};

AppStoryNavPanel.propTypes = {
	className: PropTypes.string,
	activeSection: PropTypes.number,
	setJumpSection: PropTypes.func,
	sidePanelRef: PropTypes.object,
	layout: PropTypes.string,
	contentSize: PropTypes.number,
	theme: PropTypes.string,
};

export default AppStoryNavPanel;
