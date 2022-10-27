import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const StorySidePanelIntro = ({className, children}) => {
	const classes = classnames('ptr-StorySidePanelIntro', {}, className);

	return <div className={classes}>{children}</div>;
};

StorySidePanelIntro.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default StorySidePanelIntro;
