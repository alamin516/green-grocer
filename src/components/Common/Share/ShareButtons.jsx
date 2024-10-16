import React from 'react';
import { Facebook, MailOutline, Twitter, Pinterest } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const ShareButtons = () => {
  return (
    <ul className="flex space-x-4">
      <li>
        <IconButton
          component="a"
          href="https://www.facebook.com/sharer/sharer.php?u=https://green-grocer-mart.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="!text-blue-600 !bg-[#e5e5e5]"
        >
          <Facebook className="!text-[18px]"/>
        </IconButton>
      </li>
      <li>
        <IconButton
          component="a"
          href="mailto:?subject=Check this out&body=https://green-grocer-mart.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share via Email"
          className="text-gray-600 !bg-[#e5e5e5]"
        >
          <MailOutline className="!text-[18px]"/>
        </IconButton>
      </li>
      <li>
        <IconButton
          component="a"
          href="https://twitter.com/intent/tweet?url=https://green-grocer-mart.web.app/&text=Check this out"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
          className="!text-blue-500 !bg-[#e5e5e5]"
        >
          <Twitter className="!text-[18px]"/>
        </IconButton>
      </li>
      <li>
        <IconButton
          component="a"
          href="https://pinterest.com/pin/create/button/?url=https://green-grocer-mart.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Pinterest"
          className="!text-red-600 !bg-[#e5e5e5]"
        >
          <Pinterest className="!text-[18px]"/>
        </IconButton>
      </li>
    </ul>
  );
};

export default ShareButtons;
