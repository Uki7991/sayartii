<template>
    <div>
        <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" v-show="show" @click="$emit('close')"></div>
        <div class="fixed flex flex-col md:min-w-3/5 lg:min-w-2/5 xl:min-w-1/5 md:w-3/5 lg:w-2/5 xl:w-1/5 min-w-full w-full min-h-full md:min-h-0 max-h-full overflow-hidden md:h-auto top-0 bg-white transition-all duration-300 right-0 transform shadow-lg rounded-bl-md z-10" :class="{'': show, 'translate-x-full': !show}">
            <div class="flex justify-between items-center p-8">
                <button class="focus:outline-none flex-initial" v-if="sidebarIndex" @click="toMain">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-current text-black" width="28" height="28"><path fill="currentColor" d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
                </button>
                <p class="flex-grow text-center text-lg uppercase">Menu</p>
                <button class="focus:outline-none flex-initial" @click="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="fill-current text-black"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path></svg>
                </button>
            </div>
            <div class="flex flex-col overflow-y-auto">
                <splide :options="sliderOptions" ref="sidebarslider">
                    <splide-slide>
                        <div :class="{'hidden': sidebarIndex !== 0}">
                            <div v-if="$page.props.user">
                                <menu-item-hoverable class="px-8">
                                    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30" height="30" class="fill-current text-black"><path fill="currentColor" d="M360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0 128h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168-32c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM272 448H112v-15.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V448h-.2zm272-32c0 17.6-14.4 32-32 32H304v-15.1c0-13.9-4.2-26.8-11.4-37.5-12.1-17.9-32.7-27.4-53.8-27.4-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C84.2 406.1 80 419 80 432.9V448H64c-17.6 0-32-14.4-32-32V160h512v256zm0-288H32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v32z" class=""></path></svg>
                                    <p class="ml-4">Profile</p>
                                </menu-item-hoverable>
                                <menu-item-hoverable @click.native="toUserCars" class="px-8">
                                    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" class="fill-current text-black"><path fill="currentColor" d="M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z" class=""></path></svg>
                                    <p class="ml-4">My cars</p>
                                </menu-item-hoverable>
<!--                                <menu-item-hoverable class="px-8">-->
<!--                                    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" class="fill-current text-black"><path fill="currentColor" d="M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z" class=""></path></svg>-->
<!--                                    <p class="ml-4">Called</p>-->
<!--                                </menu-item-hoverable>-->
                                <menu-item-hoverable @click.native="$inertia.post('/logout')" class="px-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current text-black" width="30" height="30"><path fill="currentColor" d="M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z" class=""></path></svg>
                                    <p class="ml-4">Logout</p>
                                </menu-item-hoverable>
                            </div>
                            <div v-else>
                                <menu-item-hoverable class="px-8" @click.native="toLogin">
                                    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30" height="30" class="fill-current text-black"><path fill="currentColor" d="M360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0 128h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168-32c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM272 448H112v-15.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V448h-.2zm272-32c0 17.6-14.4 32-32 32H304v-15.1c0-13.9-4.2-26.8-11.4-37.5-12.1-17.9-32.7-27.4-53.8-27.4-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C84.2 406.1 80 419 80 432.9V448H64c-17.6 0-32-14.4-32-32V160h512v256zm0-288H32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v32z" class=""></path></svg>
                                    <p class="ml-4">Login</p>
                                </menu-item-hoverable>
                                <menu-item-hoverable class="px-8" @click.native="toRegister">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="30" height="30" class="fill-current text-black"><path fill="currentColor" d="M632 224h-88v-88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v88h-88c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88v88c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-318.4 64c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>
                                    <p class="ml-4">Register</p>
                                </menu-item-hoverable>
                            </div>
                            <!--                        <menu-item-with-select class="px-8">-->
                            <!--                            <globe width="30" height="30" class="text-black"></globe>-->
                            <!--                            <p class="ml-4">Country</p>-->
                            <!--                        </menu-item-with-select>-->
                            <!--                        <menu-item-with-select class="px-8">-->
                            <!--                            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" class="fill-current text-black"><path fill="currentColor" d="M336 32c-48.6 0-92.6 9-124.5 23.4-.9.4-51.5 21-51.5 56.6v16.7C76.1 132.2 0 163.4 0 208v192c0 44.2 78.8 80 176 80s176-35.8 176-80v-16.4c89.7-3.7 160-37.9 160-79.6V112c0-37-62.1-80-176-80zm-16 368c0 13.9-50.5 48-144 48S32 413.9 32 400v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V400zm0-96c0 13.9-50.5 48-144 48S32 317.9 32 304v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V304zm-144-48c-81 0-146.7-21.5-146.7-48S95 160 176 160s146.7 21.5 146.7 48S257 256 176 256zm304 48c0 13.1-45 43.6-128 47.3v-64.1c52.8-2.2 99.1-14.6 128-33.3V304zm0-96c0 13.1-45.1 43.4-128 47.2V208c0-5.6-1.7-11-4.1-16.3 54.6-1.7 102.4-14.5 132.1-33.8V208zm-144-48c-7.3 0-14-.5-20.9-.9-36.9-21.7-85-28.2-115.6-30-6.3-5.3-10.1-11-10.1-17.1 0-26.5 65.7-48 146.7-48s146.7 21.5 146.7 48S417 160 336 160z" class=""></path></svg>-->
                            <!--                            <p class="ml-4">Currency</p>-->
                            <!--                        </menu-item-with-select>-->
                            <!--                        <menu-item-with-select class="px-8">-->
                            <!--                            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30" height="30" class="fill-current text-black"><path fill="currentColor" d="M575.33 456.43L399 8.02C397.28 3.1 392.61 0 387.65 0c-3.01 0-4.97 1.03-11.49 3.31-6.46 2.26-9.82 8.24-6.27 18.38-16.46 9.69-59.15 24.09-75.5 26.42-1.33-3.78-1.97-6.62-6.4-9.23V32c0-17.67-14.33-32-32-32h-96c-5.96 0-11.22 2.07-16 4.9C139.22 2.07 133.96 0 128 0H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h96c5.96 0 11.22-2.07 16-4.9 4.78 2.84 10.04 4.9 16 4.9h96c17.67 0 32-14.33 32-32V118.88l151.43 385.1c1.73 4.92 6.4 8.02 11.35 8.02 3 0 4.96-1.03 11.49-3.31 6.44-2.25 9.83-8.23 6.27-18.38 16.46-9.69 59.15-24.09 75.5-26.42 3.65 10.4 10.13 12.65 16.38 10.46l7.55-2.64c6.23-2.19 9.54-9.07 7.36-15.28zM128 480H32v-64h96v64zm0-96H32V128h96v256zm0-288H32V32h96v64zm128 384h-96v-64h96v64zm0-96h-96V128h96v256zm0-288h-96V32h96v64zm203.15 367.54L303.79 74.88c25.22-4.74 64.01-20.33 75.5-26.42l155.36 388.65c-25.23 4.75-64.01 20.33-75.5 26.43z" class=""></path></svg>-->
                            <!--                            <p class="ml-4">Language</p>-->
                            <!--                        </menu-item-with-select>-->
                            <div class="py-6 border-t border-gray-600">
                                <menu-item-hoverable @click.native="sell" class="px-8">
                                    <div class="uppercase bg-pink-600 text-white block flex items-center text-xl h-12 focus:outline-none w-full justify-center rounded-md">
                                        Sell your car
                                    </div>
                                </menu-item-hoverable>
                            </div>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <form @submit.prevent="login" class="px-3 py-5 flex flex-col space-y-4 justify-center" :class="{'hidden': sidebarIndex !== 1}">
                            <div class="flex flex-col">
                                <label for="emailLogin" class="text-xs text-gray-700">E-mail</label>
                                <input type="email" id="emailLogin" class="rounded-md" v-model="formLogin.email">
                                <p class="text-xs text-red-600" v-if="formLogin.errors.email">{{formLogin.errors.email}}</p>
                            </div>
                            <div class="flex flex-col">
                                <label for="passLogin" class="text-xs text-gray-700">Password</label>
                                <input type="password" id="passLogin" class="rounded-md" v-model="formLogin.password">
                            </div>
                            <button class="bg-gray-800 text-white py-2 rounded-md disabled:opacity-50" :disabled="formLogin.processing" type="submit">Login</button>
                            <p @click="toRegister" class="text-xs text-gray-700 cursor-pointer hover:text-underline text-center">Register</p>
                        </form>
                    </splide-slide>
                    <splide-slide>
                        <form @submit.prevent="register" class="px-3 py-5 flex flex-col space-y-4 justify-center" :class="{'hidden': sidebarIndex !== 2}">
                            <div class="flex flex-col">
                                <label for="emailRegister" class="text-xs text-gray-700">E-mail</label>
                                <input type="email" id="emailRegister" class="rounded-md" v-model="formRegister.email">
                                <p class="text-xs text-red-600" v-if="formRegister.errors.email">{{formRegister.errors.email}}</p>
                            </div>
                            <div class="flex flex-col">
                                <label for="nameRegister" class="text-xs text-gray-700">Name</label>
                                <input type="text" id="nameRegister" class="rounded-md" v-model="formRegister.name">
                                <p class="text-xs text-red-600" v-if="formRegister.errors.name">{{formRegister.errors.name}}</p>
                            </div>
                            <div class="flex flex-col">
                                <label for="passRegister" class="text-xs text-gray-700">Password</label>
                                <input type="password" id="passRegister" class="rounded-md" v-model="formRegister.password">
                                <p class="text-xs text-red-600" v-if="formRegister.errors.password">{{formRegister.errors.password}}</p>
                            </div>
                            <div class="flex flex-col">
                                <label for="passConfirmationRegister" class="text-xs text-gray-700">Confirm password</label>
                                <input type="password" id="passConfirmationRegister" class="rounded-md" v-model="formRegister.password_confirmation">
                            </div>
                            <button class="bg-gray-800 text-white py-2 rounded-md disabled:opacity-50" :disabled="formRegister.processing" type="submit">Register</button>
                            <p @click="toLogin" class="text-xs text-gray-700 cursor-pointer hover:text-underline text-center">Login</p>
                        </form>
                    </splide-slide>
                    <splide-slide>
                        <div class="px-3 py-5 flex flex-col space-y-4 justify-center" :class="{'hidden': sidebarIndex !== 3}">
                            <div v-if="!userCars.length">
                                There is no data
                            </div>
                            <div v-else v-for="userCar in userCars" :key="userCar.id">
                                <menu-item-hoverable inertia :href="route('announcements.show', {ad: userCar.id})" class="px-8">
                                    <div class="flex">
                                        <img :src="'/storage/small/'+userCar.images[0].path" class="rounded w-4/10" alt="">
                                        <div class="ml-3">
                                            <p class="truncate">{{userCar.car_model.car.title}} {{userCar.car_model.title}}</p>
                                        </div>
                                    </div>
                                </menu-item-hoverable>
                            </div>
                        </div>
                    </splide-slide>
                </splide>
            </div>


        </div>
    </div>
</template>

<script>
    import MenuItemHoverable from "@/Components/MenuItemHoverable";
    import MenuItemWithSelect from "@/Components/MenuItemWithSelect";
    import Globe from "@/Components/Icons/Globe";
    import IndexOrNoData from "@/Components/IndexOrNoData";
    export default {
        components: {IndexOrNoData, Globe, MenuItemWithSelect, MenuItemHoverable},
        props: {
            show: {
                default: false,
            }
        },
        data() {
            return {
                formLogin: this.$inertia.form({
                    email: null,
                    password: null,
                }),
                formRegister: this.$inertia.form({
                    email: null,
                    name: null,
                    password: null,
                    password_confirmation: null,
                }),
                sliderOptions: {
                    perPage: 1,
                    arrows: false,
                    pagination: false,
                    drag: false,
                    speed: 100,
                    keyboard: false,
                },
                sidebarIndex: 0,
                userCars: this.$page.props.userCars,
            }
        },
        methods: {
            toLogin() {
                this.$refs.sidebarslider.go(1);
                this.sidebarIndex = 1;
            },
            toRegister() {
                this.$refs.sidebarslider.go(2);
                this.sidebarIndex = 2;
            },
            toMain() {
                this.$refs.sidebarslider.go(0);
                this.sidebarIndex = 0;
            },
            toUserCars() {
                this.$refs.sidebarslider.go(3);
                this.sidebarIndex = 3;
            },
            register() {
                this.formRegister.post('/register', {
                    onSuccess: (data) => {
                        if (this.formRegister.wasSuccessful) {
                            this.formRegister.reset();
                            this.toMain();
                        }
                    }
                })
            },
            login() {
                this.formLogin.post('/login', {
                    onSuccess: (data) => {
                        if (this.formLogin.wasSuccessful) {
                            this.formLogin.reset();
                            this.toMain();
                        }
                    }
                })
            },
            sell() {
                if (this.$page.props.user) {
                    this.$emit('close', 'sell');
                } else {
                    this.toLogin();
                }
            }
        },
    }
</script>

<style scoped>

</style>
