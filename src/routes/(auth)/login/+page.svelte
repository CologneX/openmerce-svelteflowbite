<script lang="ts">

    import Logo from "$lib/icons/Logo.svelte";
    import Mail from "$lib/icons/Mail.svelte";
    import {Button, ButtonGroup, Card, Checkbox, Input, InputAddon} from "flowbite-svelte";
    import Lock from "$lib/icons/Lock.svelte";

    // form bind values
    let isLoggingIn = false


    let loginData: LoginFormData = <LoginFormData>{
        email: "",
        password: ""
    }
    let loginDataErrors: { email: string, password: string } = {
        email: "",
        password: ""
    }
    // password visibility
    let show_password = false
    $: type = show_password ? 'text' : 'password'

    // validator
    // validate is email is in correct format
    function validateEmail(email: string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    $: {
        if (loginData.email) {
            if (!validateEmail(loginData.email)) {
                loginDataErrors.email = "Please enter a valid email address"
            } else {
                loginDataErrors.email = ""
            }
        } else {
            loginDataErrors.email = ""
        }
    }

    // validate is password is 8 characters, with at least 1 uppercase, 1 lowercase, 1 special character and 1 number
    function validatePassword(password: string) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return re.test(password);
    }

    $: {
        if (loginData.password) {
            if (!validatePassword(loginData.password)) {
                loginDataErrors.password = "Please enter a valid password"
            } else {
                loginDataErrors.password = ""
            }
        } else {
            loginDataErrors.password = ""
        }
    }


</script>

<svelte:head>
    <title>Login | OpenMerce</title>
    <meta name="description" content="Login to your OpenMerce account"/>
</svelte:head>

<div class="w-full h-full grid place-content-center">
    <p class="w-full max-w-xs drop-shadow-xl">
        <Logo/>
    <div class="h-28"></div>
    <Card class="space-y-4 w-full max-w-xs">
        <ButtonGroup class="w-full">
            <InputAddon>
                <Mail/>
            </InputAddon>
            <Input placeholder="E-mail" bind:value={loginData.email}
                   required/>
        </ButtonGroup>
        <ButtonGroup class="w-full">
            <InputAddon>
                <Lock/>
            </InputAddon>
            <Input placeholder="Password" bind:value={loginData.password}

                   required/>
        </ButtonGroup>
        <Checkbox>Remember me</Checkbox>
        <Button
                disabled={(loginDataErrors.password ||  loginDataErrors.email) || (loginData.email === "" || loginData.password === "")}
                class="disabled:bg-gray-500 transition-colors duration-300 ease-in">
            Login
        </Button>
        <div class="divider-horizontal"></div>
        <p class="text-center">Don't have an account?
            <a href="/register" class="font-semibold">Register</a>
        </p>
        <p class="text-center">Need help?
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="font-semibold">OpenMerce HelpDesk</a>
        </p>
    </Card>
</div>
