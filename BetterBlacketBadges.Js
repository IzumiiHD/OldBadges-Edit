// ==UserScript==
// @name         OldBadges
// @description  restores badges to the way they were before blacket's first badge changes.
// @version      1.0.0a
// @icon         https://blacket.monkxy.com/content/logo.png

// @author       @xthonk
// @namespace    https://bb.villainsrule.xyz

// @match        *://blacket.monkxy.com/*
// @match        *://dev.blacket.org/*

// @grant        none
// @run-at       document-start
// ==/UserScript==

const observer = new MutationObserver((mutationList, observer) => {
    let allImages = [...document.querySelectorAll('img')];
    let replaceImages = (search, replace) => allImages.filter(i => i.src === location.origin + search).forEach(i => i.src = replace);

    replaceImages('/content/badges/Plus.png', 'https://cdn.discordapp.com/attachments/1109533102574928056/1200175472974241822/OSkPKJHlE5DbNZv0XowLzUrh.png?ex=65c53982&is=65b2c482&hm=42d6248db52b3ad8745eafaa4dab6ad00eaaa223bd0d49963a20efdc4c033e4b&size=240&quality=lossless');
    replaceImages('/content/badges/Owner.png', 'https://cdn.discordapp.com/emojis/1055535750608867478.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Artist.png', 'https://cdn.discordapp.com/emojis/1055535734611775498.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Ankh.png', 'https://cdn.discordapp.com/emojis/1055535729339531324.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Booster.png', 'https://cdn.discordapp.com/emojis/1055535739644940349.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Verified.png', 'https://cdn.discordapp.com/emojis/1055535852018733056.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Verified%20Bot.png', 'https://cdn.discordapp.com/emojis/1087450670694682624.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Tester.png', 'https://cdn.discordapp.com/emojis/1055535846654230618.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Staff.png', 'https://cdn.discordapp.com/emojis/1055535841528778854.webp?size=240&quality=lossless');
    replaceImages('/content/badges/OG.png', 'https://cdn.discordapp.com/emojis/1055535745407914004.webp?size=240&quality=lossless');
    replaceImages('/content/badges/Big%20Spender.png', 'https://cdn.discordapp.com/emojis/1100507767099371704.png?size=128&quality=lossless');
    replaceImages('/content/badges/6%20Month%20Veteran.png', 'https://cdn.discordapp.com/attachments/1172313603483898030/1200189698883199086/6_Month_Veteran.png?ex=65c546c2&is=65b2d1c2&hm=c5f78f10379d455b2144d4936e9a61ee5d4aee4b1421f3f12090b4acdee043a2&size=240&quality=lossless');
});

observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
});