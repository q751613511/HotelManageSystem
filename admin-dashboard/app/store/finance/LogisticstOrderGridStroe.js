Ext.define('Admin.store.finance.LogisticstOrderGridStroe', {
    extend: 'Ext.data.Store',
    
    alias: 'store.logisticstOrderGridStroe',
    storeId:'logisticstOrderGridStroe',
	model:'Admin.model.finance.LogisticstOrderModel',

    proxy: {
        // type: 'memory', 	//内存代理
        type: 'rest',
        url: '/logisticstOrder',	//mvc url  xxx.json
	    reader:{
	    	type:'json',	
	    	rootProperty:'content',//对应后台返回的结果集名称
	    	totalProperty: 'totalElements'//分页需要知道总记录数
	    },
	    writer: {
			type: 'json'
		},
		simpleSortMode: true	//简单排序模式
    },

    autoLoad: 'true',
    autoSync: true,//连后台后修改sotre数据自动触发rest请求

    remoteSort: true,//全局排序  
    pageSize: 25,
    
    sorters: {
        direction: 'DESC',
        property: 'logisticstOrderId'
    }
});
