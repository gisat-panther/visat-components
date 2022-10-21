import classnames from 'classnames';
import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from 'react';

import IconTool from '../../../IconTool';

import './style.scss';

const AppStoryNavPanelContainer = ({
	className,
	activeSection,
	jumpSection,
	sidePanelRef,
	contentSize,
	theme,
}) => {
	const [isOverflown, setIsOverflown] = useState();
	const [lastSidePanelHeight, setLastSidePanelHeight] = useState();
	const navPanelCasesRef = useRef();
	const navPanel = useRef();
	const classes = classnames('ptr-AppStoryNavPanelContainer', {}, className);

	useEffect(() => {
		navPanel?.current?.offsetHeight
			? sidePanelRef.current.offsetHeight !== lastSidePanelHeight
				? navPanel.current.offsetHeight > sidePanelRef.current.offsetHeight
					? (setIsOverflown(true),
					  setLastSidePanelHeight(sidePanelRef.current.offsetHeight))
					: (setIsOverflown(false),
					  setLastSidePanelHeight(sidePanelRef.current.offsetHeight))
				: null
			: null;
	}, [sidePanelRef, contentSize]);

	let sidePanelNodes = Array.from(sidePanelRef.current.childNodes);
	let navIconsArray = [];
	sidePanelNodes.forEach((node, index) => {
		navIconsArray.push(
			<IconTool
				key={index}
				className={
					activeSection == index
						? classnames('ptr-AppStoryNavPanelIcon-' + theme, {}, 'is-active')
						: 'ptr-AppStoryNavPanelIcon-' + theme
				}
				icon={
					index == 0
						? 'ri-home'
						: index == sidePanelNodes.length - 1
						? 'ri-square'
						: 'ri-dot'
				}
				tooltip={{
					text: node.childNodes[0].innerText,
					position: 'right',
				}}
				onClick={e => scrollToSection(e, 'section')}
			/>
		);
	});

	const scrollToSection = (e, type) => {
		let navPanelCasesNodes = Array.from(navPanelCasesRef.current.childNodes);
		switch (type) {
			case 'section':
				return navPanelCasesNodes.forEach((node, index) => {
					node == e.currentTarget && activeSection !== index
						? (sidePanelRef?.current?.scrollTo({
								top: sidePanelNodes[index].offsetTop,
						  }),
						  jumpSection(index))
						: null;
				});
			case 'up':
				return sidePanelNodes.forEach((node, index) => {
					node == sidePanelNodes[activeSection] && activeSection !== 0
						? sidePanelRef?.current?.scrollTo({
								top: sidePanelNodes[index - 1].offsetTop,
						  })
						: null;
				});
			case 'down':
				return sidePanelNodes.forEach((node, index) => {
					node == sidePanelNodes[activeSection] &&
					activeSection !== sidePanelNodes.length - 1
						? sidePanelRef?.current?.scrollTo({
								top: sidePanelNodes[index + 1].offsetTop,
						  })
						: null;
				});
			default:
				return null;
		}
	};

	return (
		<div className={classes} ref={navPanel}>
			<IconTool
				className={'ptr-AppStoryNavPanelIcon-' + theme}
				icon={'ri-chevron-up'}
				onClick={e => scrollToSection(e, 'up')}
			/>
			<div
				className="ptr-AppStoryNavPanelCases"
				ref={navPanelCasesRef}
				style={
					isOverflown
						? {height: '0rem', overflow: 'hidden'}
						: {height: 'fit-content', overflow: 'visible'}
				}
			>
				{navIconsArray}
			</div>
			<IconTool
				className={'ptr-AppStoryNavPanelIcon-' + theme}
				icon={'ri-chevron-down'}
				onClick={e => scrollToSection(e, 'down')}
			/>
		</div>
	);
};

AppStoryNavPanelContainer.propTypes = {
	className: PropTypes.string,
	activeSection: PropTypes.number,
	jumpSection: PropTypes.func,
	sidePanelRef: PropTypes.object,
	isOverflown: PropTypes.func,
	contentSize: PropTypes.number,
	theme: PropTypes.string,
};

export default AppStoryNavPanelContainer;
