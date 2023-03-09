import classnames from 'classnames';
import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from 'react';

import IconTool from '../../../../IconTool';

import './style.scss';

const StoryNavPanelContainer = ({
	className,
	activeSection,
	setJumpSection,
	sidePanelRef,
	contentSize,
	theme,
	navigationIcons,
}) => {
	const [isOverflown, setIsOverflown] = useState();
	const [lastSidePanelHeight, setLastSidePanelHeight] = useState();
	const navPanelCasesRef = useRef();
	const navPanel = useRef();

	const classes = name =>
		classnames(name, {}, 'is-' + theme + '-theme', className);

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
					activeSection === index
						? classnames(classes('ptr-StoryNavPanelIcon'), {}, 'is-active')
						: classes('ptr-StoryNavPanelIcon')
				}
				icon={
					index === 0
						? navigationIcons?.home
							? navigationIcons.home
							: 'ri-home'
						: index === sidePanelNodes.length - 1
						? navigationIcons?.footer
							? navigationIcons.footer
							: 'ri-square'
						: navigationIcons?.case
						? navigationIcons.case
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
					node === e.currentTarget && activeSection !== index
						? (sidePanelRef?.current?.scrollTo({
								top: sidePanelNodes[index].offsetTop,
						  }),
						  setJumpSection(index))
						: null;
				});
			case 'up':
				return sidePanelNodes.forEach((node, index) => {
					node === sidePanelNodes[activeSection] && activeSection !== 0
						? sidePanelRef?.current?.scrollTo({
								top: sidePanelNodes[index - 1].offsetTop,
						  })
						: null;
				});
			case 'down':
				return sidePanelNodes.forEach((node, index) => {
					node === sidePanelNodes[activeSection] &&
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
		<div className={classes('ptr-StoryNavPanelContainer')} ref={navPanel}>
			<IconTool
				className={classes('ptr-StoryNavPanelIcon')}
				icon={'ri-chevron-up'}
				onClick={e => scrollToSection(e, 'up')}
			/>
			<div
				className="ptr-StoryNavPanelCases"
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
				className={classes('ptr-StoryNavPanelIcon')}
				icon={'ri-chevron-down'}
				onClick={e => scrollToSection(e, 'down')}
			/>
		</div>
	);
};
StoryNavPanelContainer.propTypes = {
	className: PropTypes.string,
	activeSection: PropTypes.number,
	setJumpSection: PropTypes.func,
	sidePanelRef: PropTypes.object,
	isOverflown: PropTypes.func,
	contentSize: PropTypes.number,
	theme: PropTypes.string,
	navigationIcons: PropTypes.object,
};

export default StoryNavPanelContainer;
