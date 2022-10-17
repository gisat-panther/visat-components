import classnames from 'classnames';
import PropTypes from 'prop-types';
import {cloneElement} from 'react';
import './style.scss';

const AppStoryMainPanel = ({
	className,
	children,
	activeSection,
	sidePanelRef,
	layout,
	theme,
}) => {
	const classes = classnames('ptr-AppStoryMainPanel', {}, layout, className);
	let newChildren = children;
	let sidePanelNodes;
	sidePanelRef
		? ((sidePanelNodes = Array.from(sidePanelRef.current.childNodes)),
		  sidePanelNodes.length !== children.length
				? // The number of showcases in the main panel is different from the number of showcases in side panel
				  ((newChildren = []),
				  sidePanelNodes.forEach((node, index) => {
						children[index]
							? newChildren.push(children[index])
							: newChildren.push(<div></div>);
				  }))
				: null)
		: null;
	return (
		<div className={classes}>
			{cloneElement(newChildren[activeSection], {layout, theme})}
		</div>
	);
};

AppStoryMainPanel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	activeSection: PropTypes.number,
	sidePanelRef: PropTypes.object,
	layout: PropTypes.string,
	theme: PropTypes.string,
};

export default AppStoryMainPanel;
