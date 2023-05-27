import { useSelector } from 'react-redux';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
  getIsModalOpen,
  getIsContactEdited,
  getEditedContact,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const isModalOpen = useSelector(getIsModalOpen);
  const isContactEdited = useSelector(getIsContactEdited);
  const editedContactData = useSelector(getEditedContact);

  return {
    contacts,
    isLoading,
    error,
    filter,
    isModalOpen,
    isContactEdited,
    editedContactData,
  };
};
