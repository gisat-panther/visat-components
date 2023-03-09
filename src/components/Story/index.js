import classnames from 'classnames';
import PropTypes from 'prop-types';
import StorySidePanel from './SidePanel';
import {Children, cloneElement, useEffect, useState} from 'react';
import ReactResizeDetector from 'react-resize-detector';
import './style.scss';

const Story = ({
	className,
	children,
	panelLayout,
	theme,
	activeStep, // if activeStep is set - it is the default active section
	onStepChange, // called when section is changed with the active section as the argument
}) => {
	const [activeSection, setActiveSection] = useState(0);
	const [jumpSection, setJumpSection] = useState(null);
	const [sidePanelRef, setSidePanelRef] = useState(undefined);
	const [contentSize, setContentSize] = useState();
	const classes = classnames(
		'ptr-Story',
		{},
		'is-' + panelLayout + '-layout',
		className
	);

	useEffect(() => {
		if (onStepChange) {
			onStepChange(activeSection);
		}
	}, [activeSection]);

	const onScroll = event => {
		const sidePanelNodes = Array.from(sidePanelRef.current.childNodes);
		let userReachedBottom =
			sidePanelRef.current.offsetHeight + sidePanelRef.current.scrollTop >=
			sidePanelRef.current.scrollHeight - 10;

		sidePanelNodes.forEach((node, index) => {
			let userReachedSection =
				node.offsetTop - 100 <= event.target.scrollTop &&
				node.offsetTop + node.offsetHeight - 100 > event.target.scrollTop;

			if (userReachedSection) {
				// user is located in this section (node)
				if (jumpSection === null) {
					// user is scrolling
					if (userReachedBottom) {
						setActiveSection(sidePanelNodes.length - 1);
					} else {
						setActiveSection(index);
					}
				} else {
					// user used navigation
					setActiveSection(jumpSection);
					let userJumpedToBottom = jumpSection === sidePanelNodes.length - 1;
					let userReachedJumpedSection =
						sidePanelNodes[jumpSection].offsetTop >
							event.target.scrollTop - 5 &&
						sidePanelNodes[jumpSection].offsetTop < event.target.scrollTop + 5;

					if (userReachedBottom && userJumpedToBottom) {
						setJumpSection(null);
					} else if (userReachedJumpedSection) {
						setJumpSection(null);
					}
				}
			}
		});
	};

	const noSidePanel = !Children.map(children, child => {
		return child.type === StorySidePanel;
	}).includes(true);

	return (
		<div className={classes}>
			{Children.map(children, child =>
				child.type === StorySidePanel
					? cloneElement(child, {
							onScroll,
							setSidePanelRef,
							panelLayout,
							theme,
							activeSection,
							activeStep,
							setJumpSection,
							contentSize,
					  })
					: sidePanelRef !== undefined || noSidePanel
					? cloneElement(child, {
							activeSection,
							setJumpSection,
							sidePanelRef,
							panelLayout,
							theme,
							noSidePanel: noSidePanel,
					  })
					: null
			)}
			<ReactResizeDetector onResize={event => setContentSize(event)} />
		</div>
	);
};

Story.propTypes = {
	activeStep: PropTypes.number,
	onStepChange: PropTypes.func,
	defaultStep: PropTypes.number,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	panelLayout: PropTypes.string,
	theme: PropTypes.string,
};

export default Story;
