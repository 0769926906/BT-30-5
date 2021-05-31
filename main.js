// Bài tập 1: Tính tiền lương nhân viên
/**
 * b1: Input
 * -luongMotNgayLam,soNgayLam
 * b2: Handle
 * - tạo biến: luongMotNgayLam,soNgayLam,luongDuocNhan
 * - tính lương được nhận: luongDuocNhan = luongMotNgayLam * soNgayLam
 * b3: Output
 * - xuất tiền lương nhân viên
 */

var btnTinhTien = document.getElementById('btnTinhTien');

btnTinhTien.onclick = function(){
    var luongMotNgayLam = document.getElementById('luongMotNgay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luongDuocNhan;

    luongDuocNhan = luongMotNgayLam * soNgayLam;
    alert(luongDuocNhan + 'VND');
}
// Bài 2 : tính trung bình cộng 5 số
/**
 * b1:Input
 * - nhập vào 5 số thực
 * b2: Handle
 * - tạo biến: soMot,soHai,soBa,soBon,soNam
 * tính trung bình 5 số: soTrungBinh = (soMot + soHai + soBa + soBon + soNam) / 5
 * b3: Output
 * - xuất ra số tb
 */
var btnTinh = document.getElementById('btnTinh');
    
btnTinh.onclick = function(){
    var soThuNhat = document.getElementById('soDauTien').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;
    var soThuTu = document.getElementById('soThuTu').value;
    var soThuNam = document.getElementById('soThuNam').value;
    var soTrungBinh;

    soTrungBinh = (soThuNhat*1+ soThuHai*1 + soThuBa*1 + soThuTu*1 + soThuNam*1) / 5;
    alert('số trung bình là '+ soTrungBinh);
}
// Bài 3: đổi tiền
/**
 * b1:input
 * -giá trị tiền USD
 * -số tiền cần quy đổi
 * b2:handle
 * -tạo biến giatriUSD, soTienCanQuyDoi, soTienSauQuyDoi
 * -số tiền cần quy đổi : soTienSauQuyDoi = soTienCanQuyDoi * giatriUSD
 * b3:output
 * số tiền sau quy đổi
 */
 var btnDoiTien = document.getElementById('btnDoiTien');

 btnDoiTien.onclick = function(){
     var giaTriUsd = document.getElementById('giaTriUsd').value;
     var soTienQuyDoi = document.getElementById('soTienQuyDoi').value;
     var soTienDoiDuoc;

     soTienDoiDuoc = giaTriUsd * soTienQuyDoi;

     alert('Số tiền đổi được là : ' + soTienDoiDuoc + 'VND');
 }

//Bài 4 : tính diện tích hình chữ nhật, chu vi hình chữ nhật
/**
 * b1: input
 * - giá trị chiều dài
 * - giá trị chiều rộng
 * b2: handle
 * - tạo biến chieuDai,chieuRong,chuVi,dienTich
 * - dienTich = chieuDai * chieuRong
 * - chuVi = (chieuDai + chieuRong) * 2
 * b3: output
 * - dienTich
 * - chuVi
 */

var btnTinhNao = document.getElementById('btnTinhNao');

btnTinhNao.onclick = function(){
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var dienTich;
    var chuVi;
    chuVi = (chieuDai*1 +chieuRong*1)*2;
    dienTich = chieuDai * chieuRong;
   

    alert('Chu vi là :' + chuVi + 'Diện tích hcn là :'+ dienTich);
}
// Bài 5 : tính tổng 2 ký số

/**
 * b1:input
 * - số có 2 chữ số
 * b2:handle
 * - tạo biến soDonVi,soHangChuc, tongKySo
 * - tongKySo = soDonVi + soHangChuc
 * b3:output
 * - tổng 2 ký số
 */

var btnTinhDi = document.getElementById('btnTinhDi');

btnTinhDi.onclick = function(){
    var soHaiChuSo = document.getElementById('soHaiChuSo').value;
    var soDonVi;
    var soHangChuc;
    var tongKiSo;

    soDonVi = Math. round( soHaiChuSo % 10 );
    soHangChuc = Math. round( soHaiChuSo /10 );
    tongKiSo = soDonVi + soHangChuc;

    alert('Tổng kí số là :' + tongKiSo);

}