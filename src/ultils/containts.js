import path from "./path"
import slider1 from '../assets/images/slider1.png';

export const portUrl = "http://localhost:8080/api/v1"

export const navigations = [
  {
    id: 1,
    name: 'Nhóm',
    path: path.COLLECTIONS,
    sub: [
      {
        id: 1,
        name: 'Âm nhạc',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
      {
        id: 2,
        name: 'Ba lô & phụ kiện',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
      {
        id: 3,
        name: 'Baby',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
      {
        id: 4,
        name: 'Búp bê',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
      {
        id: 5,
        name: 'Con quay',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
      {
        id: 6,
        name: 'Đồ chơi gỗ',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
      {
        id: 7,
        name: 'Thú bông',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
      {
        id: 8,
        name: 'Xe hơi & tàu',
        path: `${path.COLLECTIONS}/Âm nhạc`
      },
    ]
  },
  {
    id: 2,
    name: 'Thương hiệu',
    path: path.COLLECTIONS,
    sub: [
      {
        id: 1,
        name: 'Ania',
        path: `${path.COLLECTIONS}/Ania`
      },
      {
        id: 2,
        name: 'Aquabeads',
        path: `${path.COLLECTIONS}/Aquabeads`
      },
      {
        id: 3,
        name: 'B.toys',
        path: `${path.COLLECTIONS}/B.toys`
      },
      {
        id: 4,
        name: 'Babiators',
        path: `${path.COLLECTIONS}/Babiators`
      },
      {
        id: 5,
        name: 'Playmobil',
        path: `${path.COLLECTIONS}/Playmobil`
      },
      {
        id: 6,
        name: 'Babé',
        path: `${path.COLLECTIONS}/Babé`
      },
      {
        id: 7,
        name: 'Bobi Craft',
        path: `${path.COLLECTIONS}/Bobi Craft`
      },
      {
        id: 8,
        name: 'Dalimi',
        path: `${path.COLLECTIONS}/Dalimi`
      },
      {
        id: 9,
        name: 'Dream girl',
        path: `${path.COLLECTIONS}/Dream girl`
      },
      {
        id: 10,
        name: 'Driven',
        path: `${path.COLLECTIONS}/Driven`
      },
      {
        id: 11,
        name: 'Lego',
        path: `${path.COLLECTIONS}/Lego`
      },
      {
        id: 12,
        name: 'Licca',
        path: `${path.COLLECTIONS}/Licca`
      }
    ]
  },
  {
    id: 3,
    name: 'Sale',
    path: path.COLLECTIONS
  },
  {
    id: 4,
    name: 'Tuổi',
    path: path.COLLECTIONS,
    sub: [
      {
        id: 1,
        name: '1-2 Tuổi',
        path: '1-2'
      },
      {
        id: 2,
        name: '3-6 Tuổi',
        path: '3-6'
      },
      {
        id: 3,
        name: '7-12 Tuổi',
        path: '7-12'
      },
    ]
  },
  {
    id: 5,
    name: 'Bài viết',
    path: path.BLOG
  },
  {
    id: 6,
    name: 'Thông tin',
    path: path.PRODUCTS
  }
]

export const banners = [
  {
    id: 1,
    srcImg: slider1
  },

  {
    id: 2,
    srcImg: 'https://theme.hstatic.net/1000117512/1000772323/14/slideshow_4.jpg?v=953'
  },

  {
    id: 3,
    srcImg: 'https://theme.hstatic.net/1000117512/1000772323/14/slideshow_3.jpg?v=953'
  },
]

export const listImageProduct = [
  {
    id: 1,
    srcImg: 'https://product.hstatic.net/1000117512/product/fantasy_land_set-01_e32fee2ab8644df4b2a70b7f29fd3edf_medium.png'
  },

  {
    id: 2,
    srcImg: 'https://product.hstatic.net/1000117512/product/fantasy_land_set-07_f0c1af6cc5d6401abefd20335a2d4edb_medium.png'
  },

  {
    id: 3,
    srcImg: 'https://product.hstatic.net/1000117512/product/cong_vien_trong_choi_mao_hiem_-_2_b97e59f3aabc48b98799448581dd629e_medium.png'
  },

  {
    id: 4,
    srcImg: 'https://product.hstatic.net/1000117512/product/cong_vien_trong_choi_mao_hiem_-_2_b97e59f3aabc48b98799448581dd629e_medium.png'
  },
]

export const categoryHome = [
  {
    id: 1,
    title: 'Porche',
    img: 'https://theme.hstatic.net/1000117512/1000772323/14/f-catalog-body-image-1_medium.jpg?v=953',
    path: ''
  },

  {
    id: 2,
    title: 'Magformers',
    img: 'https://theme.hstatic.net/1000117512/1000772323/14/f-catalog-body-image-2_medium.jpg?v=953',
    path: ''
  },

  {
    id: 3,
    title: 'Smartgames',
    img: 'https://theme.hstatic.net/1000117512/1000772323/14/f-catalog-body-image-3_medium.jpg?v=953',
    path: ''
  },

  {
    id: 4,
    title: 'Máy làm kẹo bông',
    img: 'https://theme.hstatic.net/1000117512/1000772323/14/f-catalog-body-image-4_medium.jpg?v=953',
    path: ''
  },

  {
    id: 5,
    title: 'Máy giặt Dalimi',
    img: 'https://theme.hstatic.net/1000117512/1000772323/14/f-catalog-body-image-5_medium.jpg?v=953',
    path: ''
  },

  {
    id: 6,
    title: 'Xe công trình',
    img: 'https://theme.hstatic.net/1000117512/1000772323/14/f-catalog-body-image-6_medium.jpg?v=953',
    path: ''
  },
]

export const sortOld = [
  {
    id: 1,
    title: '1-3 tuổi',
    path: '/collections/1-3',
    value: '1-3'
  },
  {
    id: 2,
    title: 'Bé gái 3-6 tuổi',
    path: '/collections/3-6',
    value: '3-6'

  },
  {
    id: 3,
    title: 'Bé trai 3-6 tuổi',
    path: '/collections/3-6',
    value: ''
  },
  {
    id: 4,
    title: 'Bé trai 7-12 tuổi',
    path: '/collections/7-12',
    value: '7-12'
  },
]

export const listCheckboxBrand = [
  "Playmobil",
  "Tomica",
  "Sylvanian Families",
  "Pokemon",
  "Lego",
  "Plarail",
  "Winwintoys",
  "Aquabeads",
  "Magformers",
  "Btoys"
]

export const listCheckboxPrice = [
  {
    id: 1,
    title: "Dưới 200.000đ",
    value: "0-200000"
  },

  {
    id: 2,
    title: "200.000đ - 500.000đ",
    value: "200000-500000"
  },

  {
    id: 3,
    title: "500.000đ - 1.000.000đ",
    value: "500000-1000000"
  },

  {
    id: 4,
    title: "1.000.000đ - 1.500.000đ",
    value: "1000000-1500000"
  },

  {
    id: 5,
    title: "Trên 1.500.000đ",
    value: "1500000-"
  },
]