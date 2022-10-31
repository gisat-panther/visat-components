import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const StoryMainPanelIntro = ({className, children, backgroundImage, theme}) => {
	const classes = name =>
		classnames(name, {}, 'is-' + theme + '-theme', className);

	return (
		<div
			className={classes('ptr-StoryMainPanelIntro')}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		>
			<div className={classes('ptr-StoryMainPanelIntro-overlay')}>
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
