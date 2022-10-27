import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const StoryMainPanelIntro = ({className, children, backgroundImage, theme}) => {
	const classes = classnames('ptr-StoryMainPanelIntro', {}, className);

	return (
		<div
			className={classes}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		>
			<div className={'ptr-StoryMainPanelIntro-overlay-' + theme}>
				{children}
			</div>
		</div>
	);
};

StoryMainPanelIntro.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	backgroundImage: PropTypes.string, //path to background image
	theme: PropTypes.string,
};

export default StoryMainPanelIntro;
