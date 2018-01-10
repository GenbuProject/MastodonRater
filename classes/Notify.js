class Notify {
	constructor (snackbar) {
		this.self = new mdc.snackbar.MDCSnackbar(snackbar);

		/*Notification.requestPermission(result => {
			switch (result) {
				case "denied":
					alert([
						"通知認証が拒否されています。",
						"アプリの動作に支障が出る恐れがあります。"
					].join("\r\n"));

					break;
			}
		});*/
	}

	generate (text = "") {
		this.self.show({
			message: text,
			timeout: 1500,

			actionText: "閉じる",
			actionHandler () {}
		});

		/*let notify = new Notification("MastodonRater", {
			body: text
		});	notify.addEventListener("click", function () {
			this.close();
		});*/
	}

	begin () {
		this.generate("処理を実行しています...");
	}

	finish () {
		this.generate("投稿が反映されました");
	}

	cancel () {
		this.generate("この処理は実行されませんでした");
	}
}