import { useState } from 'react';
import useAuthor from './useAuthor';
import styles from './AuthorForm.module.css';
import TextInput from '../TextInput';
import Button from '../Button';
import classNames from 'classnames';

const AuthorForm = ({ className }) => {
  const { setAuthor } = useAuthor();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [url, setUrl] = useState();
  return (
    <div className={classNames(className, styles.form)}>
      <label className={styles.label}>
        <span>Name</span>
        <TextInput type='text' onChange={(evt) => setName(evt.target.value)} />
      </label>
      <label className={styles.label}>
        <span>Email (not public)</span>
        <TextInput
          type='email'
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </label>
      <label className={styles.label}>
        <span>URL</span>
        <TextInput type='url' onChange={(evt) => setUrl(evt.target.value)} />
      </label>
      <Button
        className={styles.submit}
        onClick={() => setAuthor({ name, email, url })}
      >
        Submit
      </Button>
    </div>
  );
};

export default AuthorForm;
