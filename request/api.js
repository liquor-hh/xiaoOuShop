const API = {
	home: {
		getBanner: '/api/getbanner',
		getGoods: '/api/getindexgoods'
	},
	category: {
		getCate: '/api/getcategory'
	},
	goodlist: {
		getGoodsList: '/api/getgoods'
	},
	gooddetail: {
		getGoodsDetail: '/api/getgoodsInfo'
	},
	login: {
		login: '/api/login',
		register: '/api/register'
	},
	shopCar: {
		getList: '/api/cartlist',
		addCart: '/api/cartadd',
		editCart: '/api/cartedit',
		delCart: '/api/cartdelete'
	}
}
export default API