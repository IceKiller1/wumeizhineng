const baseUrl = 'http://47.99.119.120:8080'

const request = (options ={}) =>{
	let headers = {}
	var Token = uni.getStorageSync('Token')
	headers['Authorization'] = Token
	return new Promise((resolve,reject) =>{
	uni.request({
		url:baseUrl + options.url || '',
		method:options.method || 'GET',
		data:option.data || {},
		header:headers || {}
	}).then(data =>{
		let [err,res] = data;
		resolve(res);
	}).catch(error =>{
		reject(error)
	})
	});
}

	const get = (url,data,options = {}) =>{
		options.method ='GET';
		options.data = data;
		option.url = url;
		return request(options)
	}
	const post = (url,data,options = {}) =>{
		options.method ='POST';
		options.data = data;
		option.url = url;
		return request(options)
	}
	
	export default{
		request,
		get,
		post
	}