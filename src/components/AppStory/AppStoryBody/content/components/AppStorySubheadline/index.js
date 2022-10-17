import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStorySubheadline = ({className, children, isIntro, isFooterTitle}) => {
	const classes = classnames(
		'ptr-AppStorySubheadline',
		isIntro ? 'is-intro' : '',
		isFooterTitle ? 'is-footerTitle' : '',
		{},
		className
	);
	return <h2 className={classes}>{children ? children : null}</h2>;
};

AppStorySubheadline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	isIntro: PropTypes.bool,
	isFooterTitle: PropTypes.bool,
};

export default AppStorySubheadline;
