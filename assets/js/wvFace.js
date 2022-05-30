$(function(){
  $( ".drag" ).draggable({
    cursor: "move",

  });
  $( ".drag" ).disableSelection();

  $('#faceHeader .subjectTitle').hover(function() {
    $(this).parent().toggleClass('on');
  });


  // 브레이크아웃룸 유저 셀렉트
  $('.sutdenBox li > ul > li > a').mousedown(function(ev){
    $(this).toggleClass('on');
  });
  $( "#sortable1 , #sortable2, #sortable3,  #sortable4,  #sortable5,  #sortable6,  #sortable7,  #sortable8" ).sortable({
    connectWith: 'ul',
    dropOnEmpty: true,
  });

  $( ".borPopup" ).draggable({
    handle: ".hed",
    cursor: "move",
    //cursorAt: { top: '100px'}
  });
  $( ".studyStatusPopup" ).draggable({
    handle: ".hed",
    cursor: "move",
    //cursorAt: { top: '100px'}
  });
  $( ".displayshare" ).draggable({
    handle: ".hed",
    cursor: "move",
    //cursorAt: { top: '100px'}
  });

  $( ".layerPopup" ).draggable({
    handle: ".hed",
    cursor: "move",
    drag: function() {
      $(this).addClass("draged");
    },
    stop: function() {
      $(this).addClass("draged");
    }
  });

  $( ".borPopup" ).disableSelection();
  var contentW = 1024;

  if($(window).width() <= contentW){
    wvFace.gnbArea = false;
    $("#faceLayout").removeClass("gnbOn");
  }else {
    wvFace.gnbArea = true;
    $("#faceLayout").addClass("gnbOn");
  }


  wvFace.setting(); //최초 시작 script

});

var pageWs;
var pageHs;
var listH;
$(window).on("load",function(){
  pageWs = $(window).width();
  pageHs = $(window).height();
  listH = $(".menuList ul").height();

  $(".studenListBox").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,

  });
  $(".classUSerList").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
    $(".generSettingBox").mCustomScrollbar({
        axis: "y",
        scrollbarPosition: "inside",
        autoHideScrollbar: true,

    });

    $("#classInfo").mCustomScrollbar({
        axis: "y",
        scrollbarPosition: "inside",
        autoHideScrollbar: true,
    });
  $(".chattingTak").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".srbinListB").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".surveyCCListBoxIn").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $(".surCusListBoxIn").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".sureditLay").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".referList").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".boRListoBox").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".studyStaTable").mCustomScrollbar({
    axis: "x",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $(".allScreenBox").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".hotkeyTable").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $("#waitingRoom ").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $(".restArea").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,

  });

  $("#surveyResultList").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  // $(".menuList").mCustomScrollbar({
  //   axis: "x",
  //   scrollbarPosition: "inside",
  //   autoHideScrollbar: true,
  // });

  $(".menuList").mousewheel(function(event, delta) {
    if(pageWs < 1024) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
    }
 });

  $('#noteBox .toolbarBox > ul > li a').hover(function() {
    $('.tagHv').hide();
    $(this).next().show();
  });

  $('#noteBox .toolbarBox > ul').mouseleave(function(){
    $('.tagHv').hide();
  });

  if((pageHs-210) < listH) {
    $('.menuList').css({ 'height': (pageHs - 210) + 'px' });
  }else {
    $('.menuList').css({ 'height': 'auto' });
  }

  if(pageWs < 1024) {
    $('.menuList').addClass('menuListMb');
    $('.menuList.menuListMb').css({ 'height': 55 + 'px' });
  }else {
    $('.menuList').removeClass('menuListMb');
  }

});

$(window).resize(function(){
  pageWs = $(window).width();
  pageHs = $(window).height();
  listH = $(".menuList ul").height();

  //if($("#faceAllBox").hasClass("on")) wvFace.faceAllS();


  var contentW = 1024;

  if($(window).width() <= contentW){
    wvFace.gnbArea = false;
    $("#faceLayout").removeClass("gnbOn");

  }else {
    wvFace.gnbArea = true;
    $("#faceLayout").addClass("gnbOn");
  }

  $(".studenListBox").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,

  });
  $(".classUSerList").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".chattingTak").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".srbinListB").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".surCusListBoxIn").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".sureditLay").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".referList").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".boRListoBox").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".studyStaTable").mCustomScrollbar({
    axis: "x",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $(".allScreenBox").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });
  $(".hotkeyTable").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $("#waitingRoom ").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $("#surveyResultList").mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
  });

  $(".menuList").mousewheel(function(event, delta) {
    if(pageWs < 1024) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
    }
 });

  if((pageHs-210) < listH) {
    $('.menuList').css({ 'height': (pageHs - 210) + 'px' });
  }else {
    $('.menuList').css({ 'height': 'auto' });
  }

  if(pageWs < 1024) {
    $('.menuList').addClass('menuListMb');
    $('.menuList.menuListMb').css({ 'height': 55 + 'px' });
  }else {
    $('.menuList').removeClass('menuListMb');
  }

});

wvFace = {
  gnbArea :true,
  leftArea : false,
  rightArea : false,
  faceAll : false,
  videoView : true,
  gnbMenu : false
};
wvFace.setting = function(){
  var dataTarget;
  wvFace.randerS();

  // gnb > 메뉴버튼
  $('a[data-target="gnbMB"]').on("click",function(){ wvFace.gnbMBox();});

  //gnb > 강의정보 on & off
  $('a[data-target="clasInfo"]').on("click",function(){
    wvFace.clasInfoBox();
    $('.layerPopup').fadeOut();
    $('.popupLayout').removeClass('on');
  });

  // gnb >  참석자 리스트
  $("a[data-target='classUser']").on("click",function(){
    wvFace.classUser();
    $('.layerPopup').fadeOut();
    $('.popupLayout').removeClass('on');
  });

  // gnb > 참석자 camera mic 설정
  $('#classUser .userCSet a ').on('click',function(){
    $(this).parent().parent().find("a").removeClass('on');
    $(this).addClass('on');
  });

  // gnb > 채팅
  $("a[data-target='chattingBox']").on("click",function(){
    wvFace.chattingBox();
    $('.layerPopup').fadeOut();
    $('.popupLayout').removeClass('on');
  });

  //gnb >  채팅 세팅
  $('a[data-target="chatSeting"]').on('click',function(){
    $(this).toggleClass('on');
    var setlist = $(this).next('.settingList');
    if($(this).hasClass('on')){
      setlist.addClass('on');
    }else{
      setlist.removeClass('on');
    }
  });
  //gnb > 채팅 imoticon
  $('.chatTakBtn.imobtn').on('click',function(){
    // $(this).toggleClass('on');
    // if($('.chatTakBtn.imobtn').hasClass('on')){
    //   $('#chattingBox .imo').slideDown();
    //   $('.talkMeTextArea').addClass('on');
    // }else{
    //   $('#chattingBox .imo').slideUp();
    //   $('.talkMeTextArea').removeClass('on');
    // }
  });

  // gnb > 설문
  $('a[data-target="classSurvey"]').on("click",function(){
    wvFace.surveyBox();
  });

  //  gnb > 설문 추가 > 설문 리스트 변경
  $('a[data-target="surveyBoxBtn"]').on("click",function(){
    $(this).toggleClass('on');
    if($(this).hasClass('on')){
      $('#surveyBox .set > .setIn > .icon').removeClass('icon-addlight');
      $('#surveyBox .set > .setIn > .icon').addClass('icon-listBtn');
      //$('#surveyBox .set > .setIn > .txt').text('설문목록');
     }else{
      $('#surveyBox .set > .setIn > .icon').removeClass('icon-listBtn');
      $('#surveyBox .set > .setIn > .icon').addClass('icon-addlight');
      //$('#surveyBox .set > .setIn > .txt').text('설문작성');
     }
  });
  // 설문결과 공유 클릭시 > 설문공유 팝업
  $('.surveyBtnBox.share a').on("click",function(){
    $('.popupLayout').addClass('on');
    $('#surveyBox').removeClass('on');
    $('a[data-target="classSurvey"]').removeClass('on');
    $('.layerPopup.surveyResult').fadeIn(function(){
      $('.borPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.borGeneraPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.displayshare').fadeOut(function(){
        $('a[data-target="displayshare"]').removeClass('on');
      });
      $('.recording.recStart').fadeOut(function(){
        $('a[data-target="recoBtn"]').removeClass('on');
      });
      $('.recording.recoStop').fadeOut(function(){});
      $('.studyStatusPopup').fadeOut(function(){
        $('a[data-target="studyStatus"]').removeClass('on');
      });
      $('.hotkeyPopup').fadeOut(function(){
        $('.hotkeyBtn').removeClass('on');
      });
      $('.btnSettingList.camera').fadeOut(function(){});
      $('.btnSettingList.mic').fadeOut(function(){});
      $('.contentLayout').removeClass('leftArea');
    });
  });
  // 설문결과 > 닫기
  $('.layerPopup.surveyResult .closeBtn').on('click',function(){
    $(this).parent().parent().parent().fadeOut();
    $('.popupLayout').removeClass('on');
  });

  //gnb > 자료실 on&off
  $('a[data-target="referRoomArrow"]').on("click",function(){
    wvFace.referenceRoom();
    $('.layerPopup').fadeOut();
    $('.popupLayout').removeClass('on');
  });
  //gnb > 일반설정 on&off
  $('a[data-target="generSettingArrow"]').on("click",function(){
    wvFace.generSet();
  });
  //gnb > 강의설정 on&off
  $('a[data-target="lectureSettingArrow"]').on("click",function(){
    wvFace.lectureSet();
  });
  //noteBox
  $("a[data-target='noteBox']").on("click",function(){
    //wvFace.noteBox();
  });

  // gnb > 질의응답
  $("a[data-target='qaCont']").on("click",function(){
    wvFace.qaBox();
  });


  //발표자 > "손을 흔들었습니다."
  $('a[data-target="hands"]').on("click",function(){
    //wvFace.handsShaking();
  });
  // faceListBox
  $(".faceListButtonBox button[data-target='faceListBox']").on("click",function(){
    wvFace.faceListBox();
  });

  //faceAllBox(grid)
  $(".faceListButtonBox button[data-target='faceAllBox']").on("click",function(){
    wvFace.faceAllBox();
  });
  // video 셋팅버튼 > grid, faceListBox
  $(".faceAllList li .videoSetting, .faceTeacher .videoSetting").on("click",function(){
    var thisOn = $(this).next('.videoSetBg');
    if(thisOn.hasClass('on')){
      thisOn.removeClass('on');
     }else{
      $(".faceAllList li").find('.videoSetBg').removeClass('on')
      thisOn.addClass('on');
     }
  });

  //gnb > 브레이크아웃룸 팝업
  $('#gnbBox a[data-target="breakOutRoom"]').on("click",function(){
    //wvFace.breakeOutRRoomPop();
  });

  // 브레이크아웃룸 팝업 취소, 닫기 버튼 클릭시
  $('.borPopup.layerPopup .closeBtn, .borPopup.layerPopup .cancel').on("click",function(){
    setTimeout(function() {
      $('.layerPopup').removeClass('draged');
    }, 500);
     $('.borPopup.layerPopup').fadeOut(function(){
       $('.popupLayout').removeClass('on');
     });
     $('a[data-target="breakOutRoom"]').removeClass('on');
  });
  // 브레이크아웃룸 팝업 생성 클릭 > 참여 브레이크아웃룸 선택 팝업
  $('.borPopup.layerPopup .starBtn').on("click",function(){
    //wvFace.borGeneraPopup();
  });

  $('.borGeneraPopup.layerPopup .closeBtn, .borGeneraPopup.layerPopup .cancel').on("click",function(){
    wvFace.borGeneraPopupClose();
  });

  // 브레이크아웃룸 팝업 생성 클릭 > 참여 > gnb 브레이크 아웃룸 나타남
  $('.borGeneraPopup.layerPopup .starBtn').on("click",function(){
    //wvFace.breakeOutRoomBox();
  });
  // gnb >  브레이크 아웃룸
  $('a[data-target="breakout"]').on('click',function(){
    wvFace.breakeOutRoomBoxClose();
  });

  //학습현황 팝업
  $('#gnbBox a[data-target="studyStatus"]').on("click",function(){
    wvFace.studyStatus();
  });
  // 학습현황 팝업 닫기
  $('.studyStatusPopup.layerPopup .closeBtn, .studyStatusPopup.layerPopup .cancel').on("click",function(){
    wvFace.studyStatusClose();
  });
  //학습현황 팝업 tab
  $('.studyStaTab ul li a').on("click",function(){
    $('.studyStaTab ul li a').removeClass('on');
    $(this).addClass('on');

    var idx = $(this).parent().index();

    $(".studyStaCon").removeClass('on');
    $(".studyStaCon").eq(idx).addClass('on');
  });

  // gnb > 자료실
  $('#gnbBox a[data-target="referenceRoom"]').on("click",function(){
    wvFace.referenceRoom();
    $('.layerPopup').fadeOut();
    $('.popupLayout').removeClass('on');
  });

  // gnb > 자료실 > 자료실 리스트, 자료목록 보기
  $('a[data-target="referlist"]').on("click",function(){
    $(this).toggleClass('on');
    if($(this).hasClass('on')){
      $('#referenceRoom .set > .setIn > .icon').removeClass('icon-addlight');
      $('#referenceRoom .set > .setIn > .icon').addClass('icon-listBtn');

     }else{
      $('#referenceRoom .set > .setIn > .icon').removeClass('icon-listBtn');
      $('#referenceRoom .set > .setIn > .icon').addClass('icon-addlight');

     }
  });

  // gnb > 일반설정
  $('#gnbBox a[data-target="generSet"]').on("click",function(){
    wvFace.generSet();
    $('.layerPopup').fadeOut();
    $('.popupLayout').removeClass('on');
  });
  // gnb > 일반설정 딛기
  $('a[data-target="generSettingArrow"]').on("click",function(){
    //wvFace.generSet();
  });
  // gnb > 강의설정
  $('#gnbBox a[data-target="lectureSet"]').on("click",function(){
    wvFace.lectureSet();
  });
  // gnb > 강의설정 닫기
  $('a[data-target="lectureSettingArrow"]').on("click",function(){
    wvFace.lectureSetClose();
  });

// 하단 버튼 > on/off
 $('.btnBoxIn a.bbt').on("click",function(){
    $(this).toggleClass('on');
  });
// 하단 버튼 > 화면공유 팝업
  $('#btnBox a[data-target="displayshare"]').on("click",function(){
    //wvFace.displayshare();
    $('.breakRoomBox').removeClass('on');

  });
  // 하단 버튼 > 화면공유 팝업 > 컨텐츠 탭 영역
  $('.popupTab ul li a').on("click",function(){
    $('.popupTab ul li a').removeClass('on');
    $(this).addClass('on');

    var idx = $(this).parent().index();

    $(".popupTabCon").removeClass('on');
    $(".popupTabCon").eq(idx).addClass('on');

  });

  //하단 버튼> 화면공유 팝업  > 화면 탭
  $('.allScreenBox li').on('click',function(){
    $('.allScreenBox li').removeClass('on');
    $(this).addClass('on');
  });

  // 하단 버튼 > 화면공유 팝업 닫기
  $('.displayshare.layerPopup .closeBtn, .displayshare.layerPopup .cancel, .displayshare.layerPopup .starBtn.re').on("click",function(){
    wvFace.displaysharePopupClose();
  });



  //하단 버튼 > 화면녹화 팝업
  $('#btnBox a[data-target="recoBtn"]').on("click",function(){
    wvFace.recodingOnOff();
  });

  $('.faceRecognition').on('click',function(){
    //$(this).toggleClass('on');
  });
  //하단 버튼 > 화면녹화 팝업 닫기
  $('.recording.recStart .closeBtn, .recording.recStart .cancel').on('click',function(){
    $(this).parent().parent().parent().fadeOut(function(){
      $('#btnBox a[data-target="recoBtn"]').removeClass('on');
      $('.popupLayout').removeClass('on');
      $('.recording.recStart').css({ 'left':'50%', 'top':'50%'});
    });
  });
  // 하단버튼 > 화면녹화 시작 상단 안내
  $('.recording.recStart .starBtn').on('click',function(){
    $('#recodingStatus').fadeIn();
    $(this).parent().parent().parent().fadeOut(function(){
      $('.popupLayout').removeClass('on');
      $('.recording.recStart').css({
        'left':'50%',
        'top':'50%'
      });
    });

  });
  // 하단버튼 > 화면녹화 중지 안내 팝업
  $('#recodingStatus .recoStopB').on('click',function(){
    $('.breakRoomBox').removeClass('on');
    $('.layerPopup.recording.recoStop').fadeIn(function(){
      $('.popupLayout').addClass('on');

      $('.borPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.borGeneraPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.displayshare').fadeOut(function(){
        $('a[data-target="displayshare"]').removeClass('on');
      });
      $('.studyStatusPopup').fadeOut(function(){
        $('a[data-target="studyStatus"]').removeClass('on');
      });
      $('.hotkeyPopup').fadeOut(function(){
        $('.hotkeyBtn').removeClass('on');
      });
      $('.btnSettingList.camera').fadeOut(function(){
        $('.btnSetting.camera').removeClass('on');
      });
      $('.btnSettingList.mic').fadeOut(function(){
        $('.btnSetting.mic').removeClass('on');
      });

    });
  });
  // 하단버튼 > 화면녹화 중지 안내 팝업 닫기
  $('.recording.recoStop .cancel, .recording.recoStop .closeBtn').on('click',function(){
    $(this).parent().parent().parent().fadeOut(function(){
      $('.popupLayout').removeClass('on');
      $('.recording.recoStop').css({
        'left':'50%',
        'top':'50%'
      });
    });
  });
  // 하단버튼 > 화면녹화 중지 안내 팝업 녹화중지
  $('.recording.recoStop .starBtn.re').on('click',function(){
    $(this).parent().parent().parent().fadeOut(function(){
      $('.popupLayout').removeClass('on');
      $('.recording.recoStop').css({
        'left':'50%',
        'top':'50%'
      });
    });
    $('.breakRoomBox').removeClass('on');
    $('#recodingStatus').fadeOut(function(){
      $('#btnBox a[data-target="recoBtn"]').removeClass('on');
    });
  });

  /* 하단 버튼 마이크,카메라 세팅 버튼  */
  $('.deviceList.mic li .label').on('click',function(){
    $('.deviceList.mic li .label').parent().parent().removeClass('on');
    $(this).parent().parent().addClass('on');
  });
  $('.deviceList.speak li .label').on('click',function(){
    $('.deviceList.speak li .label').parent().parent().removeClass('on');
    $(this).parent().parent().addClass('on');
  });
  $('.deviceList.rce li .label').on('click',function(){
    $('.deviceList.rce li .label').parent().parent().removeClass('on');
    $(this).parent().parent().addClass('on');
  });
  $('.btnSettingList.mic .micAnnounce').on('click',function(){
    var userNam ;
    $('.btnSettingList.mic').fadeOut(function(){
        $('.btnSetting.mic').removeClass('on');
      }
    );
    $('.presenterAletBox').text('마이크 사용을 요청하였습니다.')
    $('#presenterAlert').fadeIn();
    setTimeout(function(){
      $('#presenterAlert').fadeOut();
    },3000);
  });
  $('.btnSettingList.camera .micAnnounce').on('click',function(){
    var userNam ;
    $('.btnSettingList.camera').fadeOut(function(){
      $('.btnSetting.camera').removeClass('on');
    }
    );
    $('.presenterAletBox').text('카메라 사용을 요청하였습니다.')
    $('#presenterAlert').fadeIn();
    setTimeout(function(){
      $('#presenterAlert').fadeOut();
    },3000);
  });

  $('.btnSetting').on('click',function(){

    $(this).toggleClass('on');

    if($(this).hasClass('on')){
      $('.breakRoomBox').removeClass('on');
      if($(this).hasClass('mic')){
        $('.btnSettingList.mic').fadeIn(function(){
          $('.borPopup').fadeOut(function(){
            $('a[data-target="breakOutRoom"]').removeClass('on');
          });
          $('.borGeneraPopup').fadeOut(function(){
            $('a[data-target="breakOutRoom"]').removeClass('on');
          });
          $('.displayshare').fadeOut(function(){
            $('a[data-target="displayshare"]').removeClass('on');
          });
          $('.recording.recStart').fadeOut(function(){
            $('a[data-target="recoBtn"]').removeClass('on');
          });
          $('.recording.recoStop').fadeOut(function(){});
          $('.studyStatusPopup').fadeOut(function(){
            $('a[data-target="studyStatus"]').removeClass('on');
          });
          $('.hotkeyPopup').fadeOut(function(){
            $('.hotkeyBtn').removeClass('on');
          });
        });
        $('.btnSetting.camera').removeClass('on');
      }else {
        $('.btnSettingList.mic').fadeOut();
      }

     if($(this).hasClass('camera')){
      $('.btnSettingList.camera').fadeIn(function(){
        $('.borPopup').fadeOut(function(){
          $('a[data-target="breakOutRoom"]').removeClass('on');
        });
        $('.borGeneraPopup').fadeOut(function(){
          $('a[data-target="breakOutRoom"]').removeClass('on');
        });
        $('.displayshare').fadeOut(function(){
          $('a[data-target="displayshare"]').removeClass('on');
        });
        $('.recording.recStart').fadeOut(function(){
          $('a[data-target="recoBtn"]').removeClass('on');
        });
        $('.recording.recoStop').fadeOut(function(){});
        $('.studyStatusPopup').fadeOut(function(){
          $('a[data-target="studyStatus"]').removeClass('on');
        });
        $('.hotkeyPopup').fadeOut(function(){
          $('.hotkeyBtn').removeClass('on');
        });
      });
      $('.btnSetting.mic').removeClass('on');
     }else {
      $('.btnSettingList.camera').fadeOut();
     }

    }else {
      $('.btnSettingList').fadeOut();
    }
  });

  /* 하단 버튼 마이크,카메라 세팅 버튼  끝*/

  /* white board */
  $('.toolbarBox .selecTool').on('click',function(){
      if($(this).parent().parent().attr("id") != "note_allwork") {
          $(this).parent().parent().toggleClass('on');
      }

      $("#slideListContainer").removeClass("on");
      $('.toolbarBox .slideV_txt').parent().parent().find('.slideViewList').slideUp();

      $('.toolbarBox .selecTool').find('.slideViewList').slideUp();
    if ($(this).parent().parent().hasClass('on')){
        $('.toolbarBox .selecList').each(function() {
            $(this).parent().removeClass("on");
            $(this).slideUp();
        });
        if($(this).parent().parent().attr("id") != "note_allwork") {
            $(this).parent().parent().toggleClass('on');
        }

      $(this).parent().parent().find('.selecList').slideDown();
    }else {
        $('.toolbarBox .selecList').each(function() {
            $(this).parent().removeClass("on");
            $(this).slideUp();
        });
    }
  });
  $('.toolbarBox .slideV_txt').on('click',function(){
      $('.toolbarBox .selecList').each(function() {
          $(this).parent().removeClass("on");
          $(this).slideUp();
      });
    // $(this).parent().parent().toggleClass('on');
    //
    // if ($(this).parent().parent().hasClass('on')){
    //   $('.toolbarBox').find('.slideViewList').slideUp();
    //   $(this).parent().parent().find('.slideViewList').slideDown();
    // }else {
    //   $(this).parent().parent().find('.slideViewList').slideUp();
    // }
  });
  $('.toolbarBoxIn .slideViewList ul li a').on('click',function(){
    var slideText  = $(this).html();
    console.log(slideText);
    $('.slideTxt').html(slideText);
    $(this).parent().parent().parent().slideUp();

    $('.toolbarBoxIn > li').removeClass('on');

  });
  // white board > toolbar pencile weight
  $('.tool li a').on('click',function(){
   $('.tool').slideUp();
   $('.tool').parent().removeClass('on');
   var idx = $(this).html();
    $('.toolSe').html(idx+' <span class="icon-arrowTip tip"></span>')
  });
  // white board > toolbar pencile weight
  $('.pencilWeightList li a').on('click',function(){
    var idx = $(this).parent().index();
    var selc = $(this).parent().parent().parent().prev();
    selc.removeClass();
    selc.addClass('selecToolBox');
    selc.addClass('weight0'+(idx+1));
    selc.addClass($('.pencilWeightList ul').attr('class'));
    $('.pencilWeightList').slideUp();
    $('.pencilWeightList').parent().removeClass('on');

  });
  // white board > toolbar color picker
  $('.colorPick li a').on('click',function(){

    var idx = $(this).parent().index();
    var selc = $(this).parent().parent().parent().prev();
    selc.removeClass();
    selc.addClass('selecToolBox');
    selc.addClass('color0'+(idx+1));
    $('.pencilWeightList').prev().addClass('color0'+(idx+1));
    $('.pencilWeightList ul').removeClass()
    $('.pencilWeightList ul').addClass('color0'+(idx+1));
    $('.colorPick').slideUp();
    $('.colorPick').parent().removeClass('on');
  });
  // white board > toolbar fontsize
  $('.tsizeList li a').on('click',function(){

    var idx = $(this).parent().index();
    var selc = $(this).parent().parent().parent().prev();
    selc.removeClass();
    selc.addClass('selecToolBox');
    selc.addClass('tsize0'+(idx+1));

    $('.tsizeList').slideUp();
    $('.tsizeList').parent().removeClass('on');
  });

  /* waiting room */
  $('.w_btnBox a').on('click',function(){
    $("#waitingRoom").fadeOut();
  });

  $(' .waitingRoomIn .con .cont > ul > li').on('click',function(){
    $(this).parent().find("li").removeClass('on');
    $(this).addClass('on');
    $(this).find('.radio input').prop('checked',true);
  });
  /* waiting room */

  /* 단축키 안내 팝업 */
  $('.hotkeyBtn').on('click',function(){
    wvFace.hotKeyPop();
  });
  $('.layerPopup.hotkeyPopup .closeBtn').on('click',function(){
    wvFace.hotKeyPopClose();
  });

}

// 하단버튼 > 손아이콘 클릭시 > 발표자가 손을 흔들었습니다.
wvFace.handsShaking = function(){
  $('#presenterAlert').fadeIn();

  setTimeout(function(){
    $('#presenterAlert').fadeOut();
    $('a[data-target="hands"]').removeClass('on');
  },3000)
}
// 하단 녹화버튼
wvFace.recodingOnOff = function (){
  var thisN = $('#btnBox a[data-target="recoBtn"]');
  if(thisN.hasClass("on")) {
      thisN.addClass("on");
      $('.layerPopup.recording.recoStopB').fadeIn(function(){
      });
  } else {


      $(".breakRoomBox").removeClass("on");
      $('.layerPopup.recording.recStart').fadeIn(function(){

          $('.displayshare').fadeOut(function(){
              $('a[data-target="displayshare"]').removeClass('on');
          });
          $('.borPopup').fadeOut(function(){
              $('a[data-target="breakOutRoom"]').removeClass('on');
          });
          $('.studyStatusPopup').fadeOut(function(){
              $('a[data-target="studyStatus"]').removeClass('on');
          });
          $('.hotkeyPopup').fadeOut(function(){
              $('.hotkeyBtn').removeClass('on');
          });
          $('.btnSettingList.camera').fadeOut(function(){
              $('.btnSetting.camera').removeClass('on');
          });
          $('.btnSettingList.mic').fadeOut(function(){
              $('.btnSetting.mic').removeClass('on');
          });
      });
  }

  $('.popupLayout').addClass('on');
  wvFace.randerS();

}

// 하단 화면공유
wvFace.displayshare = function(){
  if($('#btnBox a[data-target="displayshare"]').hasClass('on')){
    $('.layerPopup.displayshare').fadeIn(function(){
      $('.popupLayout').addClass('on');

      $('.layerPopup.displayshare').css({ 'left':'50%', 'top':'50%'});
      $('.recording.recStart').fadeOut(function(){
        $('a[data-target="recoBtn"]').removeClass('on');
      });
      $('.recording.recoStop').fadeOut();
      $('.borPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.borGeneraPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.recording.studyStatusPopup').fadeOut(function(){
        $('a[data-target="studyStatus"]').removeClass('on');
      });
      $('.studyStatusPopup').fadeOut(function(){
        $('a[data-target="studyStatus"]').removeClass('on');
      });
      $('.hotkeyPopup').fadeOut(function(){
        $('.hotkeyBtn').removeClass('on');
      });
      $('.btnSettingList.camera').fadeOut(function(){
        $('.btnSetting.camera').removeClass('on');
      });
      $('.btnSettingList.mic').fadeOut(function(){
        $('.btnSetting.mic').removeClass('on');
      });

    });
  }else{
    $('.layerPopup.displayshare').fadeOut(function(){
      $('.popupLayout').removeClass('on');
      $('.layerPopup.displayshare').css({ 'left':'50%', 'top':'50%'});
    });
  }
}

wvFace.displaysharePopupClose = function(){
  $('.layerPopup.displayshare').fadeOut(function(){
    $('.popupLayout').removeClass('on');
    $('.layerPopup.displayshare').css({ 'left':'50%','top':'50%'});
  });
  $('#btnBox a[data-target="displayshare"]').removeClass('on');
}

wvFace.breakeOutRoomBox = function(){
  $('.borGeneraPopup.layerPopup').fadeOut(function(){
    $('.borGeneraPopup.layerPopup').css({ 'left':'50%','top':'50%', 'position':'absolute'});
    $('.popupLayout').removeClass('on');
    $('.breakRoomBox').removeClass('on');
    $("#breakOutRoom").addClass("on");
  });
  var thisN = $('#gnbBox a[data-target="breakOutRoom"]');
  if(thisN.hasClass("on")){
    $("#gnbBox a").removeClass('on');
    $('.gnbCon').removeClass("on");
    $("#breakOutRoom").removeClass("on");
    wvFace.leftArea = true;

  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $("#breakOutRoom").addClass("on");
    wvFace.leftArea = false;
  }
  wvFace.randerS();
}
wvFace.breakeOutRoomBoxClose = function(){
  if($("#breakOutRoom").hasClass("on")){
    $("#breakOutRoom").removeClass("on");
    $("#gnbBox a[data-target='breakOutRoom']").removeClass("on");
    wvFace.leftArea = false;
  }
  wvFace.randerS();
}
wvFace.breakeOutRRoomPop = function (){
  var thisN = $('#gnbBox a[data-target="breakOutRoom"]');

    if(thisN.hasClass("on")){
      thisN.removeClass("on");
      $('.layerPopup.borPopup').fadeOut(function(){
        $('.popupLayout').removeClass('on');
      });
      wvFace.leftArea = true;
    }else{
      $("#gnbBox a").removeClass('on');
      $('.gnbCon').removeClass("on");
      thisN.addClass("on");
      $('.layerPopup.borPopup').fadeIn(function(){
        $('.popupLayout').addClass('on');
        $('.layerPopup.borPopup').css({'left':'50%','top':'50%'});
        $('.recording.recStart').fadeOut(function(){
          $('a[data-target="recoBtn"]').removeClass('on');
        });
        $('.displayshare').fadeOut(function(){
          $('a[data-target="displayshare"]').removeClass('on');
        });
        $('.hotkeyPopup').fadeOut(function(){
          $('.hotkeyBtn').removeClass('on');
        });
        $('.btnSettingList.camera').fadeOut(function(){
          $('.btnSetting.camera').removeClass('on');
        });
        $('.btnSettingList.mic').fadeOut(function(){
          $('.btnSetting.mic').removeClass('on');
        });

      });
      wvFace.leftArea = false;
    }
  wvFace.randerS();

}
wvFace.borGeneraPopup = function (){
  $('.borPopup.layerPopup').fadeOut(function(){
    $('.borPopup.layerPopup').css({'left':'50%','top':'50%','position':'absolute'});
    $('.layerPopup.borGeneraPopup').fadeIn(function(){
      $('.breakRoomBox').addClass('on');
    });
  });
  wvFace.randerS();
}
wvFace.borGeneraPopupClose = function(){
  $('.borGeneraPopup.layerPopup').fadeOut(function(){
    $('.borGeneraPopup.layerPopup').css({ 'left':'50%', 'top':'50%', 'position':'absolute' });
    $('.popupLayout').removeClass('on');
    $('.breakRoomBox').removeClass('on');
  });
  $('#gnbBox a[data-target="breakOutRoom"]').removeClass('on');
}

wvFace.hotKeyPop = function(){
  $('.hotkeyBtn').addClass('on');
  $('.popupLayout').addClass('on');
  $('.breakRoomBox').removeClass('on');

  $('.layerPopup.hotkeyPopup').fadeIn(function(){

    $('.popupLayout').addClass('on');
    $('.borPopup').fadeOut(function(){
      $('a[data-target="breakOutRoom"]').removeClass('on');
    });
    $('.borGeneraPopup').fadeOut(function(){
      $('a[data-target="breakOutRoom"]').removeClass('on');
    });
    $('.displayshare').fadeOut(function(){
      $('a[data-target="displayshare"]').removeClass('on');
    });
    $('.recording.recStart').fadeOut(function(){
      $('a[data-target="displayshare"]').removeClass('on');
    });
    $('.recording.recoStop').fadeOut(function(){});
    $('.studyStatusPopup').fadeOut(function(){
      $('a[data-target="studyStatus"]').removeClass('on');
    });

    $('.btnSettingList.camera').fadeOut(function(){
      $('.btnSetting.camera').removeClass('on');
    });
    $('.btnSettingList.mic').fadeOut(function(){
      $('.btnSetting.mic').removeClass('on');
    });
  });
}
wvFace.hotKeyPopClose = function(){
  $('.hotkeyBtn').removeClass('on');
  setTimeout(function() {
    $('.layerPopup').removeClass('draged');
  }, 500);
  $('.layerPopup.hotkeyPopup').fadeOut(function(){
    $('.popupLayout').removeClass('on');
    $('.layerPopup.hotkeyPopup').css({
      'left':'50%',
      'top':'50%',
    });
  });
}

/* gnb */
wvFace.gnbMBox = function(){
  if(wvFace.gnbArea){
    wvFace.gnbArea = false;
    $(".gnbBoxIn > .menuList ").slideUp();
    $('.gnbCon').removeClass('on');
    $("#faceLayout").removeClass("gnbOn");
    $("#faceListBox").removeClass('topMenuOut');
  }else{
    wvFace.gnbArea = true;
    $(".gnbBoxIn > .menuList ").slideDown();
    $("#faceLayout").addClass("gnbOn");
    $("#faceListBox").addClass('topMenuOut');
  }
wvFace.randerS();
}

/* gnb > classinfo */
wvFace.clasInfoBox = function(){
  var thisN = $("#gnbBox a[data-target='clasInfo']")
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#classInfo").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#classInfo").addClass("on");
    wvFace.leftArea = true;
  }
  wvFace.randerS();
}
/* gnb > classinfo end*/

// gnb > class user
wvFace.classUser = function(){
  var thisN = $("#gnbBox a[data-target='classUser']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#classUser").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#classUser").addClass("on");
    wvFace.leftArea = true;

  }
  wvFace.randerS();
}
// gnb > class uer end

// gnb > chatting
wvFace.chattingBox = function(){
  var thisN = $("#gnbBox a[data-target='chattingBox']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#chattingBox").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#chattingBox").addClass("on");
    wvFace.leftArea = true;
  }
  wvFace.randerS();
}
// gnb > chatting end

// gnb > survey
wvFace.surveyBox = function(){
  var thisN = $('#gnbBox a[data-target="classSurvey"]');
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#surveyBox").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#surveyBox").addClass("on");
    wvFace.leftArea = true;

  }
  wvFace.randerS();
}
// gnb > survey end


// gnb > referenceRoom
wvFace.referenceRoom = function(){
  var thisN = $("#gnbBox a[data-target='referenceRoom']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#referenceRoom").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#referenceRoom").addClass("on");
    wvFace.leftArea = true;
  }
  wvFace.randerS();
}
// gnb > referenceRoom end


// gnb  > studyStatusPopup
wvFace.studyStatus = function() {

  var thisN = $('#gnbBox a[data-target="studyStatus"]')
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $('.gnbCon').removeClass('on');
    wvFace.leftArea = true;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $('.layerPopup.borPopup').fadeOut(function(){});
    $('.layerPopup.studyStatusPopup').fadeIn(function(){
      $('.popupLayout').addClass('on');
      $('.borPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.borGeneraPopup').fadeOut(function(){
        $('a[data-target="breakOutRoom"]').removeClass('on');
      });
      $('.displayshare').fadeOut(function(){
        $('a[data-target="displayshare"]').removeClass('on');
      });
      $('.recording.recStart').fadeOut(function(){
        $('a[data-target="displayshare"]').removeClass('on');
      });
      $('.recording.recoStop').fadeOut(function(){});
      $('.hotkeyPopup').fadeOut(function(){
        $('.hotkeyBtn').removeClass('on');
      });
      $('.btnSettingList.camera').fadeOut(function(){
        $('.btnSetting.camera').removeClass('on');
      });
      $('.btnSettingList.mic').fadeOut(function(){
        $('.btnSetting.mic').removeClass('on');
      });

    });
    wvFace.leftArea = false;
  }
  wvFace.randerS();
}
// gnb  > studyStatusPopup end

// studyStatusPopupclose
wvFace.studyStatusClose = function(){
  setTimeout(function() {
    $('.layerPopup').removeClass('draged');
  }, 500);
  $('.studyStatusPopup.layerPopup').fadeOut(function(){
    $('.studyStatusPopup.layerPopup').css({'left':'50%','top':'50%'});
    $('.studyStaTab ul li a').removeClass('on');
    $('.studyStaTab ul li:first-child a').addClass('on');
    $('.popupLayout').removeClass('on');
  });
  $('#gnbBox a[data-target="studyStatus"]').removeClass('on');
}
// studyStatusPopupclose end

// gnb > generalSetting
wvFace.generSet = function(){
  var thisN = $("#gnbBox a[data-target='generSet']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#generSetting").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#generSetting").addClass("on");
    wvFace.leftArea = true;
  }
  wvFace.randerS();
}
// gnb > generalSetting end

// gnb > lectureSetting
wvFace.lectureSet = function(){
  var thisN = $("#gnbBox a[data-target='lectureSet']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#lectureSetting").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#lectureSetting").addClass("on");
    wvFace.leftArea = true;
  }
  wvFace.randerS();
}
// gnb > lectureSetting end

wvFace.noteBox = function(){
  var thisN = $(" a[data-target='noteBox']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#noteBox").removeClass("on");
    wvFace.videoView = true;
  }else{
    thisN.addClass("on");
    $("#noteBox").addClass("on");
    wvFace.videoView = false;
  }

  wvFace.randerS();
}

// gnb > qa
wvFace.qaBox = function(){
  var thisN = $("#gnbBox a[data-target='qaCont']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#qaCont").removeClass("on");
    wvFace.leftArea = false;
  }else{
    $("#gnbBox a").removeClass('on');
    thisN.addClass("on");
    $('.gnbCon').removeClass("on");
    $("#qaCont").addClass("on");
    wvFace.leftArea = true;
  }
  wvFace.randerS();
}


wvFace.faceListBox = function(n){
  var thisN = $(".faceListButtonBox button[data-target='faceListBox']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("#faceListBox").removeClass("on");
    wvFace.rightArea = false;
  }else{
    thisN.addClass("on");
    $("#faceListBox").addClass("on");

    wvFace.rightArea = true;
  }
  wvFace.randerS();
}
wvFace.faceAllBox = function(n){
  var thisN = $(".faceListButtonBox button[data-target='faceAllBox']");
  if(thisN.hasClass("on")){
    thisN.removeClass("on");
    $("button[data-target='faceListBox']").removeClass('off');
    wvFace.faceAll = false;
    wvFace.rightArea = false;
  }else{
    thisN.addClass("on");
    $('#faceAllBox').addClass('grid1Column');
    $("#faceListBox").removeClass("on");
    $("button[data-target='faceListBox']").removeClass('on');
    $("button[data-target='faceListBox']").addClass('off');
    wvFace.faceAll = true;
    gridS.action();
  }
  wvFace.randerS();
}


wvFace.randerS = function(){

  wvFace.gnbArea ? $(".contentLayout").addClass("gnbArea") : $(".contentLayout").removeClass("gnbArea");
  wvFace.leftArea ? $(".contentLayout").addClass("leftArea") : $(".contentLayout").removeClass("leftArea");
  wvFace.rightArea ? $(".contentLayout").addClass("rightArea") : $(".contentLayout").removeClass("rightArea");
  wvFace.videoView ? $("#faceLayout").addClass("videoView") : $("#faceLayout").removeClass("videoView");
  wvFace.faceAll ? $("#faceAllBox").addClass("on") : $("#faceAllBox").removeClass("on");

  if($(window).width() <= 1024){
    $(".contentLayout").removeClass("rightArea");
    $(".contentLayout").removeClass("leftArea");

  }

  //if($("#faceAllBox").hasClass("on")) wvFace.faceAllS();
  setTimeout(function() {
      $(".contentLayout").trigger('change');
  }, 1000 * 1);
  //modifyPresentationSize();
}

/*wvFace.faceAllS = function(){
  wvFace.faceAllUser = $("#faceAllBox .faceAllList > li:not(.d-none)").length;
  console.log(wvFace.faceAllUser);
  wvFace.pageW = $("#faceAllBox .faceAllList").width();
  if(wvFace.faceAllUser < 5){
    $("#faceAllBox .faceAllList").attr("class", "faceAllList on2")
  }else if(wvFace.faceAllUser < 10){
    $("#faceAllBox .faceAllList").attr("class", "faceAllList on3")
  }else if(wvFace.faceAllUser < 17){
    $("#faceAllBox .faceAllList").attr("class", "faceAllList on4")
  }else{
    $("#faceAllBox .faceAllList").attr("class", "faceAllList on5")
  }


  if($(window).width() < 1024 && $(window).width() > 641){
    $("#faceAllBox .faceAllList").attr("class", "faceAllList on2");

  }else if($(window).width() <= 640){
    $("#faceAllBox .faceAllList").attr("class", "faceAllList on1");
  }

}
*/


// 2021.02.16
var gridS = {
  thisE : "#faceAllBox",
  thisEIn : ".faceAllBoxIn",
  thisEUl : ".faceAllBoxIn > ul",
  thisE2In : ".faceAllBoxIn2",
  thisE2Ul : ".faceAllBoxIn2 > ul",
  thisPage : 1,
  ratio : function(n,m){
      var thisN = n/(m===16 ? 16 : 9);
      return thisN*(m===16 ? 9 : 16)
  },
  gridData : {
      gridW : 0,
      gridH : 0,
      
  },
  eventS : function(){
    // $(gridS.thisE).find(".iconLeft").on("click",function(){
    //   gridS.thisPage = 1;
    //   $(gridS.thisE).removeClass("page2");
    // });
    // $(gridS.thisE).find(".iconRight").on("click",function(){
    //   gridS.thisPage = 2;
    //   $(gridS.thisE).addClass("page2");
    // });
  },
  size : function(n){
      if(n === 'h'){
          $(gridS.thisEUl).width(gridS.gridData.thisCol*gridS.ratio(gridS.gridData.gridH/gridS.gridData.row,9));
          $(gridS.thisEUl).height('100%');
          $(gridS.thisE2Ul).width(gridS.gridData.thisCol*gridS.ratio(gridS.gridData.gridH/gridS.gridData.row,9));
          $(gridS.thisE2Ul).height('100%');
      }else{
          $(gridS.thisEUl).width('100%');
          $(gridS.thisEUl).height(gridS.gridData.liH*gridS.gridData.row);
          $(gridS.thisE2Ul).width('100%');
          $(gridS.thisE2Ul).height(gridS.gridData.liH*gridS.gridData.row);
      }
      $(gridS.thisEIn).height("100%");
      $(gridS.thisE2In).height("100%");
  },
  
  action : function(){
      if($(gridS.thisE).width() < 1) return false;
      gridS.gridData.gridW = $(gridS.thisE).width();
      gridS.gridData.gridH = $(gridS.thisE).height();
      gridS.gridData.GridLength = $(gridS.thisEUl + " > li").length;
      gridS.gridData.row = 1;
      // if($(gridS.thisE2Ul + " > li").length > 0){
      //   $(gridS.thisE).find(".icon-arrowR").fadeIn(900);
      // }else{
      //   $(gridS.thisE).removeClass("page2");
      //   $(gridS.thisE).find(".icon-arrowR").fadeOut(900);
      // }
      // if(gridS.gridData.gridW < 600){
      //   gridS.gridData.col = 1;
      //   $(gridS.thisE).removeClass("page2");
      //   gridS.gridData.row = gridS.gridData.GridLength;
      //   $(gridS.thisEUl).attr("style", "grid-template-rows : repeat("+gridS.gridData.row+", 1fr); grid-template-columns : repeat("+gridS.gridData.col+", 1fr)");
      //   $(gridS.thisEUl).width('100%');
      //   $(gridS.thisE2Ul).attr("style", "grid-template-rows : repeat("+gridS.gridData.row+", 1fr); grid-template-columns : repeat("+gridS.gridData.col+", 1fr)");
      //   $(gridS.thisE2Ul).width('100%');
      //   gridS.gridData.liH = gridS.ratio(gridS.gridData.gridW,16);
      //   $(gridS.thisEIn).height(gridS.gridData.liH*gridS.gridData.row);
      //   $(gridS.thisEUl).height(gridS.gridData.liH*gridS.gridData.row);
      //   $(gridS.thisE2In).height(gridS.gridData.liH*gridS.gridData.row);
      //   $(gridS.thisE2Ul).height(gridS.gridData.liH*gridS.gridData.row);
      //   return false;
      // }
      gridS.gridData.thisCol = 1;
      gridS.gridData.thisH = gridS.gridData.gridH;
      for(i=1; gridS.gridData.gridH/gridS.ratio(gridS.gridData.gridW/(gridS.gridData.GridLength/i),16) >= 2; i++){
          gridS.gridData.thisCol = Math.ceil(gridS.gridData.GridLength/i)
          gridS.gridData.thisH = gridS.ratio(gridS.gridData.gridW/(Math.ceil(gridS.gridData.GridLength/i)),16);
          if(gridS.gridData.GridLength/i >= 1 && i*gridS.gridData.thisH < gridS.gridData.gridH && i*gridS.gridData.thisCol-gridS.gridData.GridLength < gridS.gridData.thisCol) gridS.gridData.row = i;                        
      }
      if(gridS.gridData.gridH > (gridS.gridData.thisH*2)){//세로 영역이 많이 남을 경우 로직 추가
        console.log((gridS.gridData.thisH*2));
        gridS.gridData.row++;
        gridS.gridData.thisCol = Math.ceil(gridS.gridData.GridLength/gridS.gridData.row)
        gridS.gridData.thisH = gridS.ratio(gridS.gridData.gridW/(Math.ceil(gridS.gridData.GridLength/gridS.gridData.row)),16);
        gridS.gridData.liH = gridS.ratio(gridS.gridData.gridW/(Math.ceil(gridS.gridData.GridLength/gridS.gridData.row)),16);
        gridS.gridData.col = Math.ceil(gridS.gridData.GridLength/gridS.gridData.row);
        // $(gridS.thisEUl).attr("style", "grid-template-rows : repeat("+gridS.gridData.row+", 1fr); grid-template-columns : repeat("+gridS.gridData.col+", 1fr)");
        // $(gridS.thisE2Ul).attr("style", "grid-template-rows : repeat("+gridS.gridData.row+", 1fr); grid-template-columns : repeat("+gridS.gridData.col+", 1fr)");
        gridS.size('h');
      }else{
        gridS.gridData.liH = gridS.ratio(gridS.gridData.gridW/(Math.ceil(gridS.gridData.GridLength/gridS.gridData.row)),16);
        gridS.gridData.col = Math.ceil(gridS.gridData.GridLength/gridS.gridData.row);
        // $(gridS.thisEUl).attr("style", "grid-template-rows : repeat("+gridS.gridData.row+", 1fr); grid-template-columns : repeat("+gridS.gridData.col+", 1fr)");
        // $(gridS.thisE2Ul).attr("style", "grid-template-rows : repeat("+gridS.gridData.row+", 1fr); grid-template-columns : repeat("+gridS.gridData.col+", 1fr)");
        gridS.gridData.gridH < gridS.gridData.liH ? gridS.size('h') : gridS.size('w');
      }
      

      // var txt = "gridW : " +gridS.gridData.gridW+" || gridH : "+gridS.gridData.gridH+" || row : "+gridS.gridData.row+" || liH : "+gridS.gridData.liH+" || col : "+gridS.gridData.col;
      // console.log(txt);
      // $("#text").text(txt)
  }   
}
$(function(){
  // gridS.action();
  // gridS.eventS(); //최초 한번만 실행
  // if($('.grid-container > li').length === 1) {
  //   gridS.action();
  // }

  testS()
})
$(window).resize(function(){
  // if($('.grid-container > li').length === 1) {
  //   gridS.action();
  // }
  testS();
  // if(pageWs > pageHs) {
  // }else {
  //   return
  // }
  // gridS.action();
  // if(pageHs <= 900) { 
  // }else {
  //   $(gridS.thisEUl).width('100%');
  //   $(gridS.thisEUl).height('100%');
  // }
});

var testText;
function testS(){
  var testN = $("#testS option:selected").val();
  if(testText=== undefined) testText = $(".faceAllBoxIn .faceAllList").html();
  $(".faceAllList1").html('');
  for(i=0; i < testN; i++) {
    (i < 30) ? $(".faceAllList1").append(testText) : $(".faceAllList2").append(testText);
  }
  var userLength = $('.grid-container > li').length;
  if(userLength == 5 || userLength == 6) {
    userLength = 5;
  }else if(userLength == 7 || userLength == 8) {
    userLength = 7;
  }else if(userLength >= 9 && userLength <= 15) {
    userLength = 9;
  }else if(userLength > 15) {
    userLength = 15;
  }
  gridNum(userLength);

  if(userLength == 1) {
    $('.faceAllBoxW > div').removeClass();
    $('#faceAllBox').addClass('grid1Column');
    gridS.action();
  }
}

function gridNum(gridlength) {
  $('#faceAllBox .faceAllList').width('100%');
  $('#faceAllBox').removeClass('grid1Column');
  $('.faceAllBoxW > div').removeClass();
  $('.faceAllBoxW > div').addClass(`grid${gridlength}Column`);
}


