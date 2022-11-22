import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import Button from '../Components/Form/Button';
import Input from '../Components/Form/Input';
import TextArea from '../Components/Form/TextArea';
import Nav from '../Components/Nav/Nav';
import { storage } from '../lib/Firebase';
import { getBackgroundImage } from '../lib/Storage';

function Contact() {
  //states
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const reference = ref(storage, '/Backgrounds/contact.JPG');
    getBackgroundImage(reference, setBackgroundUrl);

    setIsLoaded(true);
  }, []);

  //form states

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    //
    e.preventDefault();
    console.log('submit');
  };

  return (
    <>
      {isLoaded && (
        <>
          <Nav />
          <div className="contact">
            <img className="contact__image" src={backgroundUrl} />

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form__inputs">
                <div className="contact__form__inputs__side">
                  <Input placeholder={'Full name'} />
                  <Input placeholder={'Email'} />
                </div>
                <Input placeholder={'Subject'} />
                <TextArea placeholder={'Type message here ...'} />
                <Button />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
