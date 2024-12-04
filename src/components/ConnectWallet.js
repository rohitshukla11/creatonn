import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const ConnectWallet = () => {

    return (
        <div className="flex justify-between items-center p-4 bg-transparent">
            <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
            <TonConnectButton className='mb-8' />
        </div>
    );
};

export default ConnectWallet;
