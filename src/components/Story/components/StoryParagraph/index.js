import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StoryParagraph = ({className, children}) => {
	const classes = classnames('ptr-StoryParagraph', {}, className);

	return <p className={classes}>{children ? children : null}</p>;
};

StoryParagraph.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default StoryParagraph;
