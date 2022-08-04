import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AppStoryParagraph = ({className, text, children}) => {
	const classes = classnames('ptr-AppStoryParagraph', {}, className);

	return (
		<p className={classes}>
			{text}
			{children}
		</p>
	);
};

AppStoryParagraph.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.any,
};

export default AppStoryParagraph;
