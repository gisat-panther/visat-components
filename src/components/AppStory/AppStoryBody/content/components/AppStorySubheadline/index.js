import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStorySubheadline = ({className, children}) => {
	const classes = classnames('ptr-AppStorySubheadline', {}, className);
	return <h2 className={classes}>{children ? children : null}</h2>;
};

AppStorySubheadline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default AppStorySubheadline;
