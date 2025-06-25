const ERROR_CODE = {
  INVALID_AUTH_TICKET: 10001,
  INVALID_TWO_FACTOR_CODE: 10002,
  INVALID_OTP_CODE: 10003,
  INVALID_RESET_PASSWORD_TOKEN: 10004,
  INSUFFICIENT_BALANCE: 10005,
  INSUFFICIENT_PROFILE_BALANCE: 10006,
  PLATFORM_ACCOUNT_EXIST: 10007,
  WORKSPACE_USER_EXIST: 10008,
  MEMBERS_EXISTS_CAN_NOT_DELETE: 10009,
  NOT_PURCHASED_PACKAGE: 10010,
  INVITE_REQUEST_EXIST: 10011,
  MEMBER_HAS_JOIN: 10008,
  INVITE_LINK_EXPIRED: 10012,
  PASSWORD_ALREADY_EXISTS: 10013,
  PASSWORD_INCORRECT: 10014,
  SELF_INVITE: 10015,
  NOT_DELETE_WORKSPACE: 10016,
  NOT_PERMISSION: 403,
  MANY_REQUEST: 429,
  ONLY_ALLOW_TRANSFER_PROFILES_NOT_AUTHORIZED: 10021,
  ACTIVATION_CODE_EXPIRED: 10023,
  ACTIVATION_CODE_LIMITED: 10024,
  FOR_WORKSPACE_OWNER_ONLY: 10025,
  CANT_CREATE_PROFILE_GROUP: 10027,
};

const GROUP_INVISIBLE = 'group_invisible';

const IS_BROWSER_DOWNLOADING = 'is_browser_downloading';

const WORKFLOW_CONFIG = {
  error_type: 'skip',
  close_browser: 'auto',
  save_tab: '0',
  use_headless: false,
  disable_password_filling: false,
  clear_cache_after_closing: false,
  enable_password_saving: false,
  launch_args: '',
  task_timeout: 0,
  tpl_name: '',
};

const WORKSPACE_ID = 'workspace_id';

const LEFT_CONDITION_OPTIONS = [
  {
    group: 'value',
    title: 'Giá trị',
    value: 'value',
  },
  // {
  //   group: 'value',
  //   title: 'Code',
  //   value: 'code',
  // },
  {
    group: 'value',
    title: 'Dữ liệu tồn tại',
    value: 'data_exists',
  },
  {
    group: 'value',
    title: 'Dữ liệu không tồn tại',
    value: 'data_not_exists',
  },
  {
    group: 'element',
    title: 'Phần tử văn bản',
    value: 'element_text',
  },
  {
    group: 'element',
    title: 'Phần tử tồn tại',
    value: 'element_exists',
  },
  {
    group: 'element',
    title: 'Phần tử không tồn tại',
    value: 'element_not_exists',
  },
  // {
  //   group: 'element',
  //   title: 'Element visible',
  //   value: 'element_visible',
  // },
  // {
  //   group: 'element',
  //   title: 'Element visible in screen',
  //   value: 'element_visible_in_screen',
  // },
  // {
  //   group: 'element',
  //   title: 'Element hidden in screen',
  //   value: 'element_hidden_in_screen',
  // },
  // {
  //   group: 'element',
  //   title: 'Element attribute value',
  //   value: 'element_attribute_value',
  // },
];

const RIGHT_CONDITION_OPTIONS = [
  {
    group: 'value',
    title: 'Giá trị',
    value: 'value',
  },
  {
    group: 'element',
    title: 'Phần tử văn bản',
    value: 'element_text',
  },
  {
    group: 'element',
    title: 'Giá trị thuộc tính phần tử',
    value: 'element_attribute_value',
  },
];

const OPERATOR_OPTIONS = [
  {
    group: 'basic',
    title: 'Bằng',
    value: 'equals',
  },
  {
    group: 'basic',
    title: 'Bằng (không phân biệt chữ hoa chữ thường)',
    value: 'equals_case_insensitive',
  },
  {
    group: 'basic',
    title: 'Khác',
    value: 'not_equals',
  },
  {
    group: 'number',
    title: 'Lớn hơn',
    value: 'greater_than',
  },
  {
    group: 'number',
    title: 'Lớn hơn hoặc bằng',
    value: 'greater_than_or_equals',
  },
  {
    group: 'number',
    title: 'Nhỏ hơn',
    value: 'less_than',
  },
  {
    group: 'number',
    title: 'Nhỏ hơn hoặc bằng',
    value: 'less_than_or_equals',
  },
  {
    group: 'text',
    title: 'Chứa',
    value: 'contains',
  },
  {
    group: 'text',
    title: 'Chứa (không phân biệt chữ hoa chữ thường)',
    value: 'contains_case_insensitive',
  },
  {
    group: 'text',
    title: 'Không chứa',
    value: 'not_contains',
  },
  {
    group: 'text',
    title: 'Không chứa (không phân biệt chữ hoa chữ thường)',
    value: 'not_contains_case_insensitive',
  },
  {
    group: 'text',
    title: 'Bắt đầu bằng',
    value: 'starts_with',
  },
  {
    group: 'text',
    title: 'Kết thúc bằng',
    value: 'ends_with',
  },
  {
    group: 'text',
    title: 'Phù hợp với RegEx',
    value: 'matches_with_regex',
  },
  {
    group: 'boolean',
    title: 'Đúng',
    value: 'is_truthy',
  },
  {
    group: 'boolean',
    title: 'Sai',
    value: 'is_falsy',
  },
];

const FB_PAGE_CATEGORIES = [
  {
    category_id: '181475575221097',
    category_name: 'Nhiếp ảnh gia',
  },
  {
    category_id: '1207',
    category_name: 'Video ca nhạc',
  },
  {
    category_id: '1062586164506537',
    category_name: 'Ca sĩ',
  },
  {
    category_id: '2220',
    category_name: 'Đồ dùng gia đình',
  },
  {
    category_id: '145887745471348',
    category_name: 'Nhà ga xe lửa',
  },
  {
    category_id: '145296352197250',
    category_name: 'Gia sư/Giáo viên',
  },
  {
    category_id: '109578329118821',
    category_name: 'Dịch vụ mát-xa',
  },
  {
    category_id: '1644814599176740',
    category_name: 'Dịch vụ chăm sóc da',
  },
  {
    category_id: '1605',
    category_name: 'Chuyên gia tin tức',
  },
  {
    category_id: '113914582020990',
    category_name: 'Bác sĩ gia đình',
  },
  {
    category_id: '200046713342752',
    category_name: 'Dịch vụ mua sắm',
  },
  {
    category_id: '1706730532910578',
    category_name: 'Dịch vụ tiếp thị qua Internet',
  },
  {
    category_id: '109527622457518',
    category_name: 'Trung tâm mua sắm',
  },
  {
    category_id: '136412456432179',
    category_name: 'Khu vực mua sắm',
  },
  {
    category_id: '185600691480842',
    category_name: 'Tiệm chăm sóc da',
  },
  {
    category_id: '196021933757044',
    category_name: 'Bác sĩ da liễu',
  },
  {
    category_id: '165531376827271',
    category_name: 'Dịch vụ khí ga & hoá chất',
  },
  {
    category_id: '726846324122041',
    category_name: 'Chuyên viên mát-xa',
  },
  {
    category_id: '199850580046875',
    category_name: 'Dịch vụ cửa ga-ra',
  },
  {
    category_id: '169421023103905',
    category_name: 'Trung tâm tài nguyên về AIDS',
  },
  {
    category_id: '137463256320813',
    category_name: 'Nhà hàng Ai-len',
  },
  {
    category_id: '146111019132409',
    category_name: 'Nhà hàng Ai Cập',
  },
  {
    category_id: '248856718821424',
    category_name: 'Quán rượu Ai-len',
  },
  {
    category_id: '210979565595898',
    category_name: 'Cửa hàng điện thoại di động',
  },
  {
    category_id: '199383530078300',
    category_name: 'Dịch vụ sức khỏe và an toàn nghề nghiệp',
  },
  {
    category_id: '124999390906893',
    category_name: 'Cửa hàng thiết bị di chuyển',
  },
  {
    category_id: '1618392255156255',
    category_name: 'Trung tâm cai nghiện ma túy',
  },
  {
    category_id: '150590361670906',
    category_name: 'Công ty an ninh về nhà ở',
  },
  {
    category_id: '180720568631853',
    category_name: 'Dịch vụ nhà di động',
  },
  {
    category_id: '408322431964552',
    category_name: 'Đồ ăn mang đi',
  },
  {
    category_id: '201128353243142',
    category_name: 'Người dẫn chó đi dạo',
  },
  {
    category_id: '139462872784035',
    category_name: 'Nhà thờ Lu-ti',
  },
  {
    category_id: '472367986267086',
    category_name: 'Khu vực bắn súng/đi săn',
  },
  {
    category_id: '268946656794071',
    category_name: 'Đường đi bộ',
  },
  {
    category_id: '191765907520539',
    category_name: 'Nhà hàng Ca-ri-bê',
  },
  {
    category_id: '114253171987086',
    category_name: 'Cửa hàng cung ứng vật dụng đi biển',
  },
  {
    category_id: '1223524174334504',
    category_name: 'Dịch vụ xe hơi',
  },
  {
    category_id: '124887510918208',
    category_name: 'Bể bơi công cộng',
  },
  {
    category_id: '1033987526649038',
    category_name: 'Dịch vụ chăm sóc xe hơi',
  },
  {
    category_id: '1219614134745580',
    category_name: 'Nơi bảo quản và xử lý gỗ',
  },
  {
    category_id: '192049437499122',
    category_name: 'Nơi cư trú',
  },
  {
    category_id: '184888278217935',
    category_name: 'Tư vấn về xe hơi',
  },
  {
    category_id: '145118935550090',
    category_name: 'Y tế & Sức khỏe',
  },
  {
    category_id: '2233',
    category_name: 'Công ty truyền thông/tin tức',
  },
  {
    category_id: '2258',
    category_name: 'Công ty lữ hành',
  },
  {
    category_id: '2256',
    category_name: 'Công ty cung cấp Internet',
  },
  {
    category_id: '2240',
    category_name: 'Công ty xe mô tô',
  },
  {
    category_id: '1211',
    category_name: 'Hãng thu âm',
  },
  {
    category_id: '1213',
    category_name: 'Bảng xếp hạng âm nhạc',
  },
  {
    category_id: '357645644269220',
    category_name: 'Dịch vụ y tế thay thế & tổng quát',
  },
  {
    category_id: '162532913805106',
    category_name: 'Công ty phát triển bất động sản',
  },
  {
    category_id: '180410821995109',
    category_name: 'Ô tô, máy bay, tàu',
  },
  {
    category_id: '128966563840349',
    category_name: 'Sân bay',
  },
  {
    category_id: '110186619064706',
    category_name: 'Câu lạc bộ hài kịch',
  },
  {
    category_id: '2715',
    category_name: 'Trang web địa phương & du lịch',
  },
  {
    category_id: '124947834245370',
    category_name: 'Trung tâm thông tin du lịch',
  },
  {
    category_id: '124861974254366',
    category_name: 'Đại lý du lịch',
  },
  {
    category_id: '128232937246338',
    category_name: 'Du lịch & Vận tải',
  },
  {
    category_id: '186004504854452',
    category_name: 'Câu lạc bộ thể thao ngoài trời/Trụ sở câu lạc bộ',
  },
  {
    category_id: '169581916792003',
    category_name: 'Dịch vụ du lịch',
  },
  {
    category_id: '2209',
    category_name: 'Quần áo (Thương hiệu)',
  },
  {
    category_id: '186230924744328',
    category_name: 'Cửa hàng quần áo',
  },
  {
    category_id: '128753240528981',
    category_name: 'Cửa hàng quần áo nữ',
  },
  {
    category_id: '1086422341396773',
    category_name: 'Trang phục & quần áo',
  },
  {
    category_id: '170241263022353',
    category_name: 'Cửa hàng quần áo nam',
  },
  {
    category_id: '192614304101075',
    category_name: 'Cửa hàng quần áo sơ sinh & trẻ em',
  },
  {
    category_id: '2232',
    category_name: 'Đồ em bé/Đồ trẻ em',
  },
  {
    category_id: '140784189318631',
    category_name: 'Dịch vụ may & sửa quần áo',
  },
  {
    category_id: '181811248521973',
    category_name: 'Dịch vụ chăm sóc trẻ em',
  },
  {
    category_id: '288846958171402',
    category_name: 'Cửa hàng nhỏ bán quần áo',
  },
  {
    category_id: '186244041778024',
    category_name: 'Ao',
  },
  {
    category_id: '1751315025152495',
    category_name: 'Nhà hàng Aosta',
  },
  {
    category_id: '2602',
    category_name: 'Cao đẳng & Đại học',
  },
  {
    category_id: '162914327091136',
    category_name: 'Hãng du lịch',
  },
  {
    category_id: '175657495818161',
    category_name: 'Hướng dẫn viên du lịch',
  },
  {
    category_id: '124718197599943',
    category_name: 'Dịch vụ trùng tu ô tô',
  },
  {
    category_id: '762918620511586',
    category_name: 'Đại lý du lịch ngắm cảnh',
  },
  {
    category_id: '1153901557995608',
    category_name: 'Siêu thị',
  },
  {
    category_id: '399569185041896',
    category_name: 'Nhà điêu khắc',
  },
  {
    category_id: '1362755683740187',
    category_name: 'Vườn điêu khắc',
  },
  {
    category_id: '203186900076443',
    category_name: 'Nhà nghiên cứu hệ tiêu hóa',
  },
  {
    category_id: '698901811119733',
    category_name: 'Người chơi nhạc cụ gõ điêu luyện',
  },
  {
    category_id: '1279661823470655',
    category_name: 'Cửa hàng bán sản phẩm siêu hình',
  },
  {
    category_id: '145117552216056',
    category_name: 'Bác sĩ tai mũi họng (ENT)',
  },
  {
    category_id: '174972792548177',
    category_name: 'Dịch vụ lai dắt',
  },
  {
    category_id: '187062101324297',
    category_name: 'Trung tâm cai nghiện tổng hợp',
  },
  {
    category_id: '1743633335850804',
    category_name: 'Trung tâm cai nghiện rượu',
  },
  {
    category_id: '1704452319818029',
    category_name: 'Dịch vụ cai nghiện',
  },
  {
    category_id: '1339497709413701',
    category_name: 'Trung tâm cai nghiện',
  },
  {
    category_id: '109594239116608',
    category_name: 'Môi giới bảo hiểm',
  },
  {
    category_id: '196739023685716',
    category_name: 'Người môi giới bất động sản',
  },
  {
    category_id: '191523214199822',
    category_name: 'Tổ chức bảo vệ môi trường',
  },
  {
    category_id: '270399375305266',
    category_name: 'Trẻ em & nuôi dạy con cái',
  },
  {
    category_id: '188573091164316',
    category_name: 'Cửa hàng vật nuôi',
  },
  {
    category_id: '1097498617107646',
    category_name: 'Người nuôi chó',
  },
  {
    category_id: '128268517241197',
    category_name: 'Tư vấn viên về môi trường',
  },
  {
    category_id: '143973032336164',
    category_name: 'Người môi giới nhượng quyền',
  },
  {
    category_id: '1737843579834952',
    category_name: 'Công ty môi giới',
  },
  {
    category_id: '1307356979279301',
    category_name: 'Cửa hàng vườn ươm & làm vườn',
  },
  {
    category_id: '187004854667366',
    category_name: 'Nơi cắm trại',
  },
  {
    category_id: '141810199571801',
    category_name: 'Nơi câu cá',
  },
  {
    category_id: '291301061210178',
    category_name: 'Cửa hàng đồ bơi',
  },
  {
    category_id: '314853004119510',
    category_name: 'Ẩm thực',
  },
  {
    category_id: '1122890141101989',
    category_name: 'Nhà cung cấp kim loại',
  },
  {
    category_id: '1212',
    category_name: 'Giải thưởng âm nhạc',
  },
  {
    category_id: '197888373555475',
    category_name: 'Dịch vụ in ấn',
  },
  {
    category_id: '973532567868624',
    category_name: 'Empanada Shop',
  },
  {
    category_id: '212086618801415',
    category_name: 'Người giữ em bé',
  },
  {
    category_id: '689358085597690',
    category_name: 'Phát triển trẻ em',
  },
  {
    category_id: '366213558769416',
    category_name: 'Nhạc & âm thanh',
  },
  {
    category_id: '132219350176698',
    category_name: 'Dịch vụ sưởi ấm, thông gió & điều hòa không khí',
  },
  {
    category_id: '667479207565813',
    category_name: 'Nhà sản xuất âm nhạc',
  },
  {
    category_id: '139745066094977',
    category_name: 'Trung tâm kinh doanh',
  },
  {
    category_id: '296862927058877',
    category_name: 'Trung tâm cộng đồng',
  },
  {
    category_id: '183013211744255',
    category_name: 'Trung tâm giải trí',
  },
  {
    category_id: '135930436481618',
    category_name: 'Quán bar/cà phê ban đêm',
  },
  {
    category_id: '191478144212980',
    category_name: 'Câu lạc bộ đêm & khiêu vũ',
  },
  {
    category_id: '1628617144122365',
    category_name: 'Cửa hàng ô tô',
  },
  {
    category_id: '149998721725634',
    category_name: 'Cửa hàng sửa chữa ô tô',
  },
  {
    category_id: '198327773511962',
    category_name: 'Bất động sản',
  },
  {
    category_id: '273819889375819',
    category_name: 'Nhà hàng',
  },
  {
    category_id: '1784467105117322',
    category_name: 'Người mẫu',
  },
  {
    category_id: '132852590115660',
    category_name: 'Nhà bếp/Nấu ăn',
  },
  {
    category_id: '1800',
    category_name: 'Giải đấu thể thao',
  },
  {
    category_id: '1606',
    category_name: 'Đầu bếp',
  },
  {
    category_id: '1639776363011106',
    category_name: 'Phòng tập quyền anh',
  },
  {
    category_id: '181679458534697',
    category_name: 'Dịch vụ  an toàn & Sơ cứu',
  },
  {
    category_id: '137670789632630',
    category_name: 'Nhà hàng Anh',
  },
  {
    category_id: '180164648685982',
    category_name: 'Nhạc sỹ/Ban nhạc',
  },
  {
    category_id: '660696964377118',
    category_name: 'Trang dành cho fan',
  },
  {
    category_id: '164595956925901',
    category_name: 'Chăm sóc ban ngày',
  },
  {
    category_id: '127892053948220',
    category_name: 'Quán ăn tự phục vụ',
  },
  {
    category_id: '192803624072087',
    category_name: 'Nhà hàng thức ăn nhanh',
  },
  {
    category_id: '139197659476308',
    category_name: 'In lưới & Thêu',
  },
  {
    category_id: '501126949579730',
    category_name: 'Indoor Playground',
  },
  {
    category_id: '1085863175741921',
    category_name: 'Intersection',
  },
  {
    category_id: '201035296584114',
    category_name: 'Quán cà phê Internet',
  },
  {
    category_id: '2709',
    category_name: 'Trang web tin tức & truyền thông',
  },
  {
    category_id: '110121459069433',
    category_name: 'Tòa án',
  },
  {
    category_id: '167954166588517',
    category_name: 'Quán ăn',
  },
  {
    category_id: '224426430990363',
    category_name: 'Xe bán đồ ăn',
  },
  {
    category_id: '1229571084955181',
    category_name: 'Unitarian Church',
  },
  {
    category_id: '1000882585125466',
    category_name: 'Student Union',
  },
  {
    category_id: '270603316626628',
    category_name: 'Nhà hàng Unagi',
  },
  {
    category_id: '162203750496209',
    category_name: 'Bác sĩ chuyên khoa ung thư',
  },
  {
    category_id: '1596337297362924',
    category_name: 'Sơn nhà',
  },
  {
    category_id: '434574248974371',
    category_name: 'Yến tiệc',
  },
  {
    category_id: '997443937042993',
    category_name: 'Cửa hàng cung tên',
  },
  {
    category_id: '1748542362059803',
    category_name: 'Nhà hàng Tứ Xuyên',
  },
  {
    category_id: '1109',
    category_name: 'Nhà văn',
  },
  {
    category_id: '181216025249367',
    category_name: 'Căn hộ và khu chung cư',
  },
  {
    category_id: '2701',
    category_name: 'Trang web nghệ thuật & nhân văn',
  },
  {
    category_id: '110249975723427',
    category_name: 'Văn phòng phẩm',
  },
  {
    category_id: '152181445195236',
    category_name: 'Cửa hàng thiết bị văn phòng',
  },
  {
    category_id: '856055631167537',
    category_name: 'Nghệ thuật văn học',
  },
  {
    category_id: '177734062274696',
    category_name: 'Sân tập',
  },
  {
    category_id: '2222',
    category_name: 'Sân/Vườn',
  },
  {
    category_id: '176059775772759',
    category_name: 'Sân gôn & câu lạc bộ thể thao ngoài trời',
  },
  {
    category_id: '109976259083543',
    category_name: 'Sân vận động, sân thể thao & địa điểm thi đấu thể thao',
  },
  {
    category_id: '279407562408138',
    category_name: 'Sân chơi cricket',
  },
  {
    category_id: '1745728339006036',
    category_name: 'Trung tâm giảm cân',
  },
  {
    category_id: '1605147709798088',
    category_name: 'Sân vận động bóng đá',
  },
  {
    category_id: '943469559038367',
    category_name: 'Kịch sân khấu',
  },
  {
    category_id: '220974118003804',
    category_name: 'Căn cứ quân sự',
  },
  {
    category_id: '178867352155084',
    category_name: 'Dịch vụ sửa đường ống nước',
  },
  {
    category_id: '842783295865930',
    category_name: 'Ứng viên chính trị',
  },
  {
    category_id: '1305041770017280',
    category_name: 'Hỗ trợ hiệu ứng đặc biệt',
  },
  {
    category_id: '197260276952187',
    category_name: 'Cửa hàng cung ứng thiết bị nhà hàng',
  },
  {
    category_id: '1625739434428339',
    category_name: 'Nghệ sĩ tạo hiệu ứng âm thanh',
  },
  {
    category_id: '181044611932826',
    category_name: 'Bác sĩ chuyên khoa dị ứng',
  },
  {
    category_id: '217002660445742',
    category_name: 'Giám chế hiệu ứng hình ảnh',
  },
  {
    category_id: '1032734503447630',
    category_name: 'Người quét ống khói',
  },
  {
    category_id: '2347428775505624',
    category_name: 'Người sáng tạo nội dung số',
  },
  {
    category_id: '439482481171255',
    category_name: 'Sáng tạo nội dung',
  },
  {
    category_id: '165245226927543',
    category_name: 'Nhà cung cấp thiết bị thương mại & công nghiệp',
  },
  {
    category_id: '109633322446882',
    category_name: 'Cửa hàng cung cấp & cho thuê đồ dùng cho bữa tiệc',
  },
  {
    category_id: '999176653484307',
    category_name: 'Trại nâng cao sức khỏe',
  },
  {
    category_id: '2262',
    category_name: 'Vitamin/thực phẩm chức năng',
  },
  {
    category_id: '2238',
    category_name: 'Công ty năng lượng',
  },
  {
    category_id: '193508567343323',
    category_name: 'Dịch vụ xăng dầu',
  },
  {
    category_id: '197289820310880',
    category_name: 'Nhà riêng',
  },
  {
    category_id: '1061943827220930',
    category_name: 'Trợ lý riêng',
  },
  {
    category_id: '498244033702006',
    category_name: 'Đầu bếp riêng',
  },
  {
    category_id: '314375185582911',
    category_name: 'Câu lạc bộ thành viên riêng tư',
  },
  {
    category_id: '162645523784869',
    category_name: 'Dịch vụ cung cấp cửa sổ nhà riêng',
  },
  {
    category_id: '187495294614939',
    category_name: 'Quy định máy bay riêng',
  },
  {
    category_id: '153635828025130',
    category_name: 'Cửa hàng thủ công mỹ nghệ',
  },
  {
    category_id: '1614',
    category_name: 'Vũ công',
  },
  {
    category_id: '3468821253380876',
    category_name: 'Thuốc không kê đơn',
  },
  {
    category_id: '171432846236153',
    category_name: 'Trung tâm trò chơi bắn súng sơn',
  },
  {
    category_id: '151790808570629',
    category_name: 'Nhà hàng Sơn Tây',
  },
  {
    category_id: '701480496660107',
    category_name: 'Nhà hàng Sơn Đông',
  },
  {
    category_id: '177892565587583',
    category_name: 'Dịch vụ tang lễ & nghĩa trang',
  },
  {
    category_id: '209630435729071',
    category_name: 'Nhà máy rượu vang/Vườn nho',
  },
  {
    category_id: '156982297694225',
    category_name: 'Khu bảo tồn hoang dã',
  },
  {
    category_id: '204506149664245',
    category_name: 'Công viên tiểu bang',
  },
  {
    category_id: '185881398118852',
    category_name: 'Người vận động hành lang',
  },
  {
    category_id: '179672275401610',
    category_name: 'Tư vấn doanh nghiệp',
  },
  {
    category_id: '357887979616332',
    category_name: 'Kinh doanh tại nhà',
  },
  {
    category_id: '200209719995975',
    category_name: 'Dịch vụ hỗ trợ doanh nghiệp',
  },
  {
    category_id: '182923418412354',
    category_name: 'Dịch vụ kinh doanh nhượng quyền',
  },
  {
    category_id: '133152263416981',
    category_name: 'Bệnh viện',
  },
  {
    category_id: '2707',
    category_name: 'Trang web sức khỏe & sự khỏe mạnh',
  },
  {
    category_id: '191969860827280',
    category_name: 'Nhiếp ảnh & kỹ thuật video',
  },
  {
    category_id: '530126207179123',
    category_name: 'Công ty xây dựng',
  },
  {
    category_id: '2255',
    category_name: 'Công ty máy tính',
  },
  {
    category_id: '133381803394214',
    category_name: 'Dịch vụ kê khai thuế',
  },
  {
    category_id: '179618232079666',
    category_name: 'Nhà thầu về bê tông',
  },
  {
    category_id: '137420212991446',
    category_name: 'Nhà hàng Pê-ru',
  },
  {
    category_id: '1820484181508887',
    category_name: 'Bác sĩ gây mê',
  },
  {
    category_id: '190152457675521',
    category_name: 'Nhà thờ chúa Giê-su',
  },
  {
    category_id: '139225689474222',
    category_name: 'Làm đẹp, mỹ phẩm & chăm sóc cá nhân',
  },
  {
    category_id: '192111490806699',
    category_name: 'Người bán hoa',
  },
  {
    category_id: '124581960948637',
    category_name: 'Cửa hàng sửa chữa & đại lý lốp xe',
  },
  {
    category_id: '144386572288836',
    category_name: 'Trạm xe buýt',
  },
  {
    category_id: '108287585916424',
    category_name: 'Cửa hàng sửa chữa xe máy',
  },
  {
    category_id: '131962450204676',
    category_name: 'Đại lý xe',
  },
  {
    category_id: '138456929557798',
    category_name: 'Tuyến xe buýt',
  },
  {
    category_id: '162295707155272',
    category_name: 'Rửa xe',
  },
  {
    category_id: '206284062724685',
    category_name: 'Dịch vụ lợp mái',
  },
  {
    category_id: '200010220031917',
    category_name: 'Trường dạy lái xe',
  },
  {
    category_id: '188684981153971',
    category_name: 'Nhà hàng cho lái xe vào',
  },
  {
    category_id: '534316996770910',
    category_name: 'Luật sư về lái xe khi say rượu',
  },
  {
    category_id: '976586885773142',
    category_name: 'Trung tâm tái chế',
  },
  {
    category_id: '127806747288007',
    category_name: 'Trường dạy lái xe',
  },
  {
    category_id: '121781067897279',
    category_name: 'Nhà tái hòa nhập cộng đồng',
  },
  {
    category_id: '1730236023904374',
    category_name: 'Dịch vụ tại nhà',
  },
  {
    category_id: '243290832429433',
    category_name: 'Thương mại & công nghiệp',
  },
  {
    category_id: '152339818172592',
    category_name: 'Đại lý bảo hiểm',
  },
  {
    category_id: '2214',
    category_name: 'Sức khỏe/Sắc đẹp',
  },
  {
    category_id: '1600',
    category_name: 'Vận động viên',
  },
  {
    category_id: '164243073639257',
    category_name: 'Khách sạn',
  },
  {
    category_id: '187714557925874',
    category_name: 'Tổ chức tôn giáo',
  },
  {
    category_id: '1027989540621571',
    category_name: 'Cho thuê ATV',
  },
  {
    category_id: '1700',
    category_name: 'Chính khách',
  },
  {
    category_id: '1400',
    category_name: 'Chương trình TV',
  },
  {
    category_id: '1350536325044173',
    category_name: 'Người tạo video chơi game',
  },
  {
    category_id: '161516070564222',
    category_name: 'Dịch vụ tài chính',
  },
  {
    category_id: '172157091784346',
    category_name: 'Người ghi âm phim',
  },
  {
    category_id: '235437449807086',
    category_name: 'Đường đua xe Go-Kart',
  },
  {
    category_id: '110113695730808',
    category_name: 'Thịt gà',
  },
  {
    category_id: '200027430011994',
    category_name: 'Bãi đỗ xe/ga-ra',
  },
  {
    category_id: '189006297788323',
    category_name: 'Nhà gỗ',
  },
  {
    category_id: '121405177935134',
    category_name: 'Lâm nghiệp & Khai thác gỗ',
  },
  {
    category_id: '1112',
    category_name: 'Giải thưởng điện ảnh/truyền hình',
  },
  {
    category_id: '2705',
    category_name: 'Trang web giải trí',
  },
  {
    category_id: '1301',
    category_name: 'Tác giả',
  },
  {
    category_id: '673445767199285',
    category_name: 'Khoa học & công nghệ',
  },
  {
    category_id: '557045641143373',
    category_name: 'Thiết kế & Thời trang',
  },
  {
    category_id: '2235',
    category_name: 'Tổ chức phi chính phủ (NGO)',
  },
  {
    category_id: '124816677590074',
    category_name: 'Nhà thầu',
  },
  {
    category_id: '108427109235243',
    category_name: 'Cải tạo nhà cửa',
  },
  {
    category_id: '1105',
    category_name: 'Phim',
  },
  {
    category_id: '185127444860544',
    category_name: 'Phụ kiện',
  },
  {
    category_id: '2211',
    category_name: 'Phần mềm',
  },
  {
    category_id: '733618421337544',
    category_name: 'Phụ kiện thời trang',
  },
  {
    category_id: '161422927240513',
    category_name: 'Tổ chức chính phủ',
  },
  {
    category_id: '2603',
    category_name: 'Tổ chức phi lợi nhuận',
  },
  {
    category_id: '199236533423806',
    category_name: 'Thẩm mỹ viện',
  },
  {
    category_id: '964585346994407',
    category_name: 'Thể thao',
  },
  {
    category_id: '471120789926333',
    category_name: 'Game thủ',
  },
  {
    category_id: '2601',
    category_name: 'Trường học',
  },
  {
    category_id: '1757592557789532',
    category_name: 'Quảng cáo/Tiếp thị',
  },
  {
    category_id: '233804719972590',
    category_name: 'Quán bar & Đồ nướng',
  },
  {
    category_id: '110290705711626',
    category_name: 'Quán bar',
  },
  {
    category_id: '164886566892249',
    category_name: 'Agency quảng cáo',
  },
  {
    category_id: '191647907538150',
    category_name: 'Cửa hàng quà tặng',
  },
  {
    category_id: '1080612391976317',
    category_name: 'Nghệ thuật thị giác',
  },
  {
    category_id: '756092301147942',
    category_name: 'Nghệ thuật trình diễn',
  },
  {
    category_id: '1803',
    category_name: 'Đội thể thao nghiệp dư',
  },
  {
    category_id: '530553733821238',
    category_name: 'Agency mạng xã hội',
  },
  {
    category_id: '1108',
    category_name: 'Nhà sản xuất',
  },
  {
    category_id: '2606',
    category_name: 'Mục đích xã hội',
  },
  {
    category_id: '1708896199364202',
    category_name: 'Cửa hàng kính râm & kính mắt',
  },
  {
    category_id: '184405378265823',
    category_name: 'Trung tâm tập gym/rèn luyện thể chất',
  },
  {
    category_id: '2224',
    category_name: 'Rượu/Rượu mạnh',
  },
  {
    category_id: '128157407253652',
    category_name: 'Cửa hàng rau quả',
  },
  {
    category_id: '193831710644458',
    category_name: 'Nhà hàng Ý',
  },
  {
    category_id: '200253979990258',
    category_name: 'Cửa hàng tiện lợi',
  },
  {
    category_id: '193705277324704',
    category_name: 'Người lập kế hoạch sự kiện',
  },
  {
    category_id: '188234584533149',
    category_name: 'Bác sĩ',
  },
  {
    category_id: '1201',
    category_name: 'Bài hát',
  },
  {
    category_id: '150108431712141',
    category_name: 'Cửa hàng tạp hóa',
  },
  {
    category_id: '2226',
    category_name: 'Trang sức/Đồng hồ',
  },
  {
    category_id: '1057744077629687',
    category_name: 'Máy rút tiền tự động (ATM)',
  },
  {
    category_id: '1072337919501155',
    category_name: 'Đại lý ATV',
  },
  {
    category_id: '1309',
    category_name: 'Bộ sách',
  },
  {
    category_id: '1715779848685080',
    category_name: 'Nhà hàng Friuli Venezia Giulia',
  },
  {
    category_id: '124907487582838',
    category_name: 'Cửa hàng thiết bị y khoa',
  },
  {
    category_id: '187215161312096',
    category_name: 'Nhà cung cấp dịch vụ Internet',
  },
  {
    category_id: '207290352633942',
    category_name: 'Câu lạc bộ jazz & blues',
  },
  {
    category_id: '1109709095768018',
    category_name: 'Nhà hàng Bossam/Jokbal',
  },
  {
    category_id: '242173041104870',
    category_name: 'Ban nhạc jazz',
  },
  {
    category_id: '1575068609459537',
    category_name: 'Nhà hàng Jamaica',
  },
  {
    category_id: '1550678138571790',
    category_name: 'Nhà hàng Janguh',
  },
  {
    category_id: '123377808095874',
    category_name: 'Agency marketing',
  },
  {
    category_id: '127772663958428',
    category_name: 'Bác sĩ sản khoa - phụ khoa (OBGYN)',
  },
  {
    category_id: '1071626812928876',
    category_name: 'Nhà hát opera',
  },
  {
    category_id: '211579738882707',
    category_name: 'Trò chơi điện tử',
  },
  {
    category_id: '199833073363963',
    category_name: 'Cửa hàng rượu, bia & đồ uống có cồn',
  },
  {
    category_id: '1001940186594348',
    category_name: 'Nhà hàng Uttar Pradesh',
  },
  {
    category_id: '845844622227120',
    category_name: 'Nhà hàng Ukraina',
  },
  {
    category_id: '2704',
    category_name: 'Trang web giáo dục',
  },
  {
    category_id: '174832985894571',
    category_name: 'Phòng tập yoga',
  },
  {
    category_id: '162068413843305',
    category_name: 'Bác sĩ thú y',
  },
  {
    category_id: '190153097675457',
    category_name: 'Trường y',
  },
  {
    category_id: '139492049448901',
    category_name: 'Cửa hàng phụ tùng ô tô',
  },
  {
    category_id: '625688294262999',
    category_name: 'Đại lý ô tô',
  },
];

const RESOURCE_OPTIONS = [
  {
    id: 'op_gg',
    icon: 'flat-color-icons:google',
    label: 'Google',
    value: 'google',
  },
  {
    id: 'op_ins',
    icon: 'skill-icons:instagram',
    label: 'Instagram',
    value: 'instagram',
  },
  { id: 'op_fb', icon: 'logos:facebook', label: 'Facebook', value: 'facebook' },
  { id: 'op_te', icon: 'logos:telegram', label: 'Telegram', value: 'telegram' },
  {
    id: 'op_tw',
    icon: 'skill-icons:twitter',
    label: 'Twitter',
    value: 'twitter',
  },
  { id: 'op_ti', icon: 'logos:tiktok-icon', label: 'Tiktok', value: 'tiktok' },
];

const METHOD_OPTIONS = [
  {
    id: 'mo01',
    label: 'GET',
    value: 'GET',
  },
  {
    id: 'mo02',
    label: 'POST',
    value: 'POST',
  },
  {
    id: 'mo03',
    label: 'PUT',
    value: 'PUT',
  },
  {
    id: 'mo04',
    label: 'DELETE',
    value: 'DELETE',
  },
  {
    id: 'mo05',
    label: 'PATCH',
    value: 'PATCH',
  },
  {
    id: 'mo06',
    label: 'HEAD',
    value: 'HEAD',
  },
  {
    id: 'mo07',
    label: 'OPTIONS',
    value: 'OPTIONS',
  },
  {
    id: 'mo08',
    label: 'TRACE',
    value: 'TRACE',
  },
  {
    id: 'mo09',
    label: 'CONNECT',
    value: 'CONNECT',
  },
];

const KEYBOARD = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'Power',
  'Eject',
  'Abort',
  'Help',
  'Backspace',
  'Tab',
  'Numpad5',
  'NumpadEnter',
  'Enter',
  '\\r',
  '\\n',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'ControlRight',
  'AltLeft',
  'AltRight',
  'Pause',
  'CapsLock',
  'Escape',
  'Convert',
  'NonConvert',
  'Space',
  'Numpad9',
  'PageUp',
  'Numpad3',
  'PageDown',
  'End',
  'Numpad1',
  'Home',
  'Numpad7',
  'ArrowLeft',
  'Numpad4',
  'Numpad8',
  'ArrowUp',
  'ArrowRight',
  'Numpad6',
  'Numpad2',
  'ArrowDown',
  'Select',
  'Open',
  'PrintScreen',
  'Insert',
  'Numpad0',
  'Delete',
  'NumpadDecimal',
  'Digit0',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'KeyA',
  'KeyB',
  'KeyC',
  'KeyD',
  'KeyE',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyI',
  'KeyJ',
  'KeyK',
  'KeyL',
  'KeyM',
  'KeyN',
  'KeyO',
  'KeyP',
  'KeyQ',
  'KeyR',
  'KeyS',
  'KeyT',
  'KeyU',
  'KeyV',
  'KeyW',
  'KeyX',
  'KeyY',
  'KeyZ',
  'MetaLeft',
  'MetaRight',
  'ContextMenu',
  'NumpadMultiply',
  'NumpadAdd',
  'NumpadSubtract',
  'NumpadDivide',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'F13',
  'F14',
  'F15',
  'F16',
  'F17',
  'F18',
  'F19',
  'F20',
  'F21',
  'F22',
  'F23',
  'F24',
  'NumLock',
  'ScrollLock',
  'AudioVolumeMute',
  'AudioVolumeDown',
  'AudioVolumeUp',
  'MediaTrackNext',
  'MediaTrackPrevious',
  'MediaStop',
  'MediaPlayPause',
  'Semicolon',
  'Equal',
  'NumpadEqual',
  'Comma',
  'Minus',
  'Period',
  'Slash',
  'Backquote',
  'BracketLeft',
  'Backslash',
  'BracketRight',
  'Quote',
  'AltGraph',
  'Props',
  'Cancel',
  'Clear',
  'Shift',
  'Control',
  'Alt',
  'Accept',
  'ModeChange',
  ' ,',
  'Print',
  'Execute',
  '\\u0000',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'Meta',
  '*',
  '+',
  '-',
  '/',
  ';',
  '=',
  ',',
  '.',
  '`',
  '[',
  '\\\\',
  ']',
  "'",
  'Attn',
  'CrSel',
  'ExSel',
  'EraseEof',
  'Play',
  'ZoomOut',
  ')',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '(',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  ':',
  '<',
  '_',
  '>',
  '?',
  '~',
  '{',
  '',
  '}',
  '"',
  'SoftLeft',
  'SoftRight',
  'Camera',
  'Call',
  'EndCall',
  'VolumeDown',
  'VolumeUp',
];

const STORAGE_KEY = 'accessToken';

const USER_INFORMATION = 'user_information';

const TERMINAL_SETTING = `{"fontSize": 16, "minimap": {"enabled": true}}`;

export {
  ERROR_CODE,
  GROUP_INVISIBLE,
  IS_BROWSER_DOWNLOADING,
  WORKFLOW_CONFIG,
  WORKSPACE_ID,
  LEFT_CONDITION_OPTIONS,
  RIGHT_CONDITION_OPTIONS,
  OPERATOR_OPTIONS,
  FB_PAGE_CATEGORIES,
  RESOURCE_OPTIONS,
  METHOD_OPTIONS,
  KEYBOARD,
  STORAGE_KEY,
  USER_INFORMATION,
  TERMINAL_SETTING,
};
