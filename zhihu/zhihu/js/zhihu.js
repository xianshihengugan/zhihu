$(function(){
  $('body').on('click','.tab_label',function () {
    // 初始化当前被点击dom节点对象
    var a = $(this)
    // 如果被点击节点为未选中状态，方可执行切换
    if (!a.is('.active')) {
      $('.tab_label').removeClass('active')
      a.addClass('active')
      if (a.is('#label1')) {
        // 点击的是注册tab
        $('.navs-slider').removeAttr('data-active-index')
        $('.tab_one').show()
        $('.tab_two').hide()
      } else {
        // 点击的是登录tab
        $('.navs-slider').attr('data-active-index',1)
        $('.tab_one').hide()
        $('.tab_two').show()
        $('.vvv').hide()
        $('.qrcode-container').show()
        $('.vvv_a').show()
          $('.vvv_b').hide()
      }
    }
  })
})
$(function(){
    $('body').on('click','.switch-password',function(){
        var a = $(this)
        $('.switch-password').removeClass('active')
        a.addClass('active')
        if(a.is('.switch-password')){
            $('.vvv').show()
            $('.qrcode-container').hide()
        }
    })
    $('body').on('click','.erweima',function(){
        var a = $(this)
        $('.erweima').removeClass('active')
        a.addClass('active')
        if(a.is('.erweima')){
            $('.vvv').hide()
            $('.qrcode-container').show()
        }
    })
})
$(function(){
    $('body').on('click','.shoujiyanzhengma',function(){
        var a = $(this)
        $('.shoujiyanzhengma').removeClass('active')
        a.addClass('active')
        if(a.is('.shoujiyanzhengma')){
            $('.vvv_b').show()
            $('.vvv_a').hide()
        }
    })
    $('body').on('click','.passworddenglu',function(){
        var a = $(this)
        $('.passworddenglu').removeClass('active')
        a.addClass('active')
        if(a.is('.passworddenglu')){
            $('.vvv_b').hide()
            $('.vvv_a').show()
        }
    })
})
$(function(){
    $('body').on('click','.download-zhihuapp',function(){
        var a = $(this)
        $('.download-zhihuapp').removeClass('active')
        a.addClass('active')
        if(a.is('.download-zhihuapp')){
            $('.close-code').show()
            $('.download-zhihuapp').hide()
            $('.QRCode-card').show()
        }
    })
})
$(function(){
    $('body').on('click','.download-zhihuapp',function(){
        var a = $(this)
        $('.download-zhihuapp').removeClass('active')
        a.addClass('active')
        if(a.is('.download-zhihuapp')){
            $('.close-code').show()
            $('.download-zhihuapp').hide()
            $('.QRCode-card').show()
        }
    })
})
$(function(){
    $('body').on('click','.close-code',function () {
        var a = $(this)
        $('.close-code').removeClass('active')
        a.addClass('active')
        if(a.is('.close-code')){
            $('.close-code').hide()
            $('.download-zhihuapp').show()
            $('.QRCode-card').hide()
        }
    })
})
$("#email").blur(
    function(){
        var Email  = $("#email").val();
        if (Email === "" ){
            alert("邮箱不能为空");
            return Email;
        }
        $.post('http://manager.zsm-ubuntu.dev/user-exists',
            {email: email.value},
            function (result) {
                if (result.code === true){
                    alert("用户已存在，可以登录。");
                } else {
                    /*alert("对不起，暂无该用户邮箱");*/
                }
            }, 'json')
    }
);