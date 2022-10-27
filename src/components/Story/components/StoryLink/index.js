import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StoryLink = ({children, className}) => {
	const classes = classnames('ptr-StoryLink', {}, className);

	return <div className={classes}>{children}</div>;
};

StoryLink.propTypes = {
	className: PropTypes.string,
	children: PropTypes.PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default StoryLink;
