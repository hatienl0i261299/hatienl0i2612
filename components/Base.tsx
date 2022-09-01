import React from 'react';
import Footer from './Footer';
import Information from './Information';

interface IBase {
    children: JSX.Element;
}

const Base: React.FC<IBase> = ({ children }: IBase) => {
    return (
        <div className={'row mb-4'}>
            <div className="col-lg-3 col-md-5">
                <Information/>
            </div>

            <div id="main" className="col-lg-9 col-md-7 card">
                <div className="p-4">
                    {children}
                    <h5 className="text-center text-uppercase mt-5 mb-5">-------END-------</h5>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Base;
