import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryLink = ({children, className}) => {
	const classes = classnames('ptr-AppStoryLink', {}, className);

	return <div className={classes}>{children}</div>;
};

AppStoryLink.propTypes = {
	className: PropTypes.string,
	children: PropTypes.PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default AppStoryLink;
