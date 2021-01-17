import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <>
    <span className={styles.contactName}>
      {name}: {number}
    </span>
    <button
      className={styles.contactDeleteButton}
      onClick={onDeleteContact}
    >
      Удалить
    </button>
  </>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
