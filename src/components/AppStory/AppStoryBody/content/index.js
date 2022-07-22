import classnames from 'classnames';
import PropTypes from 'prop-types';
import {Children, cloneElement, useState} from 'react';
import './style.scss';

const AppStoryContent = ({className, children}) => {
	const [activeSection, setActiveSection] = useState(0);
	const [jumpSection, setJumpSection] = useState(null);
	const [sidePanelRef, setSidePanelRef] = useState(undefined);
	const classes = classnames('ptr-AppStoryContent', {}, className);

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
			// userReachedSection
			// 	? // user is located in this section (node)
			// 	  jumpSection == null
			// 		? // user is scrolling
			// 		  userReachedBottom
			// 			? // user reached the bottom section
			// 			  setActiveSection(sidePanelNodes.length - 1)
			// 			: setActiveSection(index)
			// 		: // user jumped to a section
			// 		  (setActiveSection(jumpSection),
			// 		  userReachedBottom && jumpSection == sidePanelNodes.length - 1
			// 				? // user jumped to the bottom section and reached it
			// 				  setJumpSection(null)
			// 				: sidePanelNodes[jumpSection].offsetTop >
			// 						event.target.scrollTop - 5 &&
			// 				  sidePanelNodes[jumpSection].offsetTop <
			// 						event.target.scrollTop + 5
			// 				? // user reached the jumped section
			// 				  setJumpSection(null)
			// 				: null)
			// 	: null;
		});
	};

	return (
		<div className={classes}>
			{Children.map(children, child =>
				child.type.name == 'AppStorySidePanel'
					? cloneElement(child, {
							onScroll,
							setSidePanelRef,
					  })
					: sidePanelRef !== undefined
					? cloneElement(child, {
							activeSection,
							setJumpSection,
							sidePanelRef,
					  })
					: null
			)}
		</div>
	);
};

AppStoryContent.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default AppStoryContent;
