import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StoryMainPanelFooter = ({className, children, panelLayout, theme}) => {
	const classes = classnames(
		'ptr-StoryMainPanelFooter-' + theme,
		{},
		panelLayout,
		className
	);

	return <div className={classes}>{children}</div>;
};

StoryMainPanelFooter.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	panelLayout: PropTypes.string,
	theme: PropTypes.string,
};

export default StoryMainPanelFooter;
