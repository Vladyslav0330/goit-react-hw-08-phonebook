import React from 'react';
import { useContacts } from 'utilites/hooks/useContacts';
import Contact from '../Contact';
import Loader from 'components/Loader/Loader';
import { List } from '@chakra-ui/react';

const ContactList = () => {
  const { contacts, filter, isLoading } = useContacts();

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = showFilteredContacts();

  return isLoading ? (
    <Loader />
  ) : (
    <List mt={4}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};

export default ContactList;
