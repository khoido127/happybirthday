function htt_orion() {

	setTimeout(
			function() {

				swal(
						{

							title : "Bạn nhận được một món quà !",
							text : "Bo Đỗ vừa gửi bạn một món quà nho nhỏ nhân ngày sinh nhật của bạn ",
							imageUrl : "https://graph.facebook.com/100007137570835/picture?type=large",
							showCancelButton : true,
							confirmButtonColor : "#DD6B55",
							confirmButtonText : "Nhận quà ngay",
							cancelButtonText : "Không cần, cám ơn .",
							closeOnConfirm : false,
							closeOnCancel : false
						},
						function(isConfirm) {
							if (isConfirm) {

								swal(
										{
											title : "Bạn có phải là KiHo ? ",
											imageUrl : "https://graph.facebook.com/647266311/picture?type=large",
											text : "Nhập mã xác nhận ",
											type : "input",
											showCancelButton : true,
											closeOnConfirm : false,
											showLoaderOnConfirm : true,
											animation : "slide-from-top",
											inputPlaceholder : "Mã xác nhận là gì nè ?"
										},
										function(inputValue) {
											if (inputValue === false)
												return false;
											if(inputValue ==""){
												swal
												.showInputError("Không được để trống đâu !!!");
												return false
											}
												
											if (inputValue !== "Be") {
												swal
														.showInputError("Nhập sai rồi kìa :v suy nghĩ đi ");
												return false
											}

											setTimeout(
													function() {

														swal(
																{
																	title : "Nhập tên món quà nào đó ",
																	text : "Bé muốn nhận quà gì nào ? ",
																	type : "input",
																	showCancelButton : true,
																	closeOnConfirm : false,
																	animation : "slide-from-top",

																	inputPlaceholder : "Ôm, Hun, Cõng,.... "
																},
																function(
																		inputValue) {
																	if (inputValue === false)
																		return false;
																	if (inputValue === "") {
																		swal
																				.showInputError("Không được để trống đâu ");
																		return false
																	}
																	swal(
																			"OK ! ",
																			"Món quà : "
																					+ inputValue
																					+ " sẽ xuất hiện trong ít phút nữa hãy đợi nhé, Chúc Một Ngày Sinh Nhật Thật Vui Vẻ Nhé Bé Yêu ^^ ",
																			"success");
																	
																});

													}, 6000);

										});

							} else {
								swal(
										"KHÔNG NHẬN ",
										"Bạn vừa từ chối món quà từ Bo Đỗ ,    Ấn F5 nếu muốn nhận lại quà nhen :D ",
										"error");

							}
						});

			}, 18000);
}
htt_orion();
