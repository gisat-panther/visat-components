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
		sidePanelNodes.forEach((node, index) => {
			node.offsetTop - 100 <= event.target.scrollTop &&
			node.offsetTop + node.offsetHeight - 100 > event.target.scrollTop
				? jumpSection == null
					? sidePanelRef.current.offsetHeight +
							sidePanelRef.current.scrollTop >=
					  sidePanelRef.current.scrollHeight - 10
						? setActiveSection(sidePanelNodes.length - 1)
						: setActiveSection(index)
					: (setActiveSection(jumpSection),
					  sidePanelRef.current.offsetHeight +
							sidePanelRef.current.scrollTop >=
							sidePanelRef.current.scrollHeight - 10 &&
					  jumpSection == sidePanelNodes.length - 1
							? setJumpSection(null)
							: sidePanelNodes[jumpSection].offsetTop >
									event.target.scrollTop - 5 &&
							  sidePanelNodes[jumpSection].offsetTop <
									event.target.scrollTop + 5
							? setJumpSection(null)
							: null)
				: null;
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
