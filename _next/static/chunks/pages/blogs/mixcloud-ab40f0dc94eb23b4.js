(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{4416:function(e,x,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/mixcloud",function(){return s(6201)}])},6201:function(e,x,s){"use strict";s.r(x);var c=s(5893),a=s(1217),$=s(5132),l=(0,a.Pi)(function(){return(0,c.jsx)($.default,{title:"KHAI TH\xc1C API TỪ MIXCLOUD",children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:"text-uppercase pt-5 pb-4 text-bold",children:"Tool crawl data from website Mixcloud"}),(0,c.jsxs)("div",{className:"text-justify",children:[(0,c.jsx)("a",{href:"https://github.com/hatienl0i261299/mixcloud",target:"_blank",children:(0,c.jsx)("img",{width:"100%",className:"center-image",src:"",id:"git_img",alt:""})}),(0,c.jsx)("p",{className:"m-3",children:"Trước ti\xean l\xe0m g\xec th\xec l\xe0m, m\xecnh cần phải xem trang web đ\xf3 hoạt đ\xf4ng như thế n\xe0o đ\xe3 ?. Cơ chế GET, POST của n\xf3 hoạt động như thế n\xe0o để đưa ra hướng giải quyết hợp l\xfd."}),(0,c.jsx)("img",{alt:"",className:"open-img",src:"https://i.postimg.cc/h4L1Pb2B/1.png",width:"100%"}),(0,c.jsx)("img",{alt:"",className:"open-img",src:"https://i.postimg.cc/W3XpXy2V/1.png",width:"100%"}),(0,c.jsx)("p",{className:"m-3",children:"M\xecnh nhận thấy trang web n\xe0y sử dụng 1 api để gửi cũng như nhận dữ liệu từ client, chỉ kh\xe1c ở phần gi\xe1 query variables."}),(0,c.jsx)("img",{alt:"",className:"open-img",src:"https://i.postimg.cc/KcVz3d4S/1.png",width:"100%"}),(0,c.jsx)("p",{className:"m-3",children:'Đặt XHR breakpoint tại "/graphql" th\xec ta nhận thấy c\xe1c query m\xe0 mixcloud POST ở dạng như tr\xean.'}),(0,c.jsx)("p",{className:"m-3",children:"Oke thế thử POST query lấy dữ liệu cửa 1 track về xem sao."}),(0,c.jsx)("img",{alt:"",className:"open-img",src:"https://i.postimg.cc/G2XRRsTn/1.png",width:"100%"}),(0,c.jsx)("img",{alt:"",className:"open-img",src:"https://i.postimg.cc/MKFGRgTJ/1.png",width:"100%"}),(0,c.jsx)("p",{className:"m-3",children:"Với v\xe0i d\xf2ng code giả lập lại requests th\xec ta c\xf3 thể lấy được th\xf4ng tin streaminfo của trang web."}),(0,c.jsx)("p",{className:"m-3",children:"Nhưng đ\xe2u dễ thế, nếu m\xe0 dễ th\xec c\xe1 Tra n\xf3 t\xe1p hết rồi đ\xe2u đến lượt m\xecnh."}),(0,c.jsxs)("p",{className:"m-3",children:["Đường dẫn của n\xf3 đ\xe3 bị m\xe3 ho\xe1 như trong h\xecnh ",(0,c.jsx)("strong",{children:"dashUrl"})," l\xe0",(0,c.jsx)("strong",{children:"ITItPyZtbmE...."})]}),(0,c.jsx)("p",{className:"m-3",children:"Oke giờ phải đi t\xecm c\xe1ch giải m\xe3 c\xe1i tr\xean th\xec coi như xong việc."}),(0,c.jsx)("img",{alt:"",className:"open-img",src:"https://i.postimg.cc/25XCPKq7/1.png",width:"100%"}),(0,c.jsxs)("p",{className:"m-3",children:["Sau 1 hồi đặt breakpoint tứ lung tung, m\xecnh t\xecm ra được 1 h\xe0m ",(0,c.jsx)("strong",{children:"function(e, t, n)"}),"v\xe0 h\xe0m con của n\xf3 ",(0,c.jsx)("strong",{children:"o(e)"})," h\xe0m n\xe0y c\xf3 đầu v\xe0o o ch\xednh l\xe0 m\xe3 ph\xeda tr\xean ch\xfang ta đ\xe3 t\xecm thấy."]}),(0,c.jsxs)("p",{className:"m-3",children:["Ở đ\xe2y c\xf3 biến ",(0,c.jsx)("strong",{children:"r = IFYOUWANTTHEARTISTSTOGETPAIDDONOTDOWNLOADFROMMIXCLOUD"})," c\xf3 lẽ l\xe0 key để giải m\xe3."]}),(0,c.jsx)("p",{className:"m-3",children:'Key ở tr\xean l\xe0 "If you want the artists to get paid do not download from mixcloud"'}),(0,c.jsx)("p",{className:"m-3",children:"V\xe0 k\xe8m theo đ\xf3 c\xf3 atob, c\xe1i n\xe0y ch\xednh l\xe0 base64 decode."}),(0,c.jsx)("p",{className:"m-3",children:"Vậy r\xfat ra kết luận, h\xe0m n\xe0y đầu ti\xean n\xf3 sẽ d\xf9ng base64 decode rồi lấy từ m\xe3 đ\xf3 giải m\xe3 k\xe8m theo c\xe1i key ở ph\xeda tr\xean."}),(0,c.jsx)("img",{alt:"",className:"open-img",src:"https://i.postimg.cc/1RdNpvJ6/1.png",width:"100%"}),(0,c.jsx)("p",{className:"m-3",children:"Oke v\xe0 đ\xe2y l\xe0 th\xe0nh quả."}),(0,c.jsxs)("p",{className:"m-3",children:["V\xe0 qua t\xecm hiểu th\xec m\xecnh biết được đ\xe2y ch\xednh l\xe0 thuật to\xe1n m\xe3 ho\xe1 v\xe0 giải m\xe3 XOR Cipher. C\xe1c bạn c\xf3 thể xem th\xeam ở đ\xe2y ",(0,c.jsx)("a",{href:"https://www.geeksforgeeks.org/xor-cipher/",target:"_blank",children:"https://www.geeksforgeeks.org/xor-cipher/"})]})]})]})})});x.default=l}},function(e){e.O(0,[662,461,563,132,774,888,179],function(){return e(e.s=4416)}),_N_E=e.O()}])