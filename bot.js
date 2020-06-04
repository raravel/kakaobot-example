Jsoup = org.jsoup.Jsoup;

const recvHook = () => {
	try {
		const res = Jsoup.connect("https://us-central1-kakaobot-63224.cloudfunctions.net/hook/recv-build-hook")
			.timeout(1000 * 60 * 60)
			.get();

		json = JSON.parse(res.body().text());

		if ( json.st === 200 ) {
			Log.d("수정된 코드를 적용합니다.");
			eval(json.code);
		}
	} catch(err) {
		Log.d(err);
	}

	setTimeout(recvHook, 1000 * 60);
};

Log.d("Start recvHook Polling", true);
setTimeout(recvHook, 0);
