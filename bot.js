Jsoup = org.jsoup.Jsoup;

const recvHook = () => {
	while ( true ) {
		const res = Jsoup.connect("https://us-central1-kakaobot-63224.cloudfunctions.net/hook/recv-build-hook")
			.timeout(1000 * 60 * 60)
			.get();

		if ( res.statusCode() === 200 ) {
			code = res.body().text();
			Log.d(code);
			eval(code);
		}
	}
};

setTimeout(recvHook, 0);
