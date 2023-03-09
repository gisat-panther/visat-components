import StoryNavPanelContainer from './StoryNavPanelContainer';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StoryNavPanel = ({
	className,
	activeSection,
	setJumpSection,
	sidePanelRef,
	layout,
	contentSize,
	theme,
	navigationIcons,
}) => {
	const classes = classnames('ptr-StoryNavPanel', {}, layout, className);

	return (
		<div className={classes}>
			<StoryNavPanelContainer
				className={''}
				activeSection={activeSection}
				setJumpSection={setJumpSection}
				sidePanelRef={sidePanelRef}
				contentSize={contentSize}
				theme={theme}
				navigationIcons={navigationIcons}
			/>
		</div>
	);
};

StoryNavPanel.propTypes = {
	className: PropTypes.string,
	activeSection: PropTypes.number,
	setJumpSection: PropTypes.func,
	sidePanelRef: PropTypes.object,
	layout: PropTypes.string,
	contentSize: PropTypes.number,
	theme: PropTypes.string,
	navigationIcons: PropTypes.object,
};

export default StoryNavPanel;
