function onloadProtocol(page,num){
	$.ajax({
		type:"post",
		url:url_path+"/getProtocol",
		data:{
			//"userId":userId,
			"type":"1",
			"page":page,
			"num":num
		},
		dataType:"json",
		success:function(data){
			//protocolNum(data,num);
			protocols_success(data);
			
		},
		error:function(){
		}

	});
}

function onloadonloadProtocolUsers(page,num){
	$.ajax({
		type:"post",
		url:url_path+"/getTerminalUser",
		data:{
			"page":page,
			"num":num
		},
		dataType:"json",
		success:function(data){
		
			UsersSuccess(data);
		},
		error:function(){}
	});
}
function onloadonloadProtocolUsers2(page,num){
	$.ajax({
		type:"post",
		url:url_path+"/getTerminalUser",
		data:{
			"page":page,
			"num":num
		},
		dataType:"json",
		success:function(data){
		
			UsersSuccess2(data);
		},
		error:function(){}
	});
}


function searchData(){
	var dataArray = {};
	//dataArray.userId = sessionStorage.getItem("userId");
	dataArray.type = "1";
	dataArray.page="1";
	dataArray.num="10";
	if($(".search-input1").val()!==""){
		dataArray.customerName = returnCustomerName(".search-input1");
	}
	if($(".search-input2").val()!==""){
		
		dataArray.startTime =startDate(".search-input2")
	}
	if($(".search-input22").val()!==""){
		dataArray.endTime =startDate(".search-input22")
	}
	if($(".search-input3").val()!=="" && $(".search-input3").attr("id")!==""){
		dataArray.userId = $(".search-input3").attr("id");
	}
	console.log(dataArray);
	$.ajax({
		type:"post",
		url:url_path+"/getProtocol",
		data:dataArray,
		dataType:"json",
		success:function(data){
			protocols_success(data);
		},
		error:function(err){
		}
	});
}





function searchData2(){
	var dataArray = {};
	dataArray.userId = sessionStorage.getItem("userId");
	dataArray.type = "1";
	dataArray.page="1";
	dataArray.num="10";
	if($(".search-input1").val()!==""){
		dataArray.customerName = $(".search-input1").val();
	}
	if($(".search-input2").val()!==""){
		var startDate2 = $(".search-input2").val();
		var dateArray = startDate2.split("-");
		var startDate = dateArray[2]+"-"+ dateArray[1]+"-"+dateArray[0];
		dataArray.startTime = startDate;
	}
	if($(".search-input22").val()!==""){
		var endDate2 = $(".search-input22").val();
		var dateArray2 = endDate2.split("-");
		var endDate = dateArray2[2]+"-"+ dateArray2[1]+"-"+dateArray2[0];
		dataArray.endTime = endDate;
	}

	console.log(dataArray);
	$.ajax({
		type:"post",
		url:url_path+"/getDeliveryNote",
		data:dataArray,
		dataType:"json",
		success:function(data){
			deliveryNotes_success(data)
		},
		error:function(err){
		}
	});
}

function onloadDeliveryNote(page,num){
	$.ajax({

		type:"post",

		url:url_path+"/getDeliveryNote",

		data:{

			//"userId":userId,

			//"type":"1",

			"page":page,

			"num":num

		},

		dataType:"json",

		success:function(data){
			deliveryNotes_success(data);
			console.log(data)
		},

		error:function(){}
	})
}
