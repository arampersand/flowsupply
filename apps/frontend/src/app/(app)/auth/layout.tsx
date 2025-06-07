import { getT } from '@gitroom/react/translation/get.translation.service.backend';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flow Supply - Login',
  description: 'Access your Flow Supply account',
};

export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import loadDynamic from 'next/dynamic';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));
export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getT();

  return (
    <div className="min-h-screen bg-[#0a1219] relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(25,38,48,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(25,38,48,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <ReturnUrlComponent />
      <div className="relative z-[1] px-3 lg:pr-[100px] xs:mt-[70px] flex justify-center lg:justify-end items-center h-[100vh] w-[100vw]">
        <div className="w-full max-w-lg h-[614px] flex flex-col bg-[#0d1620]/80 backdrop-blur-sm rounded-xl border border-[#1a2836] shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <div className="w-full relative">
            <div className="custom:fixed custom:text-start custom:left-[20px] custom:justify-start custom:top-[20px] absolute -top-[100px] text-textColor justify-center items-center w-full flex">
              <Image
                src="/postiz-text.svg"
                width={280}
                height={55}
                alt="Flow Supply"
                className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                priority
              />
            </div>
          </div>
          <div className="p-[32px] w-full h-[660px] text-textColor">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
