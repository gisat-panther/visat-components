import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryMainPanelFooter = ({className, children, layout, theme}) => {
	const classes = classnames(
		'ptr-AppStoryMainPanelFooter-' + theme,
		{},
		layout,
		className
	);

	return <div className={classes}>{children}</div>;
};

AppStoryMainPanelFooter.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	layout: PropTypes.string,
	theme: PropTypes.string,
};

export default AppStoryMainPanelFooter;
