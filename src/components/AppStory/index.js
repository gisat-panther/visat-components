import classnames from 'classnames';
import PropTypes from 'prop-types';
import AppStorySidePanel from './SidePanel';
import {Children, cloneElement, useState} from 'react';
import ReactResizeDetector from 'react-resize-detector';
import './style.scss';

const AppStoryContent = ({className, children, layout, theme}) => {
	const [activeSection, setActiveSection] = useState(0);
	const [jumpSection, setJumpSection] = useState(null);
	const [sidePanelRef, setSidePanelRef] = useState(undefined);
	const [contentSize, setContentSize] = useState();
	const classes = classnames('ptr-AppStoryContent', {}, layout, className);

	const onScroll = event => {
		let sidePanelNodes = Array.from(sidePanelRef.current.childNodes);
		let userReachedBottom =
			sidePanelRef.current.offsetHeight + sidePanelRef.current.scrollTop >=
			sidePanelRef.current.scrollHeight - 10;

		sidePanelNodes.forEach((node, index) => {
			let userReachedSection =
				node.offsetTop - 100 <= event.target.scrollTop &&
				node.offsetTop + node.offsetHeight - 100 > event.target.scrollTop;

			if (userReachedSection) {
				// user is located in this section (node)
				if (jumpSection == null) {
					// user is scrolling
					if (userReachedBottom) {
						setActiveSection(sidePanelNodes.length - 1);
					} else {
						setActiveSection(index);
					}
				} else {
					setActiveSection(jumpSection);
					let userJumpedToBottom = jumpSection == sidePanelNodes.length - 1;
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

	const defineTheme = theme ? theme : 'default';
	const noSidePanel = !Children.map(children, child => {
		return child.type == AppStorySidePanel;
	}).includes(true);

	return (
		<div className={classes}>
			{Children.map(children, child =>
				child.type === AppStorySidePanel
					? cloneElement(child, {
							onScroll,
							setSidePanelRef,
							layout,
							theme: defineTheme,
							activeSection,
							setJumpSection,
							contentSize,
					  })
					: sidePanelRef !== undefined || noSidePanel
					? cloneElement(child, {
							activeSection,
							setJumpSection,
							sidePanelRef,
							layout,
							theme: defineTheme,
							noSidePanel: noSidePanel,
					  })
					: null
			)}
			<ReactResizeDetector onResize={event => setContentSize(event)} />
		</div>
	);
};

AppStoryContent.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	layout: PropTypes.string,
	theme: PropTypes.string,
};

export default AppStoryContent;
