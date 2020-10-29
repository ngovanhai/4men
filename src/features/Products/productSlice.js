import { createSlice } from '@reduxjs/toolkit';
const initalState = [
    {
        "id": 1,
        "tittle": "QUẦN KAKI ĐEN QK179",
        "soluong": 20,
        "daban": 2,
        "gia": 275000,
        "phanloai": "quan",
        "mota": "test",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf25528.jpg",
            "image2": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf8d9a4.jpg",
            "image3": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebeb1b6b.jpg"
        }, "time": "2012-01-16"
    },
    {
        "id": 2,
        "tittle": "GIÀY TÂY ĐEN G117",
        "soluong": 1,
        "gia": 275000,
        "mota": "test",
        "daban": 10,
        "phanloai": "giay",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image2": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image3": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg"
        },
        "time": "2020-07-05"
    },
    {
        "id": 3,
        "tittle": "THẮT LƯNG NAM TL003 MÀU ĐEN",
        "soluong": 1,
        "gia": 275000,
        "mota": "test",
        "daban": 3,
        "phanloai": "thatlung",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf25528.jpg",
            "image2": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf8d9a4.jpg",
            "image3": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebeb1b6b.jpg"
        },
        "time": "2019-01-12",
        "sale": 0
    },
    {
        "id": 4,
        "tittle": "THẮT LƯNG NAM TL003 MÀU ĐEN",
        "soluong": 1,
        "gia": 275000,
        "mota": "test",
        "daban": 12,
        "phanloai": "thatlung",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf25528.jpg",
            "image2": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf8d9a4.jpg",
            "image3": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebeb1b6b.jpg"
        },
        "time": "2020-10-26"
    }, {
        "id": 5,
        "tittle": "QUẦN KAKI ĐEN QK179",
        "soluong": 20,
        "daban": 2,
        "gia": 275000,
        "phanloai": "quan",
        "mota": "test",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf25528.jpg",
            "image2": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf8d9a4.jpg",
            "image3": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebeb1b6b.jpg"
        },
        "time": "2020-04-16"
    },
    {
        "id": 6,
        "tittle": "GIÀY TÂY ĐEN G117",
        "soluong": 1,
        "gia": 275000,
        "mota": "test",
        "daban": 20,
        "phanloai": "giay",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image2": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image3": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg"
        },
        "time": "2020-03-13"
    },
    {
        "id": 7,
        "tittle": "THẮT LƯNG NAM TL003 MÀU ĐEN",
        "soluong": 1,
        "gia": 275000,
        "mota": "test",
        "daban": 15,
        "phanloai": "thatlung",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf25528.jpg",
            "image2": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf8d9a4.jpg",
            "image3": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebeb1b6b.jpg"
        },
        "time": "2015-03-16"
    },
    {
        "id": 8,
        "tittle": "THẮT LƯNG NAM TL003 MÀU ĐEN",
        "soluong": 1,
        "gia": 275000,
        "mota": "test",
        "daban": 26,
        "phanloai": "thatlung",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf25528.jpg",
            "image2": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebf8d9a4.jpg",
            "image3": "https://4menshop.com/images/thumbs/2019/01/quan-kaki-den-qk179-10587-slide-products-5c36cebeb1b6b.jpg"
        },
        "time": "2017-01-16"
    }
];


const product = createSlice({
    name: 'products',
    initialState: initalState,
    reducers: {
        AddToProduct: (state, action) => {
            console.log("hihi");
        },
        DeleteProduct: (state, action) => {
            console.log("delete")
        },
        EditProduct: (state, action) => {
            console.log("edit")
        }

    }

});

const { reducer, actions } = product;
export const { test } = actions;
export default reducer;