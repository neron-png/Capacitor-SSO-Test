<script>
	import { Browser } from "@capacitor/browser";
	import { navigating, page } from "$app/stores";
	import { App, URLOpenListenerEvent } from '@capacitor/app';
	import { goto } from '$app/navigation';

	const authURL = 'https://idp.sso.tools/aristomate/oauth2/authorize';
	const client_id = '8cd28957-0085-4407-8739-592e96987c70';
	const redirect_uri = 'https://applink.aristomate.gr/authsuccess';
	const response_type = 'code';
	const scope = 'profile email openid';

	const URL = `${authURL}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;
	
	function openCapBrowser(){
		Browser.open({ url: URL });
	}


	App.addListener('appUrlOpen', function (event) {
		// slug = /tabs/tabs2
		const slug = event.url.split('.gr').pop();
		console.log(event.url);

		// We only push to the route if there is a slug present
		if (slug) {
			goto(slug);
		}
		});

</script>

  <ion-card>
	<ion-card-header>
		<ion-card-subtitle>Great success!!</ion-card-subtitle>
		<ion-card-title>Welcome to your app!</ion-card-title>
	</ion-card-header>

	<ion-card-content>
		Thank you for using this starter. Click buttons below to open these guides (will
		open in new window). Don't forget to open DevTools to see this app in mobile mode. Happy coding!!!
	</ion-card-content>
	<ion-item>
		<ion-label>SSO login</ion-label>
		<ion-button href={URL} target="_new" fill="outline" slot="end">
			Open system Browser
		</ion-button>
		</ion-item>
		<ion-item>
			<ion-label>SSO login</ion-label>
			<ion-button on:click={openCapBrowser} aria-hidden>
				Open in-app Browser
			</ion-button>
		</ion-item>
</ion-card>

  