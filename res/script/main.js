mixer.audioDB = [
    {
        name: 'pipe',
        path: 'assets/se/pipe.mp3'
    }
];

$(document).on('click', function() {
    mixer.play('pipe', 0.75);
});