import {
    faBook,
    faArrowRight,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search';

const ContentControl = () => {
    return (
        <div className="h-100 w-100 px-4 py-4">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                        icon={faBook}
                        className="text-base text-white"
                    />
                    <div className="text-base text-white">Your Library</div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="text-base text-white"
                    />
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-base text-white"
                    />
                </div>
            </div>
            <div className="flex w-full mt-2">
                <Search style={{ width: '100%' }} />
            </div>
            <div className="flex flex-col gap-2"></div>
        </div>
    );
};

export default ContentControl;
