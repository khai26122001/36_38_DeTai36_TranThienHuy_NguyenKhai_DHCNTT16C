$(document).ready(function(){
    $("#chuyensinh").click(function () {
        $("#0").hide();
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
        $("#4").hide();
        $("#5").hide();
        $("#6").hide();
        $("#7").hide();
        $("#8").hide();
        $("#9").hide();
        $("#10").show();
        $("#11").show();
        $("#12").show();
        $("#13").show();
        $("#14").show();
        $("#15").show();
        $("#16").show();
        $("#17").show();
        $("#18").show();
        $("#19").show();
        $("#20").show();
        $("#22").show();
        $("#23").show();
        $("#24").show();
        $("#25").show();
        $("#26").show();
        $("#27").show();
      });
      $("#tienhiep").click(function () {
        $("#0").hide();
        $("#1").show();
        $("#2").hide();
        $("#3").show();
        $("#4").hide();
        $("#5").show();
        $("#6").hide();
        $("#7").show();
        $("#8").hide();
        $("#9").show();
        $("#10").hide();
        $("#11").show();
        $("#12").hide();
        $("#13").show();
        $("#14").hide();
        $("#15").show();
        $("#16").hide();
        $("#17").show();
        $("#18").hide();
        $("#19").show();
        $("#20").hide();
        $("#22").show();
        $("#23").hide();
        $("#24").show();
        $("#25").hide();
        $("#26").show();
        $("#27").hide(); 
      });
      $("#vothuat").click(function () {
        $("#0").hide();
        $("#1").hide();
        $("#2").show();
        $("#3").hide();
        $("#4").hide();
        $("#5").show();
        $("#6").hide();
        $("#7").hide();
        $("#8").show();
        $("#9").hide();
        $("#10").hide();
        $("#11").show();
        $("#12").hide();
        $("#13").hide();
        $("#14").show();
        $("#15").hide();
        $("#16").hide();
        $("#17").show();
        $("#18").hide();
        $("#19").hide();
        $("#20").show();
        $("#22").hide();
        $("#23").hide();
        $("#24").show();
        $("#25").hide();
        $("#26").hide();
        $("#27").show();
      });
      $("#dammy").click(function () {
        $("#0").hide();
        $("#1").hide();
        $("#2").show();
        $("#3").hide();
        $("#4").show();
        $("#5").show();
        $("#6").show();
        $("#7").show();
        $("#8").hide();
        $("#9").hide();
        $("#10").hide();
        $("#11").hide();
        $("#12").hide();
        $("#13").show();
        $("#14").show();
        $("#15").show();
        $("#16").show();
        $("#17").show();
        $("#18").show();
        $("#19").show();
        $("#20").show();
        $("#22").hide();
        $("#23").hide();
        $("#24").hide();
        $("#25").hide();
        $("#26").hide();
        $("#27").hide();
      });
      $("#banchaynhat").click(function () {
        $("#0").hide();
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
        $("#4").hide();
        $("#5").hide();
        $("#6").hide();
        $("#7").hide();
        $("#8").hide();
        $("#9").hide();
        $("#10").show();
        $("#11").show();
        $("#12").show();
        $("#13").show();
        $("#14").hide();
        $("#15").hide();
        $("#16").hide();
        $("#17").hide();
        $("#18").hide();
        $("#19").hide();
        $("#20").hide();
        $("#22").hide();
        $("#23").hide();
        $("#24").hide();
        $("#25").hide();
        $("#26").hide();
        $("#27").hide();
        });

        $("#doanhthucaonhat").click(function () {
          $("#0").hide();
          $("#1").hide();
          $("#2").hide();
          $("#3").show();
          $("#4").hide();
          $("#5").hide();
          $("#6").hide();
          $("#7").hide();
          $("#8").hide();
          $("#9").hide();
          $("#10").hide();
          $("#11").show();
          $("#12").hide();
          $("#13").hide();
          $("#14").hide();
          $("#15").hide();
          $("#16").show();
          $("#17").hide();
          $("#18").hide();
          $("#19").hide();
          $("#20").hide();
          $("#22").show();
          $("#23").hide();
          $("#24").hide();
          $("#25").hide();
          $("#26").hide();
          $("#27").hide(); 
          });
      
      $('[data-text]').on('keyup', function(){
        $(this).attr('data-text', $(this).text());
      });
      

function KTMK() {
  let mauKT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if ($("#txtMK").val() == "") {
    $("#tbMK").html("Không để trống");
    return false;
  }
  if (!mauKT.test($("#txtMK").val())) {
    $("#tbMK").html("* Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số");
    return false;
  }
  $("#tbMK").html("*");
  return true;
}
$("#txtMK").blur(KTMK);


function KTXNMK(){
  if($("#txtKTMK").val() !=$("#txtMK").val()) {
      $("#tbKTMK").html( "* phải giống ô mật khẩu");
      return false;
  } else{
    $("#tbKTMK").html("*");
      return true;
  } 
}
$("#txtKTMK").blur(KTXNMK);

$("#btndk").click(function(){
  alert("BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG")
});
$("#btndn").click(function(){
  alert("BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG")
});

function kiemTraTen() {
   
    let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if ($("#txtUsername").val() == "") {
      $("#Username").html("Không để trống");
      return false;
    }
    if (!mauKT.test($("#txtUsername").val())) {
      $("#Username").html("* Mỗi ký tự đầu viết hoa không sử dụng số");
      return false;
    }
    $("#Username").html("*");
    return true; 
  }
  $("#txtUsername").blur(kiemTraTen);


  $("#a1").click(function(){
    $("#b1").modal();
  });
  $("#a2").click(function(){
    $("#b2").modal();
  });
  $("#a3").click(function(){
    $("#b3").modal();
  });
  $("#a4").click(function(){
    $("#b4").modal();
  });
  $("#a5").click(function(){
    $("#b5").modal(); 
  });
  $("#a6").click(function(){
    $("#b6").modal();
  });
  $("#a7").click(function(){
    $("#b7").modal();
  });
  $("#a8").click(function(){
    $("#b8").modal();
  });
  $("#a9").click(function(){
    $("#b9").modal();
  });
  $("#a10").click(function(){
    $("#b10").modal();  
  });
  $("#a11").click(function(){
    $("#b11").modal();
  });
  $("#a12").click(function(){
    $("#b12").modal();
  });
  $("#a13").click(function(){
    $("#b13").modal();
  });
  $("#a14").click(function(){
    $("#b14").modal();
  });
  $("#a15").click(function(){
    $("#b15").modal(); 
  });
  $("#a16").click(function(){
    $("#b16").modal();
  });
  $("#a17").click(function(){
    $("#b17").modal();
  });
  $("#a18").click(function(){
    $("#b18").modal();
  });
  $("#a19").click(function(){
    $("#b19").modal();
  });
  $("#a20").click(function(){
    $("#b20").modal();  
  }); 
  $("#a21").click(function(){
    $("#b21").modal();
  });
  $("#a22").click(function(){
    $("#b22").modal();
  });
  $("#a23").click(function(){
    $("#b23").modal();
  });
  $("#a24").click(function(){
    $("#b24").modal();
  });
  $("#a25").click(function(){
    $("#b25").modal(); 
  });
  $("#a26").click(function(){
    $("#b26").modal();
  });
  $("#a27").click(function(){
    $("#b27").modal();
  });
  $("#a28").click(function(){
    $("#b28").modal();
  });
  $("#a29").click(function(){
    $("#b29").modal();
  });
  $("#a30").click(function(){
    $("#b30").modal(); 
  }); 
  $("#a31").click(function(){
    $("#b31").modal();
  });
  $("#a32").click(function(){
    $("#b32").modal();
  });
  $("#a33").click(function(){
    $("#b33").modal();
  });
  $("#a34").click(function(){
    $("#b34").modal();
  });
  $("#a35").click(function(){
    $("#b35").modal(); 
  });
  $("#a36").click(function(){
    $("#b36").modal();
  });
  $("#a37").click(function(){
    $("#b37").modal();
  });
  $("#a38").click(function(){
    $("#b38").modal();
  });
  $("#a39").click(function(){
    $("#b39").modal();
  });
  $("#a40").click(function(){
    $("#b40").modal(); 
  });  
  $("#a41").click(function(){
    $("#b41").modal();
  });
  $("#a42").click(function(){
    $("#b42").modal();
  });
  $("#a43").click(function(){
    $("#b43").modal();
  });
  $("#a44").click(function(){
    $("#b44").modal();
  });
  $("#a45").click(function(){
    $("#b45").modal(); 
  });
  $("#a46").click(function(){
    $("#b46").modal();
  });
  $("#a47").click(function(){
    $("#b47").modal();
  });
  $("#a48").click(function(){
    $("#b48").modal();
  });
  $("#a49").click(function(){
    $("#b49").modal();
  });
  $("#a50").click(function(){
    $("#b50").modal(); 
  }); 
  $("#a51").click(function(){
    $("#b51").modal();
  });
  $("#a52").click(function(){
    $("#b52").modal();
  });
  $("#a53").click(function(){
    $("#b53").modal();
  });
  $("#a54").click(function(){
    $("#b54").modal();
  });
  $("#a55").click(function(){
    $("#b55").modal(); 
  });
  $("#a56").click(function(){
    $("#b56").modal();
  });
  $("#a57").click(function(){
    $("#b57").modal();
  });
  $("#a58").click(function(){
    $("#b58").modal();
  });
  $("#a59").click(function(){
    $("#b59").modal();
  });
  $("#a60").click(function(){
    $("#b60").modal();
  });
  $("#a61").click(function(){
    $("#b61").modal();
  });
  $("#a62").click(function(){
    $("#b62").modal();
  });  
  $("#a63").click(function(){
    $("#b63").modal();
  });
  $("#a64").click(function(){
    $("#b64").modal();
  });
  $("#a65").click(function(){
    $("#b65").modal(); 
  });
  $("#a66").click(function(){
    $("#b66").modal();
  });
  $("#a67").click(function(){
    $("#b67").modal();
  });
  $("#a68").click(function(){
    $("#b68").modal();
  });
  $("#a69").click(function(){
    $("#b69").modal();
  });
  $("#a70").click(function(){
    $("#b70").modal();  
  });
  $("#a71").click(function(){
    $("#b71").modal();
  });
  $("#a72").click(function(){
    $("#b72").modal();
  });
  $("#a73").click(function(){
    $("#b73").modal();
  });
  $("#a74").click(function(){
    $("#b74").modal();
  });
  $("#a75").click(function(){
    $("#b75").modal(); 
  });
  $("#a76").click(function(){
    $("#b76").modal();
  });
  $("#a77").click(function(){
    $("#b77").modal();
  });
  $("#a78").click(function(){
    $("#b78").modal();
  });
  $("#a79").click(function(){
    $("#b79").modal();
  });
  $("#a80").click(function(){
    $("#b80").modal();  
  });
  $("#a81").click(function(){
    $("#b81").modal();  
  });
}); 

 

