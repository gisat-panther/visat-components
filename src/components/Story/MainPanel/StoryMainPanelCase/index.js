import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StoryMainPanelCase = ({className, children}) => {
	const classes = classnames('ptr-StoryMainPanelCase', {}, className);

	return <div className={classes}>{children}</div>;
};

StoryMainPanelCase.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default StoryMainPanelCase;
