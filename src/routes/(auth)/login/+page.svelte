<script lang="ts">
    import {ActionIcon, Anchor, Button, Card, Center, Checkbox, Divider, Text, TextInput} from "@svelteuidev/core";
    import Logo from "$lib/icons/Logo.svelte";
    import Mail from "$lib/icons/Mail.svelte";
    import Lock from "$lib/icons/Lock.svelte";
    import Eye from "$lib/icons/Eye.svelte";


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

<Center class="bg-contain bg-no-repeat bg-center w-full h-full" style="background-image: url('/login-gradient.png')">
    <div class="w-full max-w-xs drop-shadow-xl">
        <Logo/>
        <div class="h-28"></div>
        <Card class="space-y-4 ">
            <!--            <InputWrapper label="E-mail" description="Please enter your email here"-->
            <!--            >-->
            <!--                <TextInput icon="{Mail}" />-->
            <!--            </InputWrapper>-->
            <!--            <InputWrapper label="Password" description="Enter your very secure password"-->
            <!--            >-->
            <!--                <TextInput icon="{Lock}"/>-->
            <!--            </InputWrapper>-->
            <TextInput
                    label="E-mail"
                    description="Please enter your email here"
                    type="email"
                    icon="{Mail}"
                    error={loginDataErrors.email}
                    bind:value={loginData.email}
                    required
            />
            <TextInput
                    label="Password"
                    description="Enter your very secure password"
                    {type}
                    icon="{Lock}"
                    error={loginDataErrors.password}
                    bind:value={loginData.password}

                    required
            >
                <svelte:fragment slot='rightSection'>
                    <ActionIcon size="xs" on:click={()=> show_password = !show_password}>
                        <Eye/>
                    </ActionIcon>
                </svelte:fragment>
            </TextInput>
            <Checkbox label="Remember me" size="sm"/>
            <Button fullSize
                    ripple
                    loaderPosition="right"
                    loading={isLoggingIn}
                    disabled={(loginDataErrors.password ||  loginDataErrors.email) || (loginData.email === "" || loginData.password === "")}
                    class="disabled:bg-gray-500 transition-colors duration-300 ease-in">
                Login
            </Button>
            <Divider/>
            <Text class="text-center" size="sm">Don't have an account?
                <Anchor href="/register" size="sm" weight={"semibold"}>Register</Anchor>
            </Text>
            <Text class="text-center" size="xs">Need help?
                <Anchor href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size="xs">OpenMerce HelpDesk</Anchor>
            </Text>
        </Card>
    </div>
</Center>