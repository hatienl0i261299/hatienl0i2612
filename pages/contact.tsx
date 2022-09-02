import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import MyWrap from './_wrap';

const Contact: NextPage = observer(() => {

    const appStore = useAppStore();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((resp) => {
                console.log(resp)
            })

    }, [])

    return (
        <>
            <MyWrap children={<>
                <h2 className="text-uppercase pt-5 pb-4 text-bold">
                    Contact
                </h2>
                <div className="contact-cards-wrapper">
                    <div className="contact-card border rounded shadow">
                        <h6 className="contact-card-title">CALL</h6>
                        <p className="contact-card-content">+84 {appStore.phone}</p>
                    </div>
                    <div className="contact-card border rounded shadow">
                        <h6 className="contact-card-title">Email</h6>
                        <p className="contact-card-content">
                            {appStore.gmail}
                        </p>
                    </div>
                    <div className="contact-card border rounded shadow">
                        <h6 className="contact-card-title">Zalo</h6>
                        <p className="contact-card-content">+84 {appStore.phone}</p>
                    </div>
                    <div className="contact-card border rounded shadow">
                        <h6 className="contact-card-title">Telegram</h6>
                        <p className="contact-card-content">+84 {appStore.phone}</p>
                    </div>
                    <div className="contact-card border rounded shadow">
                        <h6 className="contact-card-title">Outlook</h6>
                        <p className="contact-card-content">
                            {appStore.outlook}
                        </p>
                    </div>
                    <div className="contact-card border rounded shadow">
                        <h6 className="contact-card-title">Skype</h6>
                        <p className="contact-card-content">live:
                            {appStore.facebookName}
                        </p>
                    </div>
                </div>
            </>} title={'Contact'}/>
        </>
    );
});

export default Contact;
