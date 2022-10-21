import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryParagraph = ({className, children}) => {
	const classes = classnames('ptr-AppStoryParagraph', {}, className);

	return <p className={classes}>{children ? children : null}</p>;
};

AppStoryParagraph.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default AppStoryParagraph;
