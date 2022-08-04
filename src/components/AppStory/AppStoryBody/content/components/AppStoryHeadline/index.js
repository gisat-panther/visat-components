import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryHeadline = ({className, children}) => {
	const classes = classnames('ptr-AppStoryHeadline', {}, className);

	return <h1 className={classes}>{children ? children : null}</h1>;
};

AppStoryHeadline.propTypes = {
	className: PropTypes.string,
	headline: PropTypes.string,
	children: PropTypes.node,
};

export default AppStoryHeadline;
