<template>
    <div>
    <header>
        <nav>
            <ul>
                
                <li>
                    <NuxtLink to="/images">Images</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/accordion">Accordion</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/grid">Grid</NuxtLink>
                </li>
            </ul>
        </nav>
        <NuxtLink to="/landing" class="btn btn-outline-secondary mb-3 ">Back to Landing Page</NuxtLink>
    </header>
    
    <slot />
    
</div>
    </template>
    <style scoped>
nav{
    background-color: rgb(241, 241, 241);
    padding: 10px;

}
ul{
    list-style-type: none;
    display: flex;
    justify-content: start;
    gap: 12px;
}
li{

}
</style>