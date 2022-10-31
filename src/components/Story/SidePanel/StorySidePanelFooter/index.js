import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StorySidePanelFooter = ({className, children}) => {
	const classes = classnames('ptr-StorySidePanelFooter', {}, className);

	return <div className={classes}>{children}</div>;
};

StorySidePanelFooter.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default StorySidePanelFooter;
