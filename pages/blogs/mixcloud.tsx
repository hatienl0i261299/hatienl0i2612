import { observer } from 'mobx-react-lite';
import { NextPage } from 'next';
import MyWrap from '../_wrap';

const Mixcloud: NextPage = observer(() => {
    return (
        <MyWrap title={'KHAI THÁC API TỪ MIXCLOUD'} children={<>
            <h2 className="text-uppercase pt-5 pb-4 text-bold">
                Tool crawl data from website Mixcloud
            </h2>
            <div className="text-justify">
                <a href="https://github.com/hatienl0i261299/mixcloud" target="_blank">
                    <img width="100%" className="center-image" src="" id="git_img" alt=""/>
                </a>
                <p className="m-3">Trước tiên làm gì thì làm, mình cần phải xem trang web đó hoạt đông như thế nào đã ?.
                    Cơ chế
                    GET, POST của nó hoạt động như thế nào để đưa ra hướng giải quyết hợp lý.</p>
                <img alt="" className="open-img" src="https://i.postimg.cc/h4L1Pb2B/1.png" width="100%"/>
                <img alt="" className="open-img" src="https://i.postimg.cc/W3XpXy2V/1.png" width="100%"/>
                <p className="m-3">Mình nhận thấy trang web này sử dụng 1 api để gửi cũng như nhận dữ liệu từ
                    client, chỉ khác ở
                    phần giá query variables.</p>
                <img alt="" className="open-img" src="https://i.postimg.cc/KcVz3d4S/1.png" width="100%"/>
                <p className="m-3">Đặt XHR breakpoint tại "/graphql" thì ta nhận thấy các query mà mixcloud
                    POST ở dạng như
                    trên.</p>
                <p className="m-3">Oke thế thử POST query lấy dữ liệu cửa 1 track về xem sao.</p>
                <img alt="" className="open-img" src="https://i.postimg.cc/G2XRRsTn/1.png" width="100%"/>
                <img alt="" className="open-img" src="https://i.postimg.cc/MKFGRgTJ/1.png" width="100%"/>
                <p className="m-3">Với vài dòng code giả lập lại requests thì ta có thể lấy được
                    thông tin streaminfo của trang
                    web.</p>
                <p className="m-3">Nhưng đâu dễ thế, nếu mà dễ thì cá Tra nó táp hết rồi đâu đến
                    lượt mình.</p>
                <p className="m-3">Đường dẫn của nó đã bị mã hoá như trong
                    hình <strong>dashUrl</strong> là
                    <strong>ITItPyZtbmE....</strong>
                </p>
                <p className="m-3">Oke giờ phải đi tìm cách giải mã cái trên thì coi như xong
                    việc.</p>
                <img alt="" className="open-img" src="https://i.postimg.cc/25XCPKq7/1.png"
                     width="100%"/>
                <p className="m-3">Sau 1 hồi đặt breakpoint tứ lung tung, mình tìm ra được 1
                    hàm <strong>function(e, t,
                        n)</strong>và hàm con của nó <strong>o(e)</strong> hàm này có đầu vào o
                    chính là mã phía trên chúng ta
                    đã tìm thấy.</p>
                <p className="m-3">Ở đây có biến <strong>r =
                    IFYOUWANTTHEARTISTSTOGETPAIDDONOTDOWNLOADFROMMIXCLOUD</strong> có
                    lẽ là key để giải mã.</p>
                <p className="m-3">Key ở trên là "If you want the artists to get paid do not
                    download from mixcloud"</p>
                <p className="m-3">Và kèm theo đó có atob, cái này chính là base64 decode.</p>
                <p className="m-3">Vậy rút ra kết luận, hàm này đầu tiên nó sẽ dùng base64
                    decode rồi lấy từ mã đó giải mã kèm
                    theo cái key ở phía trên.</p>
                <img alt="" className="open-img" src="https://i.postimg.cc/1RdNpvJ6/1.png"
                     width="100%"/>
                <p className="m-3">Oke và đây là thành quả.</p>
                <p className="m-3">Và qua tìm hiểu thì mình biết được đây chính là thuật
                    toán mã hoá và giải mã XOR Cipher. Các
                    bạn có thể xem thêm ở đây <a
                        href="https://www.geeksforgeeks.org/xor-cipher/"
                        target="_blank">https://www.geeksforgeeks.org/xor-cipher/</a>
                </p>
            </div>
        </>}/>
    );
});

export default Mixcloud;
