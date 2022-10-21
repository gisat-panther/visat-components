import AppStoryNavPanel from '../NavPanel';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import {useRef} from 'react';

import './style.scss';

const AppStorySidePanel = ({
	className,
	children,
	onScroll,
	setSidePanelRef,
	layout,
	theme,
	activeSection,
	setJumpSection,
	contentSize,
	hideNavigation,
}) => {
	const classes = name => {
		return classnames(
			name,
			{},
			layout,
			name == 'ptr-AppStorySidePanel' ? className : ''
		);
	};
	const sidePanelRef = useRef();

	return (
		<div className={classes('ptr-AppStorySidePanel-container')}>
			{sidePanelRef.current && !hideNavigation ? (
				<AppStoryNavPanel
					activeSection={activeSection}
					setJumpSection={setJumpSection}
					sidePanelRef={sidePanelRef}
					contentSize={contentSize}
					theme={theme}
				/>
			) : null}
			<div
				className={classes('ptr-AppStorySidePanel')}
				ref={sidePanelRef}
				onScroll={onScroll}
				onLoad={(() => sidePanelRef, setSidePanelRef(sidePanelRef))}
			>
				{children}
			</div>
		</div>
	);
};

AppStorySidePanel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	onScroll: PropTypes.func,
	setSidePanelRef: PropTypes.func,
	layout: PropTypes.string,
	activeSection: PropTypes.number,
	setJumpSection: PropTypes.func,
	contentSize: PropTypes.number,
	theme: PropTypes.string,
	hideNavigation: PropTypes.bool,
};

export default AppStorySidePanel;
