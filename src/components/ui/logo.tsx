'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Routes } from '@/config/routes';
import { LogoIcon } from '@/components/icons/logo';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={Routes.public.home}
      className={clsx(
        'brand-logo inline-flex w-full max-w-[150px] text-black focus:outline-none sm:text-white xl:max-w-[125px] 2xl:max-w-[135px] 3xl:max-w-[150px]',
        className,
      )}
      {...props}
    >
      <Image
        src="/images/logo-light.png"
        alt="Wetripn"
        width="150"
        height="46"
      />
    </Link>
  );
};

export default Logo;
