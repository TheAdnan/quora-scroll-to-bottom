    var lastScrollHeight = 0;
    function QuoraAnswers() {
		var images = document.getElementsByTagName('img');
		var profileIntro = document.getElementsByClassName('answer_user_inline');
		var l = profileIntro.length;
		for (var i = 0; i < l; i++) {
			images[0].parentNode.removeChild(images[0]);
			profileIntro[0].parentNode.removeChild(profileIntro[0]);
		}
      var sh = document.documentElement.scrollHeight;
      if (sh != lastScrollHeight) {
        lastScrollHeight = sh;
        document.documentElement.scrollTop = sh;
      }
    }
    window.setInterval(QuoraAnswers, 100);
	
	