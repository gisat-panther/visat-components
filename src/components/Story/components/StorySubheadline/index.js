import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StorySubheadline = ({className, children, isIntro, isFooterTitle}) => {
	const classes = classnames(
		'ptr-StorySubheadline',
		isIntro ? 'is-intro' : '',
		isFooterTitle ? 'is-footerTitle' : '',
		{},
		className
	);
	return <h2 className={classes}>{children ? children : null}</h2>;
};

StorySubheadline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	isIntro: PropTypes.bool,
	isFooterTitle: PropTypes.bool,
};

export default StorySubheadline;
