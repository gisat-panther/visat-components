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
	activeStep,
	setJumpSection,
	contentSize,
	hideNavigation,
	navigationIcons,
}) => {
	useEffect(() => {
		setSidePanelRef(sidePanelRef);
	}, []);

	useEffect(() => {
		let sidePanelNodes = Array.from(sidePanelRef.current.childNodes);
		if (activeStep !== activeSection) {
			if (activeStep === -1) {
				sidePanelRef?.current?.scrollTo({
					top: sidePanelNodes[sidePanelNodes.length - 1].offsetTop,
				}),
					setJumpSection(sidePanelNodes.length - 1);
			} else {
				sidePanelRef?.current?.scrollTo({
					top: sidePanelNodes[activeStep].offsetTop,
				}),
					setJumpSection(activeStep);
			}
		}
	}, [activeStep]);

	const sidePanelRef = useRef();

	const classes = name => {
		return classnames(name, {}, 'is-' + panelLayout + '-layout', className);
	};

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
				style={
					hideNavigation
						? {width: '100%', paddingLeft: '1rem'}
						: !sidePanelRef.current
						? {marginLeft: '2.5rem'}
						: {}
				}
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
	activeStep: PropTypes.number,
};

export default StorySidePanel;
