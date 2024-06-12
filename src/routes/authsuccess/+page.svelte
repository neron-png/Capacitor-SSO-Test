<script>
    import { navigating, page } from "$app/stores";
    import { onMount } from "svelte";
    import {postCode, apiTest} from "./tradecode"
    // the code is a url parameter
    let stuff = "";
    let token = "";

    async function getID(){
        // if no code, navigate to login
        let code = $page.url.searchParams.get('code');
        if (!code) {
            navigating.set(true);
            page.set('/');
        }
        
        // if code, post it to the server
        let results = await postCode(code);
        console.log(results);
        stuff = results;
        token = results.access_token;

        // if token, get the user info
        const apitest = await apiTest(token);
        console.log(apitest);
        let id = apitest.id;
        return id;
    }

</script>

<ion-card>
	<ion-card-header>
		<ion-card-subtitle>You're now logged in!</ion-card-subtitle>
		<ion-card-title>Welcome</ion-card-title>
	</ion-card-header>

    {#await getID()}
        <p>loading...</p>
    {:then id}
        <ion-card-content>
            Your ID is {id}
        </ion-card-content>
    {:catch error}
        <p>{error.message}</p>
    {/await}
	<ion-item>
		<ion-label>Back to login</ion-label>
		<ion-button href="/" target="_new" fill="outline" slot="end">
			Back
		</ion-button>
	</ion-item>
</ion-card>