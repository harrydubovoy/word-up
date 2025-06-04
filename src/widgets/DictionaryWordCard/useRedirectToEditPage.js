import { useNavigate } from 'react-router-dom';

export const useRedirectToEditPage = (id) => {
  const navigate = useNavigate();

  const handleNavigateToEditPage = () => navigate(`/edit/${id}`);

  return { handleNavigateToEditPage };
};
