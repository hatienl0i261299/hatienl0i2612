import { NextPage } from 'next';
import MyWrap from './_wrap';

const Certificate_hackerrank: NextPage = () => {
    return (
        <MyWrap children={<>
            <p className="text-uppercase pt-5 pb-4 text-bold">Completed the assessment the skill algorithms problem
                solving (intermediate)</p>
            <img src="https://i.postimg.cc/4NGMQP1q/centificate.png" width="100%" className="open-img center-image"
                 alt=""/>
            <p className="m-3">7711 point of HackerRank Algorithms PRATICE</p>
            <img src="https://i.postimg.cc/RFym0t59/Capture.png" width="100%" className="open-img" alt=""/>
            <p className="m-3">HackerRank profile: <a href="https://www.hackerrank.com/tienl0i261299"
                                                      target="_blank">https://www.hackerrank.com/tienl0i261299</a>
            </p>
        </>} title={'CERTIFICATE HACKERRANK'}/>
    );
};
export default Certificate_hackerrank;
