import PropTypes from 'prop-types';
import {IconContext} from 'react-icons';
import {
	MdArrowBack as Back,
	MdArrowForward as Forward,
	MdMoreHoriz as MoreDots,
	MdClose as Close,
	MdCompare as Compare,
	MdExpandLess as ChevronUp,
	MdExpandMore as ChevronDown,
	MdHelpOutline as Help,
	MdOutlineArrowBackIos as ChevronLeft,
	MdOutlineArrowForwardIos as ChevronRight,
	MdOutlineCheck as Check,
	MdOutlineSpaceDashboard as Applications,
	MdOutlineInfo as Info,
	MdFilterNone as Collections,
	MdOutlineAddCircleOutline as Plus,
	MdOutlineFeed as Story,
	MdOutlineFolder as Datasets,
	MdOutlineDarkMode as DarkMode,
	MdOutlineAccountCircle as Account,
	MdOutlineLayersClear as RemoveLayers,
	MdLeaderboard as BarChart,
	MdLocationSearching as LocationSearch,
	MdLocationCity as City,
	MdLogin as Login,
	MdLogout as Logout,
	MdDashboard as Dashboard,
	MdDashboardCustomize as AddMap,
	MdReadMore as ReadMore,
	MdOutlineShare as Share,
	MdStarOutline as Star,
	MdOutlineThumbUpOffAlt as ThumbUp,
	MdTune as Tune,
	MdFilterList as Filter,
	MdImageSearch as ImageSearch,
	MdOutlineMiscellaneousServices as Services,
} from 'react-icons/md';
import {
	SiZenodo as Zenodo,
	SiFacebook as Facebook,
	SiTwitter as Twitter,
	SiLinkedin as Linkedin,
	SiResearchgate as Researchgate,
} from 'react-icons/si';
import {AiFillHome as Home} from 'react-icons/ai';
import {
	GoPrimitiveDot as Dot,
	GoPrimitiveSquare as Square,
	GoTools as Tools,
} from 'react-icons/go';
import {HiCursorClick as Selection} from 'react-icons/hi';
import {ImStatsBars as Statistics} from 'react-icons/im';
import {Icon as PantherIcon} from '@gisatcz/ptr-atoms';
import './style.scss';

const ReactIcon = ({icon}) => {
	let i = null;
	let classes = 'ptr-react-icon';

	switch (icon) {
		case 'ri-add-map':
			i = <AddMap />;
			break;
		case 'ri-applications':
			i = <Applications />;
			break;
		case 'ri-back':
			i = <Back />;
			break;
		case 'ri-bar-chart':
			i = <BarChart />;
			break;
		case 'ri-check':
			i = <Check />;
			break;
		case 'ri-chevron-down':
			i = <ChevronDown />;
			break;
		case 'ri-chevron-up':
			i = <ChevronUp />;
			break;
		case 'ri-chevron-left':
			i = <ChevronLeft />;
			break;
		case 'ri-chevron-right':
			i = <ChevronRight />;
			break;
		case 'ri-city':
			i = <City />;
			break;
		case 'ri-close':
			i = <Close />;
			break;
		case 'ri-collections':
			classes = 'ptr-react-icon clockwise270';
			i = <Collections />;
			break;
		case 'ri-compare':
			i = <Compare />;
			break;
		case 'ri-dashboard':
			i = <Dashboard />;
			break;
		case 'ri-datasets':
			i = <Datasets />;
			break;
		case 'ri-dark-mode':
			i = <DarkMode />;
			break;
		case 'ri-forward':
			i = <Forward />;
			break;
		case 'ri-help':
			i = <Help />;
			break;
		case 'ri-info':
			i = <Info />;
			break;
		case 'ri-location-search':
			i = <LocationSearch />;
			break;
		case 'ri-login':
			i = <Login />;
			break;
		case 'ri-logout':
			i = <Logout />;
			break;
		case 'ri-more-dots':
			i = <MoreDots />;
			break;
		case 'ri-plus':
		case 'ri-add':
			i = <Plus />;
			break;
		case 'ri-read-more':
			i = <ReadMore />;
			break;
		case 'ri-remove-layers':
			i = <RemoveLayers />;
			break;
		case 'ri-selection':
			i = <Selection />;
			break;
		case 'ri-share':
			i = <Share />;
			break;
		case 'ri-star':
			i = <Star />;
			break;
		case 'ri-story':
			i = <Story />;
			break;
		case 'ri-thumb-up':
			i = <ThumbUp />;
			break;
		case 'ri-tune':
		case 'ri-configure':
		case 'ri-settings':
			i = <Tune />;
			break;
		case 'ri-user':
			i = <Account />;
			break;
		case 'ri-facebook':
			i = <Facebook />;
			break;
		case 'ri-twitter':
			i = <Twitter />;
			break;
		case 'ri-linkedin':
			i = <Linkedin />;
			break;
		case 'ri-researchgate':
			i = <Researchgate />;
			break;
		case 'ri-zenodo':
			i = <Zenodo />;
			break;
		case 'ri-home':
			i = <Home />;
			break;
		case 'ri-dot':
			i = <Dot />;
			break;
		case 'ri-square':
			i = <Square />;
			break;
		case 'ri-filter':
			i = <Filter />;
			break;
		case 'ri-services':
			i = <Services />;
			break;
		case 'ri-imgSearch':
			i = <ImageSearch />;
			break;
		case 'ri-tools':
			i = <Tools />;
			break;
		case 'ri-statistics':
			i = <Statistics />;
			break;
	}

	return (
		<IconContext.Provider value={{className: classes}}>
			{i}
		</IconContext.Provider>
	);
};

ReactIcon.propTypes = {
	icon: PropTypes.string,
};

const Icon = ({icon}) => {
	const isReactIcon = icon && icon.startsWith('ri-');

	if (isReactIcon) {
		return <ReactIcon icon={icon} />;
	} else {
		return <PantherIcon icon={icon} />;
	}
};

Icon.propTypes = {
	icon: PropTypes.string,
};

export default Icon;
