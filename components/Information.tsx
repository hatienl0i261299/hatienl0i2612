import { map } from 'lodash';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React from 'react';
import { useAppStore } from '../store/appStore';
import Skill from './Skill';

const Information: React.FC = observer(() => {

    const appStore = useAppStore();

    return (
        <>
            <div className="profile-img-wrapper">
                <Image src="/hatienloi.jpg" alt={''} className={'open-img'} width={'100%'} height={'100%'} />
            </div>

            <h1 className="profile-name">HA TIEN LOI</h1>

            <div className="text-center p-lg-3">
                <span className="badge badge-white rounded-pill profile-designation shadow" id="main_lang">Full-Stack Developer</span>
            </div>

            <nav className="social-links text-center">
                <a href={appStore.facebookLink} className="social-link shadow" target="_blank" id="social1">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href={appStore.githubLink} className="social-link shadow" target="_blank" id="social2">
                    <i className="fab fa-github"></i>
                </a>
                <a href={`mailto:${appStore.gmail}`} className="social-link shadow" target="_blank" id="social3">
                    <i className="fab fa-google"></i>
                </a>
            </nav>

            <div className="text-center">
                <h4 className="widget-title">personal information</h4>
                <div>
                    <p>Age : {appStore.age}</p>
                    <p>Birthday : 26/12/1999</p>
                    <p>Phone : +84 {appStore.phone}</p>
                    <p>Telegram : +84 {appStore.phone}</p>
                    <p>Zalo : +84 {appStore.phone}</p>
                    <p>Gmail : {appStore.gmail}</p>
                    <p>Outlook : {appStore.outlook}</p>
                    <p>Address : 19T5 Kien Hung, Ha Dong, Ha Noi</p>
                </div>
            </div>
            <Skill/>

            <div id="widget2" className="card mt-4">
                <div className="card-body">
                    <div className="widget-content">
                        <h4 className="widget-title card-title">Technologies & Tools</h4>
                        {map(appStore.dataTool, (value, index) => {
                            return <p className="m-2" key={value + index}>
                                <img src={value} className={'center-image'} style={{ cursor: 'auto', height: '1.5rem' }}  alt={''}/>
                            </p>
                        })}
                    </div>
                </div>
            </div>

            <div id="widget3" className="card mt-4">
                <div className="card-body">
                    <div className="widget-content text-center">
                        <h4 className="widget-title card-title">LANGUAGES</h4>
                        <p>Vietnamese: Native</p>
                        <p>English: Intermediate</p>
                    </div>
                </div>
            </div>

            <div id="widget4" className="card mt-4">
                <div className="card-body">
                    <div className="widget-content text-center"><h4 className="widget-title card-title">INTERESTS</h4>
                        <p>Listen to Music</p>
                        <p>Play Games</p>
                        <p>Play Soccer</p>
                        <p>Theatre</p>
                        <p>Reading</p></div>
                </div>
            </div>

            <div id="widget5" className="card mt-4 mb-4">
                <div className="card-body">
                    <div className="widget-content text-center"><h4 className="widget-title card-title">MORE
                        INFORMATION</h4>
                        <p>Having a sense of humor, being happy in harmony with everyone and always learning to develop
                            more in work and life.</p>
                    </div>
                </div>
            </div>
        </>
    )
});

export default Information;
