mixer.audioDB = [
    {
        name: 'pipe',
        path: 'assets/se/pipe.mp3'
    }
];

mixer.play('pipe', 0);

$(document).on('click', function() {
    mixer.play('pipe', 0.75);
});