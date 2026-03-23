// DATABASE V5.0 - HỆ SINH THÁI TAXPORTAL
// Bao gồm hơn 80+ Mặt hàng và Dịch vụ phổ biến tại thị trường Việt Nam

const dbProducts = [
    // --- 1. ĐIỆN TỬ & THIẾT BỊ IT ---
    { id: 101, keywords: ['điện thoại', 'smartphone', 'iphone', 'samsung', 'oppo'], hs_code: '8517.12', group: 'Điện thoại di động' },
    { id: 102, keywords: ['laptop', 'macbook', 'dell', 'máy tính xách tay', 'pc'], hs_code: '8471.30', group: 'Máy tính xách tay & PC' },
    { id: 103, keywords: ['tai nghe', 'headphone', 'airpods', 'loa', 'speaker'], hs_code: '8518', group: 'Thiết bị âm thanh' },
    { id: 104, keywords: ['tivi', 'tv', 'smart tv', 'oled', 'màn hình hiển thị'], hs_code: '8528', group: 'Màn hình & Tivi' },
    { id: 105, keywords: ['camera', 'máy ảnh', 'webcam', 'gopro'], hs_code: '8525', group: 'Camera & Máy ảnh' },
    { id: 106, keywords: ['đồng hồ thông minh', 'apple watch', 'smartwatch'], hs_code: '9102', group: 'Đồng hồ đeo tay' },
    { id: 107, keywords: ['chuột', 'bàn phím', 'mouse', 'keyboard'], hs_code: '8471.60', group: 'Thiết bị ngoại vi' },

    // --- 2. THIẾT BỊ ĐIỆN GIA DỤNG ---
    { id: 201, keywords: ['tủ lạnh', 'refrigerator', 'tủ đông'], hs_code: '8418', group: 'Tủ lạnh & Tủ đông' },
    { id: 202, keywords: ['máy giặt', 'washing machine', 'máy sấy'], hs_code: '8450', group: 'Máy giặt quần áo' },
    { id: 203, keywords: ['điều hòa', 'máy lạnh', 'daikin', 'ac'], hs_code: '8415', group: 'Điều hòa nhiệt độ (≤ 90k BTU)' },
    { id: 204, keywords: ['lò vi sóng', 'microwave', 'lò nướng'], hs_code: '8516.50', group: 'Lò vi sóng' },
    { id: 205, keywords: ['nồi cơm điện', 'rice cooker', 'nồi chiên không dầu'], hs_code: '8516.60', group: 'Thiết bị đun nấu' },
    { id: 206, keywords: ['quạt', 'fan', 'quạt trần', 'quạt đứng'], hs_code: '8414.51', group: 'Quạt điện' },
    { id: 207, keywords: ['máy hút bụi', 'vacuum cleaner', 'robot hút bụi'], hs_code: '8508', group: 'Máy hút bụi' },
    { id: 208, keywords: ['bóng đèn', 'đèn led', 'light bulb'], hs_code: '8539', group: 'Bóng đèn điện' },

    // --- 3. THỰC PHẨM & ĐỒ UỐNG ---
    { id: 301, keywords: ['gạo', 'rice', 'gạo st25', 'gạo tẻ'], hs_code: '1006', group: 'Gạo' },
    { id: 302, keywords: ['thịt lợn', 'thịt heo', 'pork'], hs_code: '0203', group: 'Thịt lợn (Tươi/Đông lanh)' },
    { id: 303, keywords: ['thịt bò', 'beef', 'thịt trâu'], hs_code: '0201', group: 'Thịt bò (Tươi/Ướp lạnh)' },
    { id: 304, keywords: ['sữa tươi', 'milk', 'vinamilk', 'th true milk'], hs_code: '0402', group: 'Sữa và kem' },
    { id: 305, keywords: ['sữa bột', 'sữa công thức', 'meiji', 'ensure'], hs_code: '1901', group: 'Thực phẩm dinh dưỡng (Sữa bột)' },
    { id: 306, keywords: ['rượu vang', 'wine', 'bordeaux'], hs_code: '2204', group: 'Rượu vang' },
    { id: 307, keywords: ['rượu mạnh', 'chivas', 'vodka', 'whisky'], hs_code: '2208', group: 'Rượu mạnh (>20 độ)' },
    { id: 308, keywords: ['bia', 'beer', 'heineken', 'tiger', 'bia hơi'], hs_code: '2203', group: 'Bia các loại' },
    { id: 309, keywords: ['nước ngọt', 'coca', 'pepsi', 'bò húc', 'redbull'], hs_code: '2202', group: 'Nước giải khát' },
    { id: 310, keywords: ['cà phê', 'coffee', 'cafe', 'hạt cà phê', 'robusta'], hs_code: '0901', group: 'Cà phê rang/hạt' },
    { id: 311, keywords: ['nước mắm', 'xì dầu', 'tương ớt', 'gia vị', 'chin su'], hs_code: '2103', group: 'Nước chấm & Gia vị' },
    { id: 312, keywords: ['mì tôm', 'mì gói', 'instant noodle', 'hảo hảo'], hs_code: '1902', group: 'Mì, bún, miến (Khô)' },
    { id: 313, keywords: ['trái cây', 'hoa quả', 'táo', 'sầu riêng'], hs_code: '0810', group: 'Trái cây tươi' },
    { id: 314, keywords: ['thủy sản', 'cá', 'tôm', 'mực', 'seafood'], hs_code: '0302', group: 'Cá tươi/Ướp lạnh' },

    // --- 4. THỜI TRANG & MỸ PHẨM ---
    { id: 401, keywords: ['quần jean', 'quần bò', 'jeans'], hs_code: '6204', group: 'Quần áo từ bông' },
    { id: 402, keywords: ['áo thun', 't-shirt', 'áo phông', 'sơ mi'], hs_code: '6109', group: 'Áo phông (T-shirts)' },
    { id: 403, keywords: ['giày thể thao', 'sneakers', 'nike', 'adidas', 'giày da'], hs_code: '6404', group: 'Giày dép thể thao/Da' },
    { id: 404, keywords: ['túi xách', 'handbag', 'túi da', 'ví da', 'balo'], hs_code: '4202', group: 'Túi xách & Ví' },
    { id: 405, keywords: ['nước hoa', 'perfume', 'chanel', 'dior'], hs_code: '3303', group: 'Nước hoa' },
    { id: 406, keywords: ['son môi', 'lipstick', 'mỹ phẩm', 'serum', 'skincare'], hs_code: '3304', group: 'Mỹ phẩm & Dưỡng da' },
    { id: 407, keywords: ['dầu gội', 'sữa tắm', 'shampoo', 'sụn', 'clear'], hs_code: '3305', group: 'Chế phẩm chăm sóc tóc/Cơ thể' },

    // --- 5. PHƯƠNG TIỆN GIAO THÔNG ---
    { id: 501, keywords: ['ô tô xăng', 'xe hơi', 'camry', 'vios', 'suv', 'sedan'], hs_code: '8703', group: 'Ô tô chở người dưới 24 chỗ' },
    { id: 502, keywords: ['ô tô điện', 'xe điện', 'ev', 'tesla', 'vinfast vf8', 'hybrid'], hs_code: '8703.80', group: 'Ô tô điện (EV/HEV)' },
    { id: 503, keywords: ['xe máy', 'mô tô', 'sh 150', 'xe tay ga', 'wave'], hs_code: '8711', group: 'Mô tô & Xe máy (>125cc)' },
    { id: 504, keywords: ['xe gắn máy', 'xe đạp điện', 'xe 50cc'], hs_code: '8711.10', group: 'Xe máy phân khối nhỏ (≤ 50cc)' },
    { id: 505, keywords: ['lốp xe', 'vỏ xe', 'tire', 'lốp ô tô', 'michelin'], hs_code: '4011', group: 'Lốp cao su bơm hơi dạng mới' },
    { id: 506, keywords: ['ắc quy', 'battery', 'bình ắc quy', 'pin xe điện'], hs_code: '8507', group: 'Ắc quy điện' },
    { id: 507, keywords: ['xe đạp', 'bicycle', 'xe đạp thể thao'], hs_code: '8712', group: 'Xe đạp, xe cơ giới không động cơ' },
    { id: 508, keywords: ['máy bay', 'trực thăng', 'tàu bay'], hs_code: '8802', group: 'Tàu bay dân dụng' },
    { id: 509, keywords: ['du thuyền', 'yacht', 'tàu thủy'], hs_code: '8903', group: 'Du thuyền' },

    // --- 6. VẬT LIỆU XÂY DỰNG & NĂNG LƯỢNG ---
    { id: 601, keywords: ['xăng', 'petrol', 'ron 95', 'e5', 'ron 92'], hs_code: '2710.12', group: 'Xăng động cơ' },
    { id: 602, keywords: ['dầu diesel', 'do', 'dầu mỏ', 'dầu madut'], hs_code: '2710.19', group: 'Dầu Diesel & Nhiên liệu' },
    { id: 603, keywords: ['gas', 'khí dầu mỏ', 'lpg', 'bình gas'], hs_code: '2711', group: 'Khí dầu mỏ hóa lỏng (LPG)' },
    { id: 604, keywords: ['xi măng', 'cement', 'xi măng pcb40'], hs_code: '2523', group: 'Xi măng portland/Xây dựng' },
    { id: 605, keywords: ['thép xây dựng', 'thép cuộn', 'hòa phát', 'sắt cuộn'], hs_code: '7214', group: 'Sắt & Thép không hợp kim' },
    { id: 606, keywords: ['kính', 'kính cường lực', 'kính xây dựng'], hs_code: '7005', group: 'Kính nổi và kính mài' },
    { id: 607, keywords: ['gạch', 'gạch ốp lát', 'gạch men', 'ceramic'], hs_code: '6907', group: 'Gạch lát bằng gốm/sứ' },
    { id: 608, keywords: ['than', 'than đá', 'coal'], hs_code: '2701', group: 'Than đá' },

    // --- 7. ĐẶC BIỆT & QUÝ HIẾM ---
    { id: 701, keywords: ['thuốc lá', 'thuốc lá điếu', '555', 'marlboro'], hs_code: '2402.20', group: 'Thuốc lá điếu' },
    { id: 702, keywords: ['xì gà', 'cigar', 'cohiba'], hs_code: '2402.10', group: 'Xì gà' },
    { id: 703, keywords: ['bài lá', 'bài tây', 'tulokho'], hs_code: '9504.40', group: 'Bài lá' },
    { id: 704, keywords: ['vàng miếng', 'vàng sjc', 'vàng thỏi', 'vàng nhẫn'], hs_code: '7108', group: 'Vàng khối & Vàng thỏi' },
    { id: 705, keywords: ['kim cương', 'diamond', 'hột xoàn'], hs_code: '7102', group: 'Kim cương' },
    { id: 706, keywords: ['vàng mã', 'hàng mã', 'tiền âm phủ'], hs_code: '4823', group: 'Vàng mã, hàng mã' },
    
    // --- 8. HÀNG TIÊU DÙNG & LÝ THƯỜNG KHÁC ---
    { id: 801, keywords: ['bỉm', 'tã giấy', 'huggies', 'bobby', 'pampers'], hs_code: '9619', group: 'Băng vệ sinh & Tã lót' },
    { id: 802, keywords: ['đồ chơi', 'xếp hình', 'lego', 'búp bê'], hs_code: '9503', group: 'Đồ chơi trẻ em' },
    { id: 803, keywords: ['dĩa', 'nĩa', 'thìa', 'muôi', 'dao'], hs_code: '8215', group: 'Dụng cụ nhà bếp' },
    { id: 804, keywords: ['sách', 'book', 'truyện tranh', 'sgk'], hs_code: '4901', group: 'Sách, báo in' },
    { id: 805, keywords: ['thuốc tây', 'dược phẩm', 'panadol', 'paracetamol'], hs_code: '3004', group: 'Thuốc đóng gói bán lẻ' },
    { id: 806, keywords: ['khẩu trang', 'khẩu trang y tế', 'n95'], hs_code: '6307', group: 'Hàng dệt may sẵn (Khẩu trang)' },
    
    // --- 9. NGÀNH DỊCH VỤ (SERVICE) ---
    { id: 901, keywords: ['karaoke', 'hát', 'ktv'], hs_code: 'SVC.01', group: 'Kinh doanh Karaoke/Vũ trường' },
    { id: 902, keywords: ['casino', 'sòng bạc', 'đánh bạc'], hs_code: 'SVC.02', group: 'Kinh doanh Casino/Trò chơi có thưởng' },
    { id: 903, keywords: ['đặt cược', 'cá độ', 'betting'], hs_code: 'SVC.03', group: 'Kinh doanh Đặt cược' },
    { id: 904, keywords: ['golf', 'đánh gôn', 'sân gôn'], hs_code: 'SVC.04', group: 'Kinh doanh Golf' },
    { id: 905, keywords: ['xổ số', 'vietlott', 'lô tô', 'kiến thiết'], hs_code: 'SVC.05', group: 'Kinh doanh Xổ số' },
    { id: 906, keywords: ['massage', 'xông hơi', 'spa'], hs_code: 'SVC.06', group: 'Kinh doanh Massage / Spa' }
];

const dbTaxes = {
    // IT & Gia dụng
    '8517.12': { name: 'Điện thoại di động các loại', unit: 'Chiếc', def_price: 15000000, nk_mfn: 0, ttdb: 0, vat: 10, env: 0, global: { US: 0, EU: 0, CN: 0 } },
    '8471.30': { name: 'Máy tính xách tay (Laptop)', unit: 'Chiếc', def_price: 20000000, nk_mfn: 0, ttdb: 0, vat: 10, env: 0, global: { CN: 0 } },
    '8518': { name: 'Micro, Tai nghe, Loa âm thanh', unit: 'Bộ', def_price: 2500000, nk_mfn: 15, ttdb: 0, vat: 10, env: 0, global: { CN: 0, KR: 5 } },
    '8528': { name: 'Màn hình & Máy thu truyền hình (Tivi)', unit: 'Chiếc', def_price: 8000000, nk_mfn: 25, ttdb: 0, vat: 10, env: 0, global: { TH: 0, MY: 0 } },
    '8525': { name: 'Camera truyền hình, máy ảnh Kỹ thuật số', unit: 'Chiếc', def_price: 12000000, nk_mfn: 10, ttdb: 0, vat: 10, env: 0, global: { JP: 0 } },
    '8418': { name: 'Tủ lạnh, tủ kết đông gia đình', unit: 'Chiếc', def_price: 9000000, nk_mfn: 25, ttdb: 0, vat: 10, env: 0, global: { TH: 5 } },
    '8450': { name: 'Máy giặt, sấy quần áo', unit: 'Chiếc', def_price: 7500000, nk_mfn: 25, ttdb: 0, vat: 10, env: 0, global: {} },
    '8415': { name: 'Máy điều hòa không khí (≤ 90k BTU)', unit: 'Bộ', def_price: 10000000, nk_mfn: 25, ttdb: 10, vat: 10, env: 0, global: { TH: 5 } },
    '8508': { name: 'Máy hút bụi', unit: 'Chiếc', def_price: 3000000, nk_mfn: 25, ttdb: 0, vat: 10, env: 0, global: {} },

    // Thực phẩm & FMCG
    '1006': { name: 'Gạo (Gạo lứt, Gạo tẻ, Gạo nếp)', unit: 'Kg', def_price: 25000, nk_mfn: 40, ttdb: 0, vat: 5, env: 0, global: { IN: 0, TH: 0 } },
    '0203': { name: 'Thịt lợn (Tươi, ướp lạnh, đông lạnh)', unit: 'Kg', def_price: 120000, nk_mfn: 15, ttdb: 0, vat: 5, env: 0, global: { EU: 9, US: 10 } },
    '0201': { name: 'Thịt bò (Tươi, ướp lạnh, đông lạnh)', unit: 'Kg', def_price: 250000, nk_mfn: 20, ttdb: 0, vat: 5, env: 0, global: { AU: 0, US: 14 } },
    '1901': { name: 'Sản phẩm dinh dưỡng y tế (Sữa bột)', unit: 'Hộp', def_price: 450000, nk_mfn: 10, ttdb: 0, vat: 8, env: 0, global: { NZ: 0, EU: 5 } },
    '0402': { name: 'Sữa và kem sữa tươi', unit: 'Lít', def_price: 35000, nk_mfn: 15, ttdb: 0, vat: 8, env: 0, global: {} },
    '2204': { name: 'Rượu vang nho tươi', unit: 'Chai', def_price: 350000, nk_mfn: 50, ttdb: 35, vat: 10, env: 0, global: { FR: 20, CL: 10 } },
    '2208': { name: 'Rượu mạnh và đồ uống có cồn >20 độ', unit: 'Chai', def_price: 800000, nk_mfn: 65, ttdb: 65, vat: 10, env: 0, global: { UK: 20 } },
    '2203': { name: 'Bia và đồ uống từ malt', unit: 'Lon', def_price: 20000, nk_mfn: 35, ttdb: 65, vat: 10, env: 0, global: { TH: 60, SG: 48, US: 0 } },
    '2202': { name: 'Nước ngọt, nước giải khát có ga', unit: 'Lon', def_price: 10000, nk_mfn: 30, ttdb: 0, vat: 10, env: 0, global: {} }, // Dự thảo TTĐB 10%
    '0901': { name: 'Cà phê rang/hạt', unit: 'Kg', def_price: 150000, nk_mfn: 15, ttdb: 0, vat: 5, env: 0, global: { BR: 15 } },
    '2103': { name: 'Nước chấm, gia vị mắm', unit: 'Chai', def_price: 30000, nk_mfn: 35, ttdb: 0, vat: 8, env: 0, global: {} },
    '1902': { name: 'Mì ăn liền (Khô)', unit: 'Gói', def_price: 5000, nk_mfn: 35, ttdb: 0, vat: 8, env: 0, global: { KR: 0 } },

    // Thời trang & Mỹ phẩm
    '6204': { name: 'Quần áo nữ, quần áo dệt bông', unit: 'Chiếc', def_price: 350000, nk_mfn: 20, ttdb: 0, vat: 10, env: 0, global: { CN: 0 } },
    '6109': { name: 'Áo phông (T-shirts)', unit: 'Chiếc', def_price: 150000, nk_mfn: 20, ttdb: 0, vat: 10, env: 0, global: { CN: 0, KR: 5 } },
    '6404': { name: 'Giày dép đế cao su, giày thể thao', unit: 'Đôi', def_price: 1200000, nk_mfn: 30, ttdb: 0, vat: 10, env: 0, global: { VN: 0 } },
    '4202': { name: 'Túi xách, ví, vali da', unit: 'Chiếc', def_price: 800000, nk_mfn: 25, ttdb: 0, vat: 10, env: 0, global: { EU: 15 } },
    '3303': { name: 'Nước hoa và nước thơm', unit: 'Chai', def_price: 2500000, nk_mfn: 18, ttdb: 0, vat: 10, env: 0, global: { FR: 5 } },
    '3304': { name: 'Mỹ phẩm, đồ trang điểm, Skin-care', unit: 'Hộp', def_price: 500000, nk_mfn: 18, ttdb: 0, vat: 10, env: 0, global: { KR: 0, JP: 0 } },
    
    // Phương tiện giao thông & Năng lượng
    '8703': { name: 'Ô tô chở người thuần xăng', unit: 'Chiếc', def_price: 1000000000, nk_mfn: 70, ttdb: 35, vat: 10, env: 0, global: { TH: 50, ID: 50, EU: 58 } },
    '8703.80': { name: 'Ô tô chạy hoàn toàn bằng điện (BEV)', unit: 'Chiếc', def_price: 900000000, nk_mfn: 70, ttdb: 3, vat: 10, env: 0, global: { CN: 47 } },
    '8711': { name: 'Xe máy, mô tô (> 125 phân khối)', unit: 'Chiếc', def_price: 65000000, nk_mfn: 65, ttdb: 20, vat: 10, env: 0, global: { TH: 40 } },
    '8711.10': { name: 'Xe máy gắn động cơ (≤ 50 phân khối)', unit: 'Chiếc', def_price: 18000000, nk_mfn: 65, ttdb: 0, vat: 10, env: 0, global: {} },
    '2710.12': { name: 'Xăng động cơ (không chì chuẩn)', unit: 'Lít', def_price: 22000, nk_mfn: 10, ttdb: 10, vat: 10, env: 4000, global: { MY: 0, KR: 45 } },
    '2710.19': { name: 'Dầu Diesel (DO)', unit: 'Lít', def_price: 20000, nk_mfn: 5, ttdb: 0, vat: 10, env: 2000, global: {} },
    '2711': { name: 'Khí dầu mỏ hóa lỏng (LPG/Gas)', unit: 'Kg', def_price: 25000, nk_mfn: 5, ttdb: 0, vat: 10, env: 0, global: {} },

    // Xây dựng, Hàng tiêu dùng, Đặc thù
    '2523': { name: 'Xi măng portland', unit: 'Tấn', def_price: 1800000, nk_mfn: 35, ttdb: 0, vat: 10, env: 0, global: {} },
    '7214': { name: 'Sắt & Thép không hợp kim', unit: 'Tấn', def_price: 15000000, nk_mfn: 15, ttdb: 0, vat: 10, env: 0, global: {} },
    '2402.20': { name: 'Thuốc lá điếu nhập khẩu', unit: 'Bao', def_price: 35000, nk_mfn: 135, ttdb: 75, vat: 10, env: 0, global: { CN: 50, US: 100 } },
    '2402.10': { name: 'Xì gà (Cigar)', unit: 'Điếu', def_price: 850000, nk_mfn: 135, ttdb: 75, vat: 10, env: 0, global: { CU: 0 } },
    '9504.40': { name: 'Bộ bài tú lơ khơ', unit: 'Bộ', def_price: 15000, nk_mfn: 20, ttdb: 40, vat: 10, env: 0, global: {} },
    '4823': { name: 'Vàng mã, hàng mã', unit: 'Kg', def_price: 50000, nk_mfn: 20, ttdb: 70, vat: 10, env: 0, global: {} },
    '9619': { name: 'Băng vệ sinh, Tã lót (Bỉm)', unit: 'Bịch', def_price: 250000, nk_mfn: 15, ttdb: 0, vat: 8, env: 0, global: { JP: 0, CN: 0 } },
    '3004': { name: 'Thuốc chữa bệnh đóng gói', unit: 'Hộp', def_price: 150000, nk_mfn: 0, ttdb: 0, vat: 5, env: 0, global: { EU: 0 } },
    '9503': { name: 'Đồ chơi trẻ em', unit: 'Bộ', def_price: 350000, nk_mfn: 20, ttdb: 0, vat: 10, env: 0, global: { CN: 0 } },

    // Dịch vụ (SVC)
    'SVC.01': { name: 'Dịch vụ Karaoke, Vũ trường', unit: 'Phiên', def_price: 3000000, nk_mfn: 0, ttdb: 40, vat: 10, env: 0, global: {} },
    'SVC.02': { name: 'Dịch vụ Casino', unit: 'Vé/Chip', def_price: 5000000, nk_mfn: 0, ttdb: 35, vat: 10, env: 0, global: { MO: 39 } },
    'SVC.03': { name: 'Dịch vụ cá cược/đặt cược', unit: 'Lượt', def_price: 1000000, nk_mfn: 0, ttdb: 30, vat: 10, env: 0, global: {} },
    'SVC.04': { name: 'Kinh doanh sân Golf', unit: 'Lượt/Vé', def_price: 3500000, nk_mfn: 0, ttdb: 20, vat: 10, env: 0, global: {} },
    'SVC.05': { name: 'Kinh doanh Xổ số', unit: 'Vé', def_price: 10000, nk_mfn: 0, ttdb: 15, vat: 10, env: 0, global: {} },
    'SVC.06': { name: 'Kinh doanh Massage / Spa', unit: 'Vé', def_price: 500000, nk_mfn: 0, ttdb: 30, vat: 10, env: 0, global: {} }
};

const dbFTA = {
    '2203': { 'EU': 0, 'AS': 0, 'JP': 0 },
    '2204': { 'EU': 10, 'AS': 0 },
    '8703': { 'EU': 40, 'AS': 0 },
    '8711': { 'EU': 15, 'JP': 0, 'AS': 0 },
    '0203': { 'EU': 0, 'AS': 0 },
    '1006': { 'EU': 0, 'AS': 0 },
    '8517.12': { 'KR': 0, 'CN': 0, 'EU': 0 },
    '3303': { 'EU': 0, 'KR': 0 }
};

const dbLaws = {
    'vat': { name: 'Luật Thuế Giá trị gia tăng', url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-thue-gia-tri-gia-tang-2008-13-2008-QH12-67104.aspx' },
    'ttdb': { name: 'Luật Thuế Tiêu thụ đặc biệt', url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-thue-tieu-thu-dac-biet-2008-27-2008-QH12-82436.aspx' },
    'nk': { name: 'Nghị định 26/2023/NĐ-CP (Biểu thuế MFN)', url: 'https://thuvienphapluat.vn/van-ban/Xuat-nhap-khau/Nghi-dinh-26-2023-ND-CP-Bieu-thue-xuat-khau-Bieu-thue-nhap-khau-uu-dai-546051.aspx' },
    'env': { name: 'Luật Thuế bảo vệ môi trường', url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-thue-bao-ve-moi-truong-2010-57-2010-QH12-115003.aspx' }
};

const taxHistory = {
    '2203': [{ year: 2010, ttdb: 45 }, { year: 2013, ttdb: 50 }, { year: 2016, ttdb: 55 }, { year: 2018, ttdb: 65 }, { year: '2026 (Dự kiến)', ttdb: 80 }],
    '2204': [{ year: 2010, ttdb: 20 }, { year: 2016, ttdb: 30 }, { year: 2018, ttdb: 35 }, { year: '2026 (Dự thảo)', ttdb: 60 }],
    '8703': [{ year: 2016, nk: 70 }, { year: 2018, nk_asean: 0 }, { year: 2024, ttdb: 35 }],
    '2202': [{ year: 2021, ttdb: 0 }, { year: '2026 (Dự kiến)', ttdb: 10 }]
};

const thongDichVienAI = {
    "nĩa": "dĩa",
    "chén": "bát",
    "heo": "lợn",
    "hột quẹt": "bật lửa",
    "sen": "hạt sen",
    "muỗng": "dĩa",
    "trái cây": "quả",
    "xe gắn máy": "xe máy",
    "games": "đồ chơi",
    "táo": "trái cây",
    "huggies": "bỉm",
    "bobby": "bỉm",
    "pampers": "bỉm",
    "iphone": "điện thoại",
    "samsung": "điện thoại",
    "macbook": "laptop",
    "dell": "laptop",
    "xe hơi": "ô tô",
    "t-shirt": "áo thun",
    "sneaker": "giày thể thao"
};
