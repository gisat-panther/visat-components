import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StorySidePanelCase = ({className, children}) => {
	const classes = classnames('ptr-StorySidePanelCase', {}, className);

	return <div className={classes}>{children}</div>;
};

StorySidePanelCase.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default StorySidePanelCase;
