import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';

import EmptyContent from '../../screen-components/EmptyContent';

import { useTranslation } from '../../translations';
import {
  EMPTY_SCREEN__DESCRIPTION,
  EMPTY_SCREEN__ACTION,
} from '../../translations/resources/constants';

const EmptyScreen = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center h-full">
      <EmptyContent>
        {t(EMPTY_SCREEN__DESCRIPTION)}
      </EmptyContent>

      <div className="w-full flex justify-center">
        <Button onClick={() => navigate('/add')}>
          {t(EMPTY_SCREEN__ACTION)}
        </Button>
      </div>
    </div>
  )
}

export default EmptyScreen;
