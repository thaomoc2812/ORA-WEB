class ttsv  {

  constructor(hoTen, namVaoTruong,bacDaoTao,chuongTrinh,khoaQuanLy,tinhTrangHocTap,gioiTinh,lop,khoaHoc,email,avatar){
    this.hoTen = hoTen;
    this.namVaoTruong = namVaoTruong;
    this.bacDaoTao = bacDaoTao;
    this.chuongTrinh =chuongTrinh;
    this.khoaQuanLy = khoaQuanLy;
    this.tinhTrangHocTap = tinhTrangHocTap;
    this.gioiTinh = gioiTinh;
    this.lop = lop;
    this.khoaHoc = khoaHoc;
    this.email = email;
    this.avatar =avatar;

  }


  log(){
    console.log("\nHọ và tên: " + this.hoTen + 
    "\nNăm vào trường: " + this.namVaoTruong +
    "\nBậc đào tạo: " + this.bacDaoTao + 
    "\nChương trình: " + this.chuongTrinh +
    "\nKhoa/Viện quản lý : " + this.khoaQuanLy + 
    "\nGiới tính: " + this.gioiTinh + 
    "\nLớp: " + this.lop + 
    "\nKhóa học: " + this.khoaHoc + 
    "\nEmail: " +this.email + 
    "\nTình trạng học tập: "+ this.tinhTrangHocTap);

  }






  getHoTen(){
    return this.hoTen;
  }
  getNamVaoTruong(){
    return this.namVaoTruong;
  }
  getBacDaoTao(){
    return this.bacDaoTao;
  }
  getChuongTrinh(){
    return this.chuongTrinh;
  }
  getKhoaQuanLy(){
    return this.khoaQuanLy;
  }
  getTinhTrangHocTap(){
    return this.tinhTrangHocTap;
  }
  getGioiTinh(){
    return this.gioiTinh;
  }
  getLop(){
    return this.lop;
  }
  getKhoaHoc(){
    return this.khoaHoc;
  }
  getEmail(){
    return this.email;
  }
  getAvatar(){
    return this.avatar;
  }
  setHoTen(hoTen){
    this.hoTen = hoTen;
  }
  setNamVaoTruong(namVaoTruong){
    this.namVaoTruong = namVaoTruong;
  }
  setBacDaoTao(bacDaoTao){
    this.bacDaoTao = bacDaoTao;
  }
  setChuongTrinh(chuongTrinh){
    this.chuongTrinh = chuongTrinh;
  }
  setKhoaQuanLy(khoaQuanLy){
    this.khoaQuanLy = khoaQuanLy;
  }
  setTinhTrangHocTap(tinhTrangHocTap){
    this.tinhTrangHocTap = tinhTrangHocTap;
  }
  setGioiTinh(gioiTinh){
    this.gioiTinh = gioiTinh;
  }
  setLop(lop){
    this.lop = lop;
  }
  setKhoaHoc(khoaHoc){
   this.khoaHoc = khoaHoc;
  }
  setEmail(email){
  this.email = email;
  }
  setAvatar(avatar){
    this.avatar = avatar;
    }
  
  
   
};


let me = new ttsv(
"Kiều Phương Thảo",
"2020",
"KSCLC-TN-TT-VN-ICT",
"Công nghệ thông tin Việt Nhật 2020",
"Trường Công nghệ thông tin và Truyền thông",
"Học",
"Nữ",
"Việt Nhật 02",
"65",
"thao.kp205128@gmail.com",
"/Content/Images/avatar.JPG");

// // Hàm để lưu trữ đối tượng vào Local Storage
// function saveObjectToLocalStorage(objectKey, object) {
//   localStorage.setItem(objectKey, JSON.stringify(object));
// }

// // Hàm để lấy đối tượng từ Local Storage
// function getObjectFromLocalStorage(objectKey) {
//   const storedObject = localStorage.getItem(objectKey);
//   return storedObject ? JSON.parse(storedObject) : null;
// }


function edit(event,old) {
  event.preventDefault();
  document.getElementById("okButton").removeAttribute("hidden");
  document.getElementById("cancelButton").removeAttribute("hidden");
  document.getElementById("resetButton").removeAttribute("hidden");

  var editHoTen = document.getElementById("hoTen");
  var editNamVaoTruong = document.getElementById("namVaoTruong");
  var editBacDaoTao = document.getElementById("bacDaoTao");
  var editChuongTrinh = document.getElementById("chuongTrinh");
  var editKhoaQuanLy = document.getElementById("khoaQuanLy");
  var editTinhTrangHocTap = document.getElementById("tinhTrangHocTap");
  var editGioiTinh = document.getElementById("gioiTinh");
  var editLop = document.getElementById("lop");
  var editKhoaHoc = document.getElementById("khoaHoc");
  var editEmail = document.getElementById("email");
  var editAvatar = document.getElementById("avatarImg");

  editHoTen.disabled = false;
  editNamVaoTruong.disabled = false;
  editBacDaoTao.disabled = false;
  editChuongTrinh.disabled = false;
  editKhoaQuanLy.disabled = false;
  editTinhTrangHocTap.disabled = false;
  editGioiTinh.disabled = false;
  editLop.disabled = false;
  editKhoaHoc.disabled = false;
  editEmail.disabled = false;
  editAvatar.hidden = false;


  


  editHoTen.style.border = "1px solid black";

  editNamVaoTruong.style.border = "1px solid black";
  editNamVaoTruong.style.webkitAppearance = "menulist-button";
  editNamVaoTruong.style.mozAppearance = "menulist-button";
  editNamVaoTruong.style.appearance = "menulist-button";
  
  editBacDaoTao.style.border = "1px solid black";
  editChuongTrinh.style.border = "1px solid black";
  editKhoaQuanLy.style.border = "1px solid black";
  editTinhTrangHocTap.style.border = "1px solid black";
  
  editGioiTinh.style.border = "1px solid black";
  editGioiTinh.style.webkitAppearance = "menulist-button";
  editGioiTinh.style.mozAppearance = "menulist-button";
  editGioiTinh.style.appearance = "menulist-button";

  editLop.style.border = "1px solid black";
  editKhoaHoc.style.border = "1px solid black";
  editKhoaHoc.style.webkitAppearance = "menulist-button";
  editKhoaHoc.style.mozAppearance = "menulist-button";
  editKhoaHoc.style.appearance = "menulist-button";
  editEmail.style.border = "1px solid black";



}
function oke(event) {
  event.preventDefault();
  
  var editHoTen = document.getElementById("hoTen");
  var editNamVaoTruong = document.getElementById("namVaoTruong");
  var editBacDaoTao = document.getElementById("bacDaoTao");
  var editChuongTrinh = document.getElementById("chuongTrinh");
  var editKhoaQuanLy = document.getElementById("khoaQuanLy");
  var editTinhTrangHocTap = document.getElementById("tinhTrangHocTap");
  var editGioiTinh = document.getElementById("gioiTinh");
  var editLop = document.getElementById("lop");
  var editKhoaHoc = document.getElementById("khoaHoc");
  var editEmail = document.getElementById("email");
  var editAvatar = document.getElementById("avatarImg");


  if(editHoTen.value.trim() === "" || editNamVaoTruong.value.trim() === ""|| editBacDaoTao.value.trim() === ""|| editChuongTrinh.value.trim() === ""
      || editKhoaQuanLy.value.trim() === ""|| editTinhTrangHocTap.value.trim() === ""|| editGioiTinh.value.trim() === ""|| editLop.value.trim() === ""|| editKhoaHoc.value.trim() === ""|| editEmail.value.trim() === "") noti();
  else
  {
    editAvatar.hidden = true;
    document.getElementById("okButton").hidden = true;
    document.getElementById("cancelButton").hidden = true;
    document.getElementById("resetButton").hidden = true;

    old.setHoTen(editHoTen.value);
    old.setNamVaoTruong(editNamVaoTruong.value);
    old.setBacDaoTao(editBacDaoTao.value);
    old.setChuongTrinh(editChuongTrinh.value);
    old.setKhoaQuanLy(editKhoaQuanLy.value);
    old.setTinhTrangHocTap(editTinhTrangHocTap.value);
    old.setGioiTinh(editGioiTinh.value);
    old.setLop(editLop.value);
    old.setKhoaHoc(editKhoaHoc.value);
    old.setEmail(editEmail.value);
    old.setAvatar(editAvatar.value);


    editHoTen.disabled = true;
    editNamVaoTruong.disabled = true;
    editBacDaoTao.disabled = true;
    editChuongTrinh.disabled = true;
    editKhoaQuanLy.disabled = true;
    editTinhTrangHocTap.disabled = true;
    editGioiTinh.disabled = true;
    editLop.disabled = true;
    editKhoaHoc.disabled = true;
    editEmail.disabled = true;

    editHoTen.style.border = "none";

    editNamVaoTruong.style.border = "none";
    editNamVaoTruong.style.webkitAppearance = "none";
    editNamVaoTruong.style.mozAppearance = "none";
    editNamVaoTruong.style.appearance = "none";

    editBacDaoTao.style.border = "none";
    editChuongTrinh.style.border = "none";
    editKhoaQuanLy.style.border = "none";
    editTinhTrangHocTap.style.border = "none";

    editGioiTinh.style.border = "none";
    editGioiTinh.style.webkitAppearance = "none";
    editGioiTinh.style.mozAppearance = "none";
    editGioiTinh.style.appearance = "none";

    editLop.style.border = "none";
    editKhoaHoc.style.border = "none";
    editKhoaHoc.style.webkitAppearance = "none";
    editKhoaHoc.style.mozAppearance = "none";
    editKhoaHoc.style.appearance = "none";
    editEmail.style.border = "none";
    displayImage();

    console.log("OK: ");
    old.log();
  }
  
}

function cancel(event) {
  event.preventDefault();

  document.getElementById("okButton").hidden = true;
  document.getElementById("cancelButton").hidden = true;
  document.getElementById("resetButton").hidden = true;

  var editHoTen = document.getElementById("hoTen");
  var editNamVaoTruong = document.getElementById("namVaoTruong");
  var editBacDaoTao = document.getElementById("bacDaoTao");
  var editChuongTrinh = document.getElementById("chuongTrinh");
  var editKhoaQuanLy = document.getElementById("khoaQuanLy");
  var editTinhTrangHocTap = document.getElementById("tinhTrangHocTap");
  var editGioiTinh = document.getElementById("gioiTinh");
  var editLop = document.getElementById("lop");
  var editKhoaHoc = document.getElementById("khoaHoc");
  var editEmail = document.getElementById("email");
  var editAvatar = document.getElementById("avatarImg");


  editHoTen.disabled = true;
  editNamVaoTruong.disabled = true;
  editBacDaoTao.disabled = true;
  editChuongTrinh.disabled = true;
  editKhoaQuanLy.disabled = true;
  editTinhTrangHocTap.disabled = true;
  editGioiTinh.disabled = true;
  editLop.disabled = true;
  editKhoaHoc.disabled = true;
  editEmail.disabled = true;
  editAvatar.hidden = true;


  editHoTen.style.border = "none";
  editNamVaoTruong.style.border = "none";
  editNamVaoTruong.style.border = "none";
  editNamVaoTruong.style.webkitAppearance = "none";
  editNamVaoTruong.style.mozAppearance = "none";
  editNamVaoTruong.style.appearance = "none";


  editBacDaoTao.style.border = "none";
  editChuongTrinh.style.border = "none";
  editKhoaQuanLy.style.border = "none";
  editTinhTrangHocTap.style.border = "none";
  editGioiTinh.style.border = "none";
  editGioiTinh.style.border = "none";
  editGioiTinh.style.webkitAppearance = "none";
  editGioiTinh.style.mozAppearance = "none";
  editGioiTinh.style.appearance = "none";

  editLop.style.border = "none";
  editKhoaHoc.style.border = "none";
  editKhoaHoc.style.webkitAppearance = "none";
  editKhoaHoc.style.mozAppearance = "none";
  editKhoaHoc.style.appearance = "none";
  editEmail.style.border = "none";


  editHoTen.value = old.getHoTen();
  editNamVaoTruong.value = old.getNamVaoTruong();
  editBacDaoTao.value = old.getBacDaoTao();
  editChuongTrinh.value = old.getChuongTrinh();
  editKhoaQuanLy.value = old.getKhoaQuanLy();
  editTinhTrangHocTap.value = old.getTinhTrangHocTap();
  editGioiTinh.value = old.getGioiTinh();
  editLop.value = old.getLop();
  editKhoaHoc.value = old.getKhoaHoc();
  editEmail.value = old.getEmail();
  console.log("Cancel: ");
  old.log();
  
}



function resett(event) {
  event.preventDefault();

  document.getElementById("okButton").hidden = true;
  document.getElementById("cancelButton").hidden = true;
  document.getElementById("resetButton").hidden = true;

  var editHoTen = document.getElementById("hoTen");
  var editNamVaoTruong = document.getElementById("namVaoTruong");
  var editBacDaoTao = document.getElementById("bacDaoTao");
  var editChuongTrinh = document.getElementById("chuongTrinh");
  var editKhoaQuanLy = document.getElementById("khoaQuanLy");
  var editTinhTrangHocTap = document.getElementById("tinhTrangHocTap");
  var editGioiTinh = document.getElementById("gioiTinh");
  var editLop = document.getElementById("lop");
  var editKhoaHoc = document.getElementById("khoaHoc");
  var editEmail = document.getElementById("email");
  var editAvatar = document.getElementById("avatarImg");


  editHoTen.disabled = true;
  editNamVaoTruong.disabled = true;
  editBacDaoTao.disabled = true;
  editChuongTrinh.disabled = true;
  editKhoaQuanLy.disabled = true;
  editTinhTrangHocTap.disabled = true;
  editGioiTinh.disabled = true;
  editLop.disabled = true;
  editKhoaHoc.disabled = true;
  editEmail.disabled = true;
  editAvatar.hidden = true;


  editHoTen.style.border = "none";
  editNamVaoTruong.style.border = "none";
  editNamVaoTruong.style.border = "none";
  editNamVaoTruong.style.webkitAppearance = "none";
  editNamVaoTruong.style.mozAppearance = "none";
  editNamVaoTruong.style.appearance = "none";

  editBacDaoTao.style.border = "none";
  editChuongTrinh.style.border = "none";
  editKhoaQuanLy.style.border = "none";
  editTinhTrangHocTap.style.border = "none";
  editGioiTinh.style.border = "none";
  editGioiTinh.style.border = "none";
  editGioiTinh.style.webkitAppearance = "none";
  editGioiTinh.style.mozAppearance = "none";
  editGioiTinh.style.appearance = "none";
  editLop.style.border = "none";
  editKhoaHoc.style.border = "none";
  editKhoaHoc.style.webkitAppearance = "none";
  editKhoaHoc.style.mozAppearance = "none";
  editKhoaHoc.style.appearance = "none";
  editEmail.style.border = "none";


  editHoTen.value = me.getHoTen();
	editNamVaoTruong.value = me.getNamVaoTruong();
	editBacDaoTao.value = me.getBacDaoTao();
	editChuongTrinh.value = me.getChuongTrinh();
	editKhoaQuanLy.value = me.getKhoaQuanLy();
	editTinhTrangHocTap.value = me.getTinhTrangHocTap();
	editGioiTinh.value = me.getGioiTinh();
	editLop.value = me.getLop();
	editKhoaHoc.value = me.getKhoaHoc();
	editEmail.value = me.getEmail();
  document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = "Content/Images/avatar.JPG";
  console.log("Reset: ");
  me.log();
  
}



function noti()
{
  var thongBao = "Không được bỏ trống thông tin!";
  alert(thongBao);
  edit(event, old);
}
function reloadPage() {
  location.reload();
  }

function displayImage() {
    const fileInput = document.getElementById("avatarImg");
    const uploadedImage = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage");

    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        uploadedImage.src = e.target.result;
      };

      // Đọc dữ liệu từ tệp tin hình ảnh
      reader.readAsDataURL(file);
    } 
  }
