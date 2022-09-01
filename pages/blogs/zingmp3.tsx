import { observer } from 'mobx-react-lite';
import { NextPage } from 'next';
import MyWrap from '../_wrap';

const Zingmp3: NextPage = observer(() => {
    return (
        <MyWrap title={'KHAI THÁC API TỪ ZINGMP3'} children={<>
            <h2 className="text-uppercase pt-5 pb-4 text-bold">
                Crawl data from website zingmp3.vn
            </h2>
            <a href="https://github.com/hatienl0i261299/zingmp3" target="_blank">
                <img alt="" width="100%" id="git_img" className="center-image"
                     src="https://github-readme-stats.vercel.app/api/pin/?username=hatienl0i261299&repo=zingmp3"/>
            </a>
            <p className="m-3">Đang ngồi làm bài báo cáo môn an ninh mạng thì mình có lên zingmp3 nghe nhạc, đập vào mắt
                mình là 1
                giao diện
                khá là mới và đẹp của zingmp3 mới cập nhật giao diện</p>
            <p className="m-3">Với thói quen khi thấy 1 cái web mới và có sử dụng công nghệ lạ, thì đường nhiên F12 lên
                xem
                web này có gì mới không, frontend họ dùng gì ?, api ra sao,...</p>
            <img alt="" className="open-img" src="https://i.postimg.cc/jSZVRhPg/1.png" width="100%"/>
            <p className="m-3">Wow khá lá mới với cái param sig của api trong zingmp3. Do 1 vài lần mình thấy api
                của
                tiktok
                thì có sử dụng signature từ javascript tạo ra để mang tính xác thực.</p>
            <p className="m-3">Có lẽ nào zingmp3 cũng dùng như thế.</p>
            <p className="m-3">Và đúng vậy mình copy đoạn sig kia thì mà search cục bộ thì nó ko ra gì. Chắc chắn
                cái
                này đc
                tạo ra từ js rồi. Oke vào việc thôi</p>
            <p className="m-3">Ta tìm bừa 1 api nào đó có sử dụng sig, rồi đặt XHR Breakpoints cho nó</p>
            <img alt="" className="open-img" src="https://i.postimg.cc/VvC45Xvb/1.png" width="100%"/>
            <p className="m-3">Sau 1 hồi mò mẫm các hàm thì có lẽ hàm <strong>m(t,e)</strong> này là hàm tạo ra
                sig. Có
                hướng
                giải rồi, đi tiếp nào.</p>
            <img alt="" className="open-img" src="https://i.postimg.cc/521pNYV6/1.png" width="100%"/>
            <p className="m-3">Hàm <strong>m(t,e)</strong> đây rồi, ta thấy nó sẽ khởi tạo 1 biến <strong>d
                =
                "kI44ARvPwaqL7v0KuDSM0rGORtdY1nnw"</strong> và
                <strong>p = ["ctime", "id", "type", "page", "count", "version"]</strong> kia, nghe có vẽ xíu
                nữa nó
                sẽ dùng
                hàm băm các tham số này, và để nó thay đổi liên tục thì sẽ băm cùng hàm thời gian
                <strong>ctime</strong>.
            </p>
            <p className="m-3">Ta có thể thấy ngay hàm return về hàm <strong>h()</strong>, có lẽ
                hàm <b>h()</b> này sẽ là
                hàm băm để tạo ra sig.
                Đi tìm
                hàm <b>h()</b> nào.</p>
            <img alt="" className="open-img" src="https://i.postimg.cc/KcW82BtD/1.png" width="100%"/>
            <p className="m-3">Hàm <b>h()</b> đây rồi, đúng như mình đoán ở trên thì nó sẽ sử dụng các
                hàm băm, cụ thể băm ở
                đây nó sẽ
                băm các giá trị như ID bài hát, slug của api, api version.</p>
            <p className="m-3">Và để sig đó có thể thay đổi theo thời gian thì băm kèm theo biết ctime
                là được rồi. Giờ
                quan
                trọng hơn mình tìm sẽ nó sử dụng hàm băm gì ?</p>
            <img alt="" className="open-img" src="https://i.postimg.cc/cJVGzMpv/1.png" width="100%"/>
            <p className="m-3">Đi sâu hơn thì mình thấy các hàm như thế này, có số 255, có lẽ
                là <b>sha256</b> rồi.</p>
            <p className="m-3">Oke vào code thử lại thì mình thấy vẫn ko chạy được. Có lẽ là sai gì
                rồi.</p>
            <img alt="" className="open-img" src="https://i.postimg.cc/dVPdJzG6/1.png" width="100%"/>
            <p className="m-3">Mình quên mất, ở hàm <b>h()</b> phía trên có nói thì nó còn
                truyền kèm theo 1 dãy mã <strong>882QcNXV4tUZbvAsjmFOHqNC1LpcBRKW</strong>,
                sau khi <b>sha256</b> thì cần <b>sha512</b>. Khi đó ta mới tạo được mã sig. </p>
            <p className="m-3">Oke xong rồi, giờ code lại thử lần nữa.</p>

            <img alt="" className="open-img" src="https://i.postimg.cc/jjXtDJm2/1.png"
                 width="100%"/>
            <p className="m-3">Và đây là kết quả.</p>

            <img alt="" className="open-img" src="https://i.postimg.cc/HLfRsWsn/1.png"
                 width="100%"/>
            <p className="m-3">Bài viết đến đây thôi. Dài và đau đầu quá rồi.</p>
            <p className="m-3">À quên mất là lưu ý khi requests thì zingmp3 nó yêu cầu
                cả cookies từ trình duyệt nữa đấy
                nhé.
            </p>
        </>}/>
    );
});

export default Zingmp3;
