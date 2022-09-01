import { observer } from 'mobx-react-lite';
import { NextPage } from 'next';
import MyWrap from '../_wrap';

const Fptplay: NextPage = observer(() => {
    return (
        <MyWrap title={'KHAI THÁC API TỪ FPTPLAY'} children={<>
            <h2 className="text-uppercase pt-5 pb-4 text-bold">
                Crawl data from website fptplay.vn
            </h2>
            <div className="text-justify">
                <a href="https://github.com/hatienl0i261299/fptplay" target="_blank">
                    <img width="100%" id="git_img" className="center-image"
                         src="https://github-readme-stats.vercel.app/api/pin/?username=hatienl0i261299&repo=fptplay"
                         alt=""/>
                </a>
                <p className="m-3">Lời mở đầu chả biết nói gì, thôi thì bật DEV MODE lên và vào việc luôn cho nhanh
                    nào.</p>
                <p className="m-3">Tìm xem api nó requests lên server để lấy đường dẫn video là gì đã.</p>
                <img alt="" src="https://i.postimg.cc/WtLtJxhR/Capture.png" width="100%" className="open-img"/>
                <p className="m-3">Mình có tìm thấy api này: <b>
                    https://api.fptplay.net/api/v6.2_w/stream/vod/5e4565ff2089bd011c334948/0/auto_vip?st=17X_PuG4sQ3u-gYS8HRdGQ&e=1620010196419&device=Chrome(version:90)</b>
                </p>
                <p className="m-3">Ở đây chúng ta có thể thấy các param nó truyền kèm theo url là: </p>
                <ul className="m-3">
                    <li><b>st</b>: Một giá trị nào đó mình hiện tại mình chưa tìm được, search global cũng ko thấy, có
                        lẽ nó lại
                        phải render ra từ js rồi.
                    </li>
                    <li><b>e</b>: Giá trị này chắc là timestamp rồi.</li>
                    <li><b>device</b>: phiên bản của trình duyệt.</li>
                </ul>
                <p className="m-3">Xem sơ qua thì có vẻ chỉ có cái <b>st</b> kia là phải đau đầu xíu.</p>
                <img alt="" src="https://i.postimg.cc/66YKS8Kk/Capture.png" width="100%" className="open-img"/>
                <p className="m-3">Oke giờ dặt <b>XHR/fetch breakpoint</b> là 1 slug của url api trên, VD ở đây mình
                    để là
                    <b>"/auto_vip"</b></p>
                <p className="m-3">Refresh lại trang web đó để nó chạy nào.</p>
                <img alt="" src="https://i.postimg.cc/3JVs5pcc/Capture.png" width="100%" className="open-img"/>
                <p className="m-3">Vậy là khi trình duyệt nó load đến slug <b>"/auto_vip"</b> như ta đã đặt phía
                    trên thì nó dừng
                    lại.</p>
                <p className="m-3">Nhưng khi này thì lúc đó trình duyệt nó đã render xong đc mã <b>st</b> kia
                    rồi. Và nó đang chuẩn
                    bị requests đến các API khác.</p>
                <p className="m-3">Vậy nên chúng ta lại đi lại các function trước đó mà nó đã chạy qua xem có gì
                    không.</p>
                <img alt="" src="https://i.postimg.cc/L6tb77jn/Capture.png" width="100%" className="open-img"/>
                <p className="m-3">Ta có thể thấy đoạn này nó có gọi apiCaller với method GET.</p>
                <p className="m-3">Chúng ta thử đặt breakpoint vào dòng này, và refresh lại trang xem thế
                    nào.</p>
                <img alt="" src="https://i.postimg.cc/V6ysfvkY/Capture.png" width="100%"
                     className="open-img"/>
                <p className="m-3">Sau khi next đến các function tiếp theo, thì mình thấy 1 function với
                    các param đầu vào là <b>(t,
                        e, n, r)</b>. Trong đó có biến <b>n</b> là 1 slug của API.</p>
                <img alt="" src="https://i.postimg.cc/xCPww1kp/Capture.png" width="100%"
                     className="open-img"/>
                <p className="m-3">Tiếp theo thì nó gọi đến function này với các param là <b>slug
                    của api</b> và <b>user agent</b>.
                </p>
                <p className="m-3">Và ta thử đặt 1 breakpoint vào chỗ nó return ra, rồi refresh lại
                    trang web. Đồng thời xoá các
                    breakpoint cũ đi để nó đỡ phải chạy lại.</p>
                <p className="m-3">Ta có thể thấy dòng return này <b>return e.st =
                    Object(c.a)(Object(l.a)(u)).replace(/\+/g,
                    "-").replace(/\//g, "_").replace(/=/g, ""),</b> với cái mục tiên đang tìm
                    cái <b>st</b> kia thì mình khá là
                    chắc chắn thì dòng này là dòng sẽ trả về đồng thời gán param st kia vào e.</p>
                <p className="m-3">Phân tích qua dòng này thì nó sẽ được xử lý qua 3 func là:</p>
                <ul className="m-3">
                    <li>Object(l.a)(u): cái này có lẽ nó sẽ gọi đến function <b>l.a</b> và biến
                        truyền vào là biến <b>u</b>. Còn
                        <b>u</b> là cái gì thì mình nói sau biên dưới nhé.
                    </li>
                    <li>Object(c.a): hàm này thì nó sẽ gọi đến hàm <b>c.a</b> và param đẩu vào thì
                        chính là đầu ra của hàm
                        <b>l.a</b>
                        nói ở trên.
                    </li>
                    <li>Còn các hàm replace sau đó thì chỉ là thay đổi các ký tự đi, nên mình quan
                        tâm nó sau cũng đc.
                    </li>
                </ul>
                <p className="m-3">Nhìn vào phần ở trên ta có thể thấy ngay cái <b>u</b> kia được
                    tạo ra bằng cách <b>u =
                        this.api_token + o + this.suffix + a;</b></p>
                <ul className="m-3">
                    <li className="text-bold">this.api_token = WEBv6Dkdsad90dasdjlALDDDS (Nó đã được
                        khởi tạo ở dòng trên nhé)
                    </li>
                    <li className="text-bold">o = Math.floor((new Date).getTime()) + 10800 (là thời
                        gian cộng với 10800 thôi)
                    </li>
                    <li className="text-bold">this.suffix = /api/v6.2_w/ (cái này là 1 slug của
                        api)
                    </li>
                    <li className="text-bold">a cũng là 1 slug của api, VD ở trên có thể là
                        auto_vip.
                    </li>
                </ul>
                <p className="m-3">Oke vậy là tìm được cái <b>u</b>, giờ ta tìm hàm đầu tiên xem nó
                    là gì, hàm <b>l.a</b></p>
                <img alt="" src="https://i.postimg.cc/PJpBPz39/Capture.png" width="100%"
                     className="open-img"/>
                <p className="m-3">Tìm đến hàm <b>l.a</b> với biến đầu vào là <b>u</b> thì nó ra
                    hàm này. Nhìn qua có lẽ là 1 hàm
                    băm nào đó. Mà những hàm băm thông dụng nhất hiện này là <b>MD5, SHA256,
                        SHA512</b></p>
                <p className="m-3">Vì mình có biết 1 chút về mật mã học nên có biết cái này là
                    sử dụng <b>MD5</b>.</p>
                <p className="m-3">Nếu các bạn ko biết thì có thể thử từng loại hàm băm, và so
                    sánh với kết quả trả về của trang web,
                    nên kết quả trả về giống nhau thì có thể biết nó dùng hàm băm gì rồi.</p>
                <p className="m-3">Vậy chốt lại là ta tìm được hàm <b>l.a</b> kia chính là băm
                    cái <b>u</b> kia với thuật toán là
                    <b>MD5</b>.</p>
                <p className="m-3">Giờ công việc tiếp theo là tìm đến hàm <b>c.a</b> và biết đầu
                    vào cho hàm <b>c.a</b> này thì
                    chính là giá trị sau khi băm <b>MD5</b> từ hàm <b>l.a</b></p>
                <img alt="" src="https://i.postimg.cc/NFZSv94t/Capture.png" width="100%"
                     className="open-img"/>
                <p className="m-3">Vào hàm <b>c.a</b> thì nó ra thế này.</p>
                <p className="m-3">Phân tích qua thì mình cũng ko biết nó xài thuật toán gì
                    cả. Chắc mình vẫn còn gà mờ. Vậy thì
                    nghiên cứu và phân tích hàm này vậy.</p>
            </div>
            <pre>
                {`
    var e = function(t, e) {
        t = t.toUpperCase(),
        e && (t = t.replace(/0x/gi, ""));
        var n = t;
        t = t.replace(/[^A-Fa-f0-9]/g, ""),
        n != t && console.log("Warning! Non-hex characters in input string ignored.");
        return t
                `}
            </pre>
            <p className="m-3">Đầu tiên là cái <b>function e</b> này. Cái này nó sẽ nhận biến đầu vào là giá trị
                băm <b>MD5</b>
                ở phía trên.</p>
            <p className="m-3">Sau đó toUpperCase (chuyển đổi viết hoa các ký tự đó). Và replace các ký tự.</p>
            <pre>
                {`
    for (var n = new Array, a = 0; a < e.length / 2; a++) {
        var i = e.substr(2 * a, 2);
        n[a] = parseInt(i, 16)
    }
                `}
            </pre>
            <p className="m-3">Sau khi được chuỗi ký tự đã uppercase thì vòng for này sẽ lấy 2 ký tự liên tiép nhau
                trong chuỗi
                đó, <b>parseInt(i, 16)</b> chuyển đổi <b>Hexadecimal to Decimal</b> và các giá trị sau khi chuyển đổi sẽ
                được đưa vào <b>Array
                    n</b>.</p>
            <p className="m-3">Ở dưới là các dòng lệnh để xử lý <b>Array n</b> đã được tạo ra ở trên. Và có 1 số lệnh
                như: </p>
            <ul>
                <li><b>charAt</b>: ký tự tại 1 vị trí nào đó trong 1 mảng.</li>
                <li><b>{` >> và << `}</b>{`: Dịch bit sang trái hoặc sang phải. VD: 2 << 5 - Dịch sang trái 5 bit, 2 >> 5 - Dịch sang phải 5 bit`}
                </li>
            </ul>
            <p className="m-3">Oke vậy là giải quyết được hết các vấn đề rồi, giờ code lại xem như thế nào.</p>
            <p className="m-3">Dưới đây là hàm <b>c.a</b> mình có viết lại bằng <b>python</b></p>
            <pre>
                {`
    def encrypt(e):
        n = []
        t = e.upper()
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        for o in range(int(len(t) / 2)):
            i = t[2 * o:2 * o + 2]
            num = '0x%s' % i
            n.append(int(num, 16))

        def convert(e):
            t = ""
            n = 0
            o = 0
            i = [0, 0, 0]
            a = [0, 0, 0, 0]
            s = len(e)
            c = 0
            for z in range(s, 0, -1):
                if n <= 3:
                    i[n] = e[c]
                n += 1
                c += 1
                if 3 == n:
                    a[0] = (252 & i[0]) >> 2
                    a[1] = ((3 & i[0]) << 4) + ((240 & i[1]) >> 4)
                    a[2] = ((15 & i[1]) << 2) + ((192 & i[2]) >> 6)
                    a[3] = (63 & i[2])
                    for v in range(4):
                        t += r[a[v]]
                    n = 0
            if n:
                for o in range(n, 3, 1):
                    i[o] = 0

                for o in range(n + 1):
                    a[0] = (252 & i[0]) >> 2
                    a[1] = ((3 & i[0]) << 4) + ((240 & i[1]) >> 4)
                    a[2] = ((15 & i[1]) << 2) + ((192 & i[2]) >> 6)
                    a[3] = (63 & i[2])
                    t += r[a[o]]
                n += 1
                while n < 3:
                    t += "="
                    n += 1
            return t
        return convert(n).replace('+', '-').replace('/', '_').replace('=', '')
                `}
            </pre>
            <img alt="" src="https://i.postimg.cc/nrYkLXKB/Capture.png" width="100%" className="open-img" />
            <p className="m-3">Và đây là thành quả.</p>
            <p className="m-3">Cụ thể code tại: <a href="https://github.com/hatienl0i261299/fptplay"
                                                   target="_blank">Đây</a></p>
        </>}/>
    );
});

export default Fptplay;
