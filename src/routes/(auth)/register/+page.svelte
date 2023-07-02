<script lang="ts">
    import {
        ActionIcon,
        Anchor,
        Button,
        Card,
        Center,
        Checkbox,
        Divider,
        RadioGroup,
        Text,
        TextInput
    } from "@svelteuidev/core";
    import Logo from "$lib/icons/Logo.svelte";
    import Mail from "$lib/icons/Mail.svelte";
    import Lock from "$lib/icons/Lock.svelte";
    import Eye from "$lib/icons/Eye.svelte";

    // form bind values
    let isRegisteringIn = false
    let confirmPassword: string = "";
    let registerData: RegisterFormData = {
        password: '',
        birth_date: new Date(),
        email: "",
        first_name: "",
        gender: "",
        last_name: ""
    };
    let registerDataErrors = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    }

    // password visibility
    let show_password = false
    $: type = show_password ? 'text' : 'password'
    let show_confirmPassword = false
    $: confirmtype = show_confirmPassword ? 'text' : 'password'
    // validator
    // validate is email is in correct format
    function validateEmail(email: string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    // validate is password is 8 characters, with at least 1 uppercase, 1 lowercase and 1 number
    function validatePassword(password: string) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return re.test(password);
    }
    // tabs for the form
    let currentTab: number = 1;

</script>

<svelte:head>
    <title>Register | OpenMerce</title>
    <meta content="Register to OpenMerce" name="description"/>
</svelte:head>

<Center class="bg-contain bg-no-repeat bg-center w-full h-full" style="background-image: url('/login-gradient.png')">
    <div class="w-full max-w-xs ">
        <Logo/>
        <div class="h-28"></div>

        <Card class="space-y-4 drop-shadow-xl">
            {#if currentTab === 1}
                <TextInput
                        label="E-mail"
                        description="Please enter your email here"
                        type="email"
                        icon="{Mail}"
                        error={registerDataErrors.email}
                        bind:value={registerData.email}
                        required
                />
                <Button fullSize
                        loaderPosition="right"
                        loading={isRegisteringIn}
                        ripple
                        class="disabled:bg-gray-500 transition-colors duration-300 ease-in">
                    Continue
                </Button>
            {:else if currentTab === 2}
                <TextInput
                        label="Password"
                        description="Enter your very secure password"
                        {type}
                        icon="{Lock}"
                        error={registerDataErrors.password}
                        bind:value={registerData.password}

                        required
                >
                    <svelte:fragment slot='rightSection'>
                        <ActionIcon size="xs" on:click={()=> show_password = !show_password}>
                            <Eye/>
                        </ActionIcon>
                    </svelte:fragment>

                </TextInput>
                <TextInput
                        label="Password"
                        description="Enter your very secure password"
                        type="{confirmtype}"
                        icon="{Lock}"
                        error={registerDataErrors.password}
                        bind:value={confirmPassword}
                        required
                >
                    <svelte:fragment slot='rightSection'>
                        <ActionIcon size="xs" on:click={()=> {
                            show_confirmPassword = !show_confirmPassword
                        }}>
                            <Eye/>
                        </ActionIcon>
                    </svelte:fragment>

                </TextInput>
                <Button fullSize
                        loaderPosition="right"
                        loading={isRegisteringIn}
                        ripple
                        class="disabled:bg-gray-500 transition-colors duration-300 ease-in">
                    Continue
                </Button>
            {:else if currentTab === 3}
                <div class="grid grid-cols-2 gap-x-4">
                    <TextInput
                            label="First Name"
                            type="text"
                            error={registerDataErrors.first_name}
                            bind:value={registerData.first_name}
                            required
                    />
                    <TextInput
                            label="Last Name"
                            type="text"
                            error={registerDataErrors.last_name}
                            bind:value={registerData.last_name}
                            required
                    />
                </div>
                <TextInput
                        label="Birth Date"
                        description="You have to be 13 years old or older (no bocil ep ep)"
                        type="date"
                        error={registerDataErrors.birth_date}
                        bind:value={registerData.birth_date}
                        required
                />
                <RadioGroup
                        label="Gender"
                        labelDirection="left"
                        description="Choose one, we don't support lgbt"
                        bind:value={registerData.gender} size="sm"
                        items={[
                            {label: 'Male', value: 'male'},
                            {label: 'Female', value: "female"}
                        ]}
                />
                <Divider/>

                <Checkbox label="I agree to give my money to OpenMerce" size="sm"/>
                <Button fullSize
                        loaderPosition="right"
                        loading={isRegisteringIn}
                        disabled={
                        registerDataErrors.email !== "" ||
                        registerDataErrors.password !== "" ||
                        registerData.password !== confirmPassword ||
                        registerData.first_name === "" ||
                        registerData.last_name === "" ||
                        !validateEmail(registerData.email) ||
                        !validatePassword(registerData.password)
                        }
                        ripple
                        class="disabled:bg-gray-500 transition-colors duration-300 ease-in">
                    Register
                </Button>

            {/if}
            <Divider/>
            <Text class="text-center" size="sm">Already have an account?
                <Anchor href="/login" size="sm" weight={"semibold"}>Login</Anchor>
            </Text>
            <Text class="text-center" size="xs">Need help?
                <Anchor href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size="xs">OpenMerce HelpDesk</Anchor>
            </Text>
        </Card>
    </div>
</Center>