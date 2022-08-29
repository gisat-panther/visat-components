import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryFooterLinksList = ({className, children}) => {
	const classes = classnames(
		'ptr-AppStorySidePanelFooterLinksList',
		{},
		className
	);

	return <div className={classes}>{children}</div>;
};

AppStoryFooterLinksList.propTypes = {
	className: PropTypes.string,
	children: PropTypes.PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default AppStoryFooterLinksList;
