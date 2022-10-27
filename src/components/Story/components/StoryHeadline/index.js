import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StoryHeadline = ({className, children, isIntro}) => {
	const classes = classnames(
		'ptr-StoryHeadline',
		isIntro ? 'is-intro' : '',
		{},
		className
	);

	return <h1 className={classes}>{children ? children : null}</h1>;
};

StoryHeadline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	isIntro: PropTypes.bool,
};

export default StoryHeadline;
