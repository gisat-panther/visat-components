import ReactSlider from 'react-slider';
import PropTypes from 'prop-types';

import './style.scss';

const OpacitySlider = ({value, onChange}) => {
	return (
		<ReactSlider
			value={value}
			onChange={onChange}
			className="ptr-OpacitySlider"
			thumbClassName="ptr-OpacitySlider-thumb"
			trackClassName="ptr-OpacitySlider-track"
		/>
	);
};

OpacitySlider.propTypes = {
	value: PropTypes.number,
	onChange: PropTypes.func,
};

export default OpacitySlider;
