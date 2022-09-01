import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

const Footer: React.FC = observer(() => {

    const appStore = useAppStore();

    return (
        <footer> @
            {new Date().getFullYear()}
            ‧ <a href={appStore.facebookLink} target="_blank">{appStore.facebookName}</a> ‧ All Rights Reserved
        </footer>
    );
});

export default Footer;
