import classnames from 'classnames';
import PropTypes from 'prop-types';
import {cloneElement} from 'react';
import './style.scss';

const StoryMainPanel = ({
	className,
	children,
	activeSection,
	sidePanelRef,
	panelLayout,
	theme,
	noSidePanel,
}) => {
	const classes = classnames('ptr-StoryMainPanel', {}, panelLayout, className);
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
		<div className={classes} style={noSidePanel ? {width: '100%'} : {}}>
			{cloneElement(newChildren[activeSection], {panelLayout, theme})}
		</div>
	);
};

StoryMainPanel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	activeSection: PropTypes.number,
	sidePanelRef: PropTypes.object,
	panelLayout: PropTypes.string,
	theme: PropTypes.string,
	noSidePanel: PropTypes.bool,
};

export default StoryMainPanel;
