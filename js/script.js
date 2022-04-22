const profiles = [{
    img: './img/ProfilePicture.png',
    name: 'Victor'
}]

const addProfile = name => {

    const image = Math.floor(Math.random() * 3);
    const newProfile = { img: `./img/Profile${image}.png`, name }
    profiles.push(newProfile)
}

