import classnames from 'classnames';
import PropTypes from 'prop-types';
import IconTool from '../IconTool';

import './style.scss';

export const ExpandableLabelHeader = ({
	className,
	expanded,
	onExpand,
	roundedCorners,
	children,
	wholeInteractive,
}) => {
	const classes = classnames(`ptr-ExpandableLabelHeader ${className || ''}`, {
		'is-expanded': expanded,
		'is-rounded': roundedCorners,
		'is-interactive': wholeInteractive,
	});

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			onExpand(!expanded);
		}
	};

	return (
		<div
			className={classes}
			onClick={wholeInteractive ? () => onExpand(!expanded) : () => {}}
			onKeyDown={wholeInteractive ? handleKeyDown : () => {}}
			tabIndex={wholeInteractive ? 0 : -1}
		>
			<div className="ptr-ExpandableLabelHeader-content">{children}</div>
			<IconTool
				tooltip={{
					text: 'Layer tools',
					position: 'right',
					id: 'ExpendableLayerLabel',
				}}
				active={expanded}
				onClick={() => onExpand(!expanded)}
				icon="ri-chevron-down"
				rectangular={!roundedCorners}
				small
				className="ptr-ExpandableLabelHeader-controlButton"
			/>
		</div>
	);
};

ExpandableLabelHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	expanded: PropTypes.bool,
	roundedCorners: PropTypes.bool,
	onExpand: PropTypes.func,
	wholeInteractive: PropTypes.bool,
};

export default ExpandableLabelHeader;
