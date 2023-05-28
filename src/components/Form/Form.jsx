import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useContacts } from 'utilites/hooks/useContacts';
import { addContact, patchContact } from '../../redux/contacts/operations';
import {
  toggleModal,
  setIsContactEdited,
  addEditedContactData,
} from '../../redux/contacts/slice';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

const initialValues = { name: '', number: '' };
const schema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required(),
});

const FormComponent = ({ dataToEdit = null, closeModal }) => {
  const {
    contacts,
    isContactEdited,
    editedContactData: { name, number, id },
    isLoading,
  } = useContacts();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isNameTaken = contacts.find(contact => contact.name === values.name);

    if (isNameTaken && !isContactEdited) {
      return alert(`${isNameTaken.name} is already in contacts`);
    }
    if (isContactEdited) {
      if (values.name === name && values.number === number) {
        dispatch(toggleModal());
        dispatch(addEditedContactData({ name: '', number: '', id: '' }));
        dispatch(setIsContactEdited(false));
        return;
      } else {
        dispatch(
          patchContact({ name: values.name, number: values.number, id })
        );
        resetForm();
        return;
      }
    }
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={dataToEdit || initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ errors, touched, isValidating }) => {
        return (
          <Form>
            <Field type="text" name="name" required>
              {({ field, form }) => {
                return (
                  <FormControl>
                    <FormLabel>Full name</FormLabel>
                    <Input
                      focusBorderColor="#DD6B20"
                      {...field}
                      placeholder="Name"
                    />
                    {form.errors.name &&
                    form.errors.name === 'name is a required field' ? (
                      <FormHelperText>Name is required.</FormHelperText>
                    ) : (
                      form.errors.name && (
                        <FormHelperText>
                          Invalid name. Name may contain only letters,
                          apostrophe, dash and spaces. For example Adrian, Jacob
                          Mercer, Charles de Batz de Castelmore d'Artagnan
                        </FormHelperText>
                      )
                    )}
                  </FormControl>
                );
              }}
            </Field>
            <Field type="tel" name="number" required>
              {({ field, form }) => (
                <FormControl mt={4}>
                  <FormLabel>Phone number</FormLabel>
                  <Input
                    focusBorderColor="#DD6B20"
                    {...field}
                    placeholder="Number"
                  />
                  {form.errors.number &&
                  form.errors.number === 'number is a required field' ? (
                    <FormHelperText>Number is required.</FormHelperText>
                  ) : (
                    form.errors.number && (
                      <FormHelperText>
                        Invalid number. Phone number must be digits and can
                        contain spaces, dashes, parentheses and can start with +
                      </FormHelperText>
                    )
                  )}
                </FormControl>
              )}
            </Field>
            <ButtonGroup spacing="4">
              <Button
                mt={4}
                colorScheme="orange"
                isLoading={isLoading}
                type="submit"
              >
                Save
              </Button>

              <Button
                mt={4}
                colorScheme="gray"
                type="button"
                onClick={() => {
                  closeModal();
                }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;

//name patterns
// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"

//number patterns
// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"

// const validateName = value => {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (
//     !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
//   ) {
//     error = 'Invalid name';
//   }
//   return error;
// };

// const validateNumber = value => {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (
//     !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
//       value
//     )
//   ) {
//     error = 'Invalid number';
//   }
//   return error;
// };
