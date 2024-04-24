import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="mailto:cluhasaar@gmail.com">
        <MdEmail />
      </a>
    </div>
    <div>
      <a href="tel:+37256923697">
        <AiFillPhone />
      </a>
    </div>
  </div>
);

export default SocialMedia;
