import bookmark1 from '../../../images/bookmark1.png';
import bookmark2 from '../../../images/bookmark2.png';
import { usePostBookmark } from '../../../hooks/usePostBookmark';
import { useTranslation } from 'react-i18next';

const BookmarkingButton = ({ post, globalPostsArrayName }) => {

  const { t } = useTranslation();
  const { isBookmarked, handleBookmark } = usePostBookmark(globalPostsArrayName, post);

  return (
    <button title={isBookmarked ? t('BookmarkingButton.RemoveBookmark') : t('BookmarkingButton.AddBookmark') } onClick={handleBookmark} className='bookmark'>
      <div className='img_contain'>
        <img src={isBookmarked ? bookmark2 : bookmark1} alt="" />
      </div>
    </button>
  );
};

export default BookmarkingButton;
