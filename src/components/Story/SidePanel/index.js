import StoryNavPanel from './NavPanel';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';

import './style.scss';

const StorySidePanel = ({
	className,
	children,
	onScroll,
	setSidePanelRef,
	panelLayout,
	theme,
	activeSection,
	setJumpSection,
	contentSize,
	hideNavigation,
	navigationIcons,
}) => {
	useEffect(() => {
		setSidePanelRef(sidePanelRef);
	}, []);

	const classes = name => {
		return classnames(
			name,
			{},
			panelLayout,
			name === 'ptr-StorySidePanel' ? className : ''
		);
	};
	const sidePanelRef = useRef();

	return (
		<div className={classes('ptr-StorySidePanel-container')}>
			{sidePanelRef.current && !hideNavigation ? (
				<StoryNavPanel
					activeSection={activeSection}
					setJumpSection={setJumpSection}
					sidePanelRef={sidePanelRef}
					contentSize={contentSize}
					theme={theme}
					navigationIcons={navigationIcons}
				/>
			) : null}
			<div
				className={classes('ptr-StorySidePanel')}
				style={hideNavigation ? {width: '100%', paddingLeft: '1rem'} : {}}
				ref={sidePanelRef}
				onScroll={onScroll}
			>
				{children}
			</div>
		</div>
	);
};

StorySidePanel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	onScroll: PropTypes.func,
	setSidePanelRef: PropTypes.func,
	panelLayout: PropTypes.string,
	activeSection: PropTypes.number,
	setJumpSection: PropTypes.func,
	contentSize: PropTypes.number,
	theme: PropTypes.string,
	hideNavigation: PropTypes.bool,
	navigationIcons: PropTypes.object,
};

export default StorySidePanel;
