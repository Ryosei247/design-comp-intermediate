// ハンバーガーボタン
$('.hamburger').click(function(){
  $(this).toggleClass('active')
  $('.nav-list').toggleClass('active')
})

$('.menu-item').click(function(){
  $('.hamburger').removeClass('active')
  $('.nav-list').removeClass('active')
})


$(function() {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });
});
/*
// モーダルウィンドウを操作するための準備
let trigger = $('.works-box'),
    wrapper = $('.modal__wrapper'),
    layer = $('.modal__layer'),
    container = $('.modal__container'),
    close = $('.modal__close'),
    content = $('.modal__content');

// 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
$(trigger).click(function() {
  $(wrapper).fadeIn(400);
  // スクロール位置を戻す
  $(container).scrollTop(0);
  // サイトのスクロールを禁止にする
  $('html, body').css('overflow', 'hidden');
});

// 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
$(layer).add(close).click(function() {
  $(wrapper).fadeOut(400);
  // サイトのスクロール禁止を解除する
  $('html, body').css('overflow', 'auto');
});

// worksのモーダル
$('.works-box').click(function() {
  let img = $(this).data('img')
  let text = $(this).find('.works-textarea p,.works-textarea01 p').text()
  $('.works-modal img').attr('src', img)
  $('.works-modal p').text(text)

  $('.modal__wrapper').fadeIn(500)
})
$('.modal__layer, .modal__close').click(function(){
  $('.modal__wrapper').fadeOut(500)
});
*/
// 要素を取得
const trigger = $('.works-box');
const wrapper = $('.modal__wrapper');
const layer = $('.modal__layer');
const container = $('.modal__container');
const close = $('.modal__close');

// モーダルを開く
trigger.on('click', function () {

  // クリックした作品の情報を取得
  const img = $(this).data('img');
  const text = $(this).find('.works-textarea p, .works-textarea01 p').text();

  // モーダルに反映
  $('.works-modal img').attr('src', img);
  $('.works-modal p').text(text);

  // モーダル内スクロールを先頭へ
  container.scrollTop(0);

  // モーダル表示
  wrapper.fadeIn(400);

  // 背景スクロール禁止
  $('html, body').css('overflow', 'hidden');

  // TOPへ戻るボタンを非表示
  //pageTop.addClass('hidden');
  pageTop.classList.remove("visible");
});

// モーダルを閉じる
layer.add(close).on('click', function () {

  // モーダル非表示
  wrapper.fadeOut(400);

  // 背景スクロール解除
  $('html, body').css('overflow', '');

  // TOPへ戻るボタンを再表示
  pageTop.removeClass('hidden');
});
// headerをスクロールすると、色が変わる
$(window).scroll(function(){
  let aboutHeight = $("#about").offset().top
  let headerHeight = $(".header").outerHeight(); // ヘッダーの高さを取得
  let scrollPosition = $(this).scrollTop()
  if (scrollPosition > aboutHeight - headerHeight) {
      $('.header').addClass('change-color');
  } else {
      $('.header').removeClass('change-color');
  }
});

// TOPボタン
let pageTop = document.getElementById("pagetop");

window.addEventListener("scroll", () => {
  // スクロール量
  let scrollVolY = window.scrollY;

  /**
   * ページ上端からのスクロール量が
   * 100pxを超えたらTOPボタンを表示する
   */
  if (scrollVolY > 100) {
    pageTop.classList.add("visible");
  } else {
    pageTop.classList.remove("visible");
  }
});

// TOPボタンがクリックされたらページトップへ遷移する
pageTop.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

//scroll_effect
  let scrollAnimationElm = document.querySelectorAll('.scroll_up');
// アニメーション関数
  let scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      let triggerMargin = 100;
      // 要素がスクロールでビューポートに入った場合にアニメーションを追加
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  };
// 初回ロード時にアニメーション関数を実行
  window.addEventListener('load', scrollAnimationFunc);
// スクロールイベント時にアニメーション関数を呼び出す
let debounceTimer;
window.addEventListener('scroll', function () {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(scrollAnimationFunc, 50);
});

jQuery(document).ready(function() {
// ブレークポイント（SPとPCの境界、例: 768px）
const breakpoint = 768;
// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  if (!target.length) return false;
  /*
  // ウィンドウ幅を取得
  const windowWidth = $(window).width();
  // デバイスによってヘッダーの高さを変える
  const headerHeight = windowWidth < breakpoint ? 50 : 80;
  */
  const headerHeight = $('.header').outerHeight();
  // スクロール先の位置を取得し、<header>の高さを考慮して補正
  const position = target.offset().top - headerHeight;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
$('a[href="index.html"]').click(function (e) {
  e.preventDefault(); // 通常のリンク動作をキャンセル
  $("body,html").animate({ scrollTop: 0 }, 800, 'swing');
});
});

