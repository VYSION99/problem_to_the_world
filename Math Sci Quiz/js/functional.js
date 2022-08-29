const general = () => {
    manuItem().then((value) =>
        document.querySelector('.subtopic').innerText = value[1]);
}
general();