import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface AvatarComponentProps {
  username: string;
  fallback?: boolean;
  src: string;
}

const AvatarComponent = ({
  username,
  src,
  fallback = true,
}: AvatarComponentProps) => {
  if (fallback) {
    return (
      <Avatar.Root className='bg-white border inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle '>
        <Avatar.Image
          className='h-full w-full rounded object-cover text-black'
          src={src}
          alt={`${username}'s profile picture`}
        />
        <Avatar.Fallback
          className='text-purple-300 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
          delayMs={600}
        >
          {username.charAt(0).toUpperCase() + username.charAt(1).toUpperCase()}
        </Avatar.Fallback>
      </Avatar.Root>
    );
  }
  return (
    <Avatar.Root className='bg-white border inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle '>
      <Avatar.Image
        className='h-full w-full rounded object-contain text-black'
        src={src}
      />
    </Avatar.Root>
  );
};

export default AvatarComponent;
