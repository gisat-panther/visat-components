import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const AppStoryMainPanelIntro = ({
	className,
	children,
	backgroundImage,
	theme,
}) => {
	const classes = classnames('ptr-AppStoryMainPanelIntro', {}, className);

	return (
		<div
			className={classes}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		>
			<div className={'ptr-AppStoryMainPanelIntro-overlay-' + theme}>
				{children}
			</div>
		</div>
	);
};

AppStoryMainPanelIntro.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	backgroundImage: PropTypes.string, //path to background image
	theme: PropTypes.string,
};

export default AppStoryMainPanelIntro;
