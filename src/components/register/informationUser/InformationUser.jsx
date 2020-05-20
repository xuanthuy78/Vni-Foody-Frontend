import React, { Component } from "react";
import "./InformationUser.scss";

export class InformationUser extends Component {
  render() {
    return (
      <div className="information-bottom">
        <div className="information-tilte">
          <h2>
            <span className="title">Thông tin cá nhân</span>
          </h2>
        </div>
        <form className="form-inlineng-pristine">
          <div className="form-group">
            <label className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">
              Họ tên<span className="warning">(*)</span>
            </label>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <input type="text" className="form-control " />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">
              Giới tính
            </label>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <select className="form-control">
                <option value="number:0" label="Nữ">
                  Nữ
                </option>
                <option value="number:1" label="Nam">
                  Nam
                </option>
              </select>
            </div>
          </div>
          <div className="form-group form-inline">
            <label className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">
              Ngày sinh
            </label>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <select className="col-md-4 form-control " placeholder="Ngày">
                <option value="number:1" label="1">
                  1
                </option>
                <option value="number:2" label="2">
                  2
                </option>
                <option value="number:3" label="3">
                  3
                </option>
                <option value="number:4" label="4">
                  4
                </option>
                <option value="number:5" label="5">
                  5
                </option>
                <option value="number:6" label="6">
                  6
                </option>
                <option value="number:7" label="7">
                  7
                </option>
                <option value="number:8" label="8">
                  8
                </option>
                <option value="number:9" label="9">
                  9
                </option>
                <option value="number:10" label="10">
                  10
                </option>
                <option value="number:11" label="11">
                  11
                </option>
                <option value="number:12" label="12">
                  12
                </option>
                <option value="number:13" label="13">
                  13
                </option>
                <option value="number:14" label="14">
                  14
                </option>
                <option value="number:15" label="15">
                  15
                </option>
                <option value="number:16" label="16">
                  16
                </option>
                <option value="number:17" label="17">
                  17
                </option>
                <option value="number:18" label="18">
                  18
                </option>
                <option value="number:19" label="19">
                  19
                </option>
                <option value="number:20" label="20">
                  20
                </option>
                <option value="number:21" label="21">
                  21
                </option>
                <option value="number:22" label="22">
                  22
                </option>
                <option value="number:23" label="23">
                  23
                </option>
                <option value="number:24" label="24">
                  24
                </option>
                <option value="number:25" label="25">
                  25
                </option>
                <option value="number:26" label="26">
                  26
                </option>
                <option value="number:27" label="27">
                  27
                </option>
                <option value="number:28" label="28">
                  28
                </option>
                <option value="number:29" label="29">
                  29
                </option>
                <option value="number:30" label="30">
                  30
                </option>
                <option value="number:31" label="31">
                  31
                </option>
              </select>
              <select className="col-md-4 form-control" placeholder="Tháng">
                <option value="number:1" label="1">
                  1
                </option>
                <option value="number:2" label="2">
                  2
                </option>
                <option value="number:3" label="3">
                  3
                </option>
                <option value="number:4" label="4">
                  4
                </option>
                <option value="number:5" label="5">
                  5
                </option>
                <option value="number:6" label="6">
                  6
                </option>
                <option value="number:7" label="7">
                  7
                </option>
                <option value="number:8" label="8">
                  8
                </option>
                <option value="number:9" label="9">
                  9
                </option>
                <option value="number:10" label="10">
                  10
                </option>
                <option value="number:11" label="11">
                  11
                </option>
                <option value="number:12" label="12">
                  12
                </option>
              </select>
              <select className="col-md-4 form-control" placeholder="Năm">
                <option value="number:1900" label="1900">
                  1900
                </option>
                <option value="number:1901" label="1901">
                  1901
                </option>
                <option value="number:1902" label="1902">
                  1902
                </option>
                <option value="number:1903" label="1903">
                  1903
                </option>
                <option value="number:1904" label="1904">
                  1904
                </option>
                <option value="number:1905" label="1905">
                  1905
                </option>
                <option value="number:1906" label="1906">
                  1906
                </option>
                <option value="number:1907" label="1907">
                  1907
                </option>
                <option value="number:1908" label="1908">
                  1908
                </option>
                <option value="number:1909" label="1909">
                  1909
                </option>
                <option value="number:1910" label="1910">
                  1910
                </option>
                <option value="number:1911" label="1911">
                  1911
                </option>
                <option value="number:1912" label="1912">
                  1912
                </option>
                <option value="number:1913" label="1913">
                  1913
                </option>
                <option value="number:1914" label="1914">
                  1914
                </option>
                <option value="number:1915" label="1915">
                  1915
                </option>
                <option value="number:1916" label="1916">
                  1916
                </option>
                <option value="number:1917" label="1917">
                  1917
                </option>
                <option value="number:1918" label="1918">
                  1918
                </option>
                <option value="number:1919" label="1919">
                  1919
                </option>
                <option value="number:1920" label="1920">
                  1920
                </option>
                <option value="number:1921" label="1921">
                  1921
                </option>
                <option value="number:1922" label="1922">
                  1922
                </option>
                <option value="number:1923" label="1923">
                  1923
                </option>
                <option value="number:1924" label="1924">
                  1924
                </option>
                <option value="number:1925" label="1925">
                  1925
                </option>
                <option value="number:1926" label="1926">
                  1926
                </option>
                <option value="number:1927" label="1927">
                  1927
                </option>{" "}
                <option value="number:1928" label="1928">
                  1928
                </option>{" "}
                <option value="number:1929" label="1929">
                  1929
                </option>
                <option value="number:1930" label="1930">
                  1930
                </option>
                <option value="number:1931" label="1931">
                  1931
                </option>{" "}
                <option value="number:1932" label="1932">
                  1932
                </option>{" "}
                <option value="number:1933" label="1933">
                  1933
                </option>{" "}
                <option value="number:1934" label="1934">
                  1934
                </option>{" "}
                <option value="number:1935" label="1935">
                  1935
                </option>
                <option value="number:1936" label="1936">
                  1936
                </option>
                <option value="number:1937" label="1937">
                  1937
                </option>
                <option value="number:1938" label="1938">
                  1938
                </option>
                <option value="number:1939" label="1939">
                  1939
                </option>
                <option value="number:1940" label="1940">
                  1940
                </option>
                <option value="number:1941" label="1941">
                  1941
                </option>
                <option value="number:1942" label="1942">
                  1942
                </option>
                <option value="number:1943" label="1943">
                  1943
                </option>
                <option value="number:1944" label="1944">
                  1944
                </option>
                <option value="number:1945" label="1945">
                  1945
                </option>
                <option value="number:1946" label="1946">
                  1946
                </option>
                <option value="number:1947" label="1947">
                  1947
                </option>
                <option value="number:1948" label="1948">
                  1948
                </option>
                <option value="number:1949" label="1949">
                  1949
                </option>
                <option value="number:1950" label="1950">
                  1950
                </option>
                <option value="number:1951" label="1951">
                  1951
                </option>
                <option value="number:1952" label="1952">
                  1952
                </option>
                <option value="number:1953" label="1953">
                  1953
                </option>
                <option value="number:1954" label="1954">
                  1954
                </option>{" "}
                <option value="number:1955" label="1955">
                  1955
                </option>
                <option value="number:1956" label="1956">
                  1956
                </option>
                <option value="number:1957" label="1957">
                  1957
                </option>
                <option value="number:1958" label="1958">
                  1958
                </option>
                <option value="number:1959" label="1959">
                  1959
                </option>
                <option value="number:1960" label="1960">
                  1960
                </option>
                <option value="number:1961" label="1961">
                  1961
                </option>
                <option value="number:1962" label="1962">
                  1962
                </option>
                <option value="number:1963" label="1963">
                  1963
                </option>{" "}
                <option value="number:1964" label="1964">
                  1964
                </option>
                <option value="number:1965" label="1965">
                  1965
                </option>
                <option value="number:1966" label="1966">
                  1966
                </option>
                <option value="number:1967" label="1967">
                  1967
                </option>
                <option value="number:1968" label="1968">
                  1968
                </option>
                <option value="number:1969" label="1969">
                  1969
                </option>
                <option value="number:1970" label="1970">
                  1970
                </option>
                <option value="number:1971" label="1971">
                  1971
                </option>
                <option value="number:1972" label="1972">
                  1972
                </option>
                <option value="number:1973" label="1973">
                  1973
                </option>
                <option value="number:1974" label="1974">
                  1974
                </option>{" "}
                <option value="number:1975" label="1975">
                  1975
                </option>
                <option value="number:1976" label="1976">
                  1976
                </option>
                <option value="number:1977" label="1977">
                  1977
                </option>
                <option value="number:1978" label="1978">
                  1978
                </option>
                <option value="number:1979" label="1979">
                  1979
                </option>
                <option value="number:1980" label="1980">
                  1980
                </option>{" "}
                <option value="number:1981" label="1981">
                  1981
                </option>
                <option value="number:1982" label="1982">
                  1982
                </option>
                <option value="number:1983" label="1983">
                  1983
                </option>
                <option value="number:1984" label="1984">
                  1984
                </option>
                <option value="number:1985" label="1985">
                  1985
                </option>
                <option value="number:1986" label="1986">
                  1986
                </option>
                <option value="number:1987" label="1987">
                  1987
                </option>
                <option value="number:1988" label="1988">
                  1988
                </option>
                <option value="number:1989" label="1989">
                  1989
                </option>
                <option value="number:1990" label="1990">
                  1990
                </option>
                <option value="number:1991" label="1991">
                  1991
                </option>
                <option value="number:1993" label="1993">
                  1993
                </option>
                <option value="number:1994" label="1994">
                  1994
                </option>
                <option value="number:1995" label="1995">
                  1995
                </option>
                <option value="number:1996" label="1996">
                  1996
                </option>
                <option value="number:1997" label="1997">
                  1997
                </option>
                <option value="number:1998" label="1998">
                  1998
                </option>
                <option value="number:1999" label="1999">
                  1999
                </option>
                <option value="number:2000" label="2000">
                  2000
                </option>
                <option value="number:2001" label="2001">
                  2001
                </option>
                <option value="number:2002" label="2002">
                  2002
                </option>
                <option value="number:2003" label="2003">
                  2003
                </option>
                <option value="number:2004" label="2004">
                  2004
                </option>
                <option value="number:2005" label="2005">
                  2005
                </option>
                <option value="number:2006" label="2006">
                  2006
                </option>
                <option value="number:2007" label="2007">
                  2007
                </option>
                <option value="number:2008" label="2008">
                  2008
                </option>
                <option value="number:2009" label="2009">
                  2009
                </option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">
              Điện thoại
            </label>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <input type="text" className="form-control " ng-model="Phone" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">
              Địa chỉ
            </label>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <input type="text" className="form-control " ng-model="Address" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">
              Tỉnh/TP
            </label>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <select className="form-control ">
                <option value="number:1" label="Hồ Chí Minh">
                  Hồ Chí Minh
                </option>
                <option value="number:2" label="Hà Nội">
                  Hà Nội
                </option>
                <option value="number:3" label="Đà Nẵng">
                  Đà Nẵng
                </option>
                <option value="number:4" label="Cần Thơ">
                  Cần Thơ
                </option>
                <option value="number:5" label=" Thừa Thiên - Huế">
                  {" "}
                  Thừa Thiên - Huế
                </option>
                <option value="number:6" label="An Giang">
                  An Giang
                </option>
                <option value="number:7" label="Bà Rịa-Vũng Tàu">
                  Bà Rịa-Vũng Tàu
                </option>
                <option value="number:8" label="Bạc Liêu">
                  Bạc Liêu
                </option>
                <option value="number:9" label="Bắc Kạn">
                  Bắc Kạn
                </option>
                <option value="number:10" label="Bắc Giang">
                  Bắc Giang
                </option>
                <option value="number:11" label="Bắc Ninh">
                  Bắc Ninh
                </option>
                <option value="number:12" label="Bến Tre">
                  Bến Tre
                </option>
                <option value="number:13" label="Bình Dương">
                  Bình Dương
                </option>
                <option value="number:14" label="Bình Định">
                  Bình Định
                </option>
                <option value="number:15" label="Bình Phước">
                  Bình Phước
                </option>
                <option value="number:16" label="Bình Thuận">
                  Bình Thuận
                </option>
                <option value="number:17" label="Cà Mau">
                  Cà Mau
                </option>
                <option value="number:18" label="Cao Bằng">
                  Cao Bằng
                </option>
                <option value="number:19" label="Đắk Lắk">
                  Đắk Lắk
                </option>
                <option value="number:20" label="Đắk Nông">
                  Đắk Nông
                </option>
                <option value="number:21" label="Điện Biên">
                  Điện Biên
                </option>
                <option value="number:22" label="Đồng Nai">
                  Đồng Nai
                </option>
                <option value="number:23" label="Đồng Tháp">
                  Đồng Tháp
                </option>
                <option value="number:24" label="Gia Lai">
                  Gia Lai
                </option>
                <option value="number:25" label="Hà Giang">
                  Hà Giang
                </option>
                <option value="number:26" label="Hà Nam">
                  Hà Nam
                </option>
                <option value="number:27" label="Hà Tây">
                  Hà Tây
                </option>
                <option value="number:28" label="Hà Tĩnh">
                  Hà Tĩnh
                </option>
                <option value="number:29" label="Hải Dương">
                  Hải Dương
                </option>
                <option value="number:30" label="Hải Phòng">
                  Hải Phòng
                </option>
                <option value="number:31" label="Hòa Bình">
                  Hòa Bình
                </option>
                <option value="number:32" label="Hậu Giang">
                  Hậu Giang
                </option>
                <option value="number:33" label="Hưng Yên">
                  Hưng Yên
                </option>
                <option value="number:34" label="Khánh Hòa">
                  Khánh Hòa
                </option>
                <option value="number:35" label="Kiên Giang">
                  Kiên Giang
                </option>
                <option value="number:36" label="Kon Tum">
                  Kon Tum
                </option>
                <option value="number:37" label="Lai Châu">
                  Lai Châu
                </option>
                <option value="number:38" label="Lào Cai">
                  Lào Cai
                </option>
                <option value="number:39" label="Lạng Sơn">
                  Lạng Sơn
                </option>
                <option value="number:40" label="Lâm Đồng">
                  Lâm Đồng
                </option>
                <option value="number:41" label="Long An">
                  Long An
                </option>
                <option value="number:42" label="Nam Định">
                  Nam Định
                </option>
                <option value="number:43" label="Nghệ An">
                  Nghệ An
                </option>
                <option value="number:44" label="Ninh Bình">
                  Ninh Bình
                </option>
                <option value="number:45" label="Ninh Thuận">
                  Ninh Thuận
                </option>
                <option value="number:46" label="Phú Thọ">
                  Phú Thọ
                </option>
                <option value="number:47" label="Phú Yên">
                  Phú Yên
                </option>
                <option value="number:48" label="Quảng Bình">
                  Quảng Bình
                </option>
                <option value="number:49" label="Quảng Nam">
                  Quảng Nam
                </option>
                <option value="number:50" label="Quảng Ngãi">
                  Quảng Ngãi
                </option>
                <option value="number:51" label="Quảng Ninh">
                  Quảng Ninh
                </option>
                <option value="number:52" label="Quảng Trị">
                  Quảng Trị
                </option>
                <option value="number:53" label="Sóc Trăng">
                  Sóc Trăng
                </option>
                <option value="number:54" label="Sơn La">
                  Sơn La
                </option>
                <option value="number:55" label="Tây Ninh">
                  Tây Ninh
                </option>
                <option value="number:56" label="Thái Bình">
                  Thái Bình
                </option>
                <option value="number:57" label="Thái Nguyên">
                  Thái Nguyên
                </option>
                <option value="number:58" label="Thanh Hóa">
                  Thanh Hóa
                </option>
                <option value="number:59" label="Thừa Thiên - Huế">
                  Thừa Thiên - Huế
                </option>
                <option value="number:60" label="Tiền Giang">
                  Tiền Giang
                </option>
                <option value="number:61" label="Trà Vinh">
                  Trà Vinh
                </option>
                <option value="number:62" label="Tuyên Quang">
                  Tuyên Quang
                </option>
                <option value="number:63" label="Vĩnh Long">
                  Vĩnh Long
                </option>
                <option value="number:64" label="Vĩnh Phúc">
                  Vĩnh Phúc
                </option>
                <option value="number:65" label="Yên Bái">
                  Yên Bái
                </option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">
              Quận/Huyện
            </label>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <select
                className="form-control "
                ng-model="DistrictId"
                ng-options="item.Id as item.Name for item in Districts"
              >
                <option value="number:1" label="Quận 1">
                  Quận 1
                </option>
                <option value="number:5" label="Quận 2">
                  Quận 2
                </option>
                <option value="number:6" label="Quận 3">
                  Quận 3
                </option>
                <option value="number:7" label="Quận 4">
                  Quận 4
                </option>
                <option value="number:8" label="Quận 5">
                  Quận 5
                </option>
                <option value="number:9" label="Quận 6">
                  Quận 6
                </option>
                <option value="number:10" label="Quận 7">
                  Quận 7
                </option>
                <option value="number:11" label="Quận 8">
                  Quận 8
                </option>
                <option value="number:12" label="Quận 9">
                  Quận 9
                </option>
                <option value="number:13" label="Quận 10">
                  Quận 10
                </option>
                <option value="number:14" label="Quận 11">
                  Quận 11
                </option>
                <option value="number:15" label="Quận 12">
                  Quận 12
                </option>
                <option value="number:16" label="Quận Gò Vấp">
                  Quận Gò Vấp
                </option>
                <option value="number:17" label="Quận Tân Bình">
                  Quận Tân Bình
                </option>
                <option value="number:18" label="Quận Tân Phú">
                  Quận Tân Phú
                </option>
                <option value="number:19" label="Quận Bình Thạnh">
                  Quận Bình Thạnh
                </option>
                <option value="number:20" label="Quận Phú Nhuận">
                  Quận Phú Nhuận
                </option>
                <option value="number:21" label="Quận Thủ Đức">
                  Quận Thủ Đức
                </option>
                <option value="number:22" label="Quận Bình Tân">
                  Quận Bình Tân
                </option>
                <option value="number:51" label="Huyện Củ Chi">
                  Huyện Củ Chi
                </option>
                <option value="number:52" label="Huyện Hóc Môn">
                  Huyện Hóc Môn
                </option>
                <option value="number:53" label="Huyện Bình Chánh">
                  Huyện Bình Chánh
                </option>
                <option value="number:54" label="Huyện Nhà Bè">
                  Huyện Nhà Bè
                </option>
                <option value="number:55" label="Huyện Cần Giờ">
                  Huyện Cần Giờ
                </option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="offset-4 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
              <button type="submit" className="btn btn-primary">
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InformationUser;
