import PasswordGenerator from '../src/components/PasswordGenerator';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

  const [phoneticPassword, setPhoneticPassword] = useState('');

  function updatePhoneticPassword(phoneticPasswordUpdated) {
    setPhoneticPassword(phoneticPasswordUpdated);
  }

  return (
    <div className="bg-primary-700 py-4 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-4 md:p-8 bg-white">
          <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center items-center">
            <PasswordGenerator updatePhoneticPassword={updatePhoneticPassword} />
            <div className="hidden md:block">
              <Image src="/images/security.svg" width={368} height={287} />
            </div>
          </div>
          <div className="px-4 py-4 text-center text-gray-400 text-lg bg-gray-100 rounded">{phoneticPassword}</div>
        </div>
      </div>
    </div>
  );
}