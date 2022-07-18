import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import './style.scss';

const Tag = ({
	active,
	activeIcon,
	disabled,
	children,
	className,
	ghost,
	icon,
	darker,
	onClick,
	placeholder,
	small,
}) => {
	const classes = classnames(
		'ptr-Tag',
		{
			'is-active': active,
			'is-ghost': ghost,
			'is-interactive': !!onClick,
			'is-darker': darker,
			'is-disabled': disabled,
			'is-small': small,
			'is-placeholder': placeholder,
			'is-placeholder-light': placeholder === 'light',
		},
		className
	);

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			onClick();
		}
	};

	return (
		<div
			className={classes}
			tabIndex={!onClick || disabled ? -1 : 0}
			onClick={onClick}
			onKeyDown={handleKeyDown}
		>
			{activeIcon ? <Icon icon="ri-check" /> : null}
			{icon ? <Icon icon={icon} /> : null}
			{children ? <div className="ptr-Tag-caption">{children}</div> : null}
		</div>
	);
};

Tag.propTypes = {
	active: PropTypes.bool,
	activeIcon: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	className: PropTypes.string,
	ghost: PropTypes.bool,
	icon: PropTypes.string,
	darker: PropTypes.bool,
	onClick: PropTypes.func,
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	small: PropTypes.bool,
};

export default Tag;
