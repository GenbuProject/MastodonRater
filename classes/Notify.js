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

	get defaultProp () {
		return {
			timeout: 1500,

			actionText: "閉じる",
			actionHandler () {}
		}
	}

	begin () {
		this.self.show({
			message: "処理を実行しています...",
			...this.defaultProp
		});

		/*let notify = new Notification("MastodonRater", {
			body: "処理を実行しています..."
		});	notify.addEventListener("click", function () {
			this.close();
		});*/
	}

	finish () {
		this.self.show({
			message: "投稿が反映されました",
			...this.defaultProp
		});

		/*let notify = new Notification("MastodonRater", {
			body: "投稿が反映されました"
		});	notify.addEventListener("click", function () {
			this.close();
		});*/
	}

	cancel () {
		this.self.show({
			message: "この処理は実行されませんでした",
			...this.defaultProp
		});

		/*let notify = new Notification("MastodonRater", {
			body: "この処理は実行されませんでした"
		});	notify.addEventListener("click", function () {
			this.close();
		});*/
	}
}