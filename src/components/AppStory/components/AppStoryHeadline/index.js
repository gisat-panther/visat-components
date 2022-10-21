import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryHeadline = ({className, children, isIntro}) => {
	const classes = classnames(
		'ptr-AppStoryHeadline',
		isIntro ? 'is-intro' : '',
		{},
		className
	);

	return <h1 className={classes}>{children ? children : null}</h1>;
};

AppStoryHeadline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	isIntro: PropTypes.bool,
};

export default AppStoryHeadline;
