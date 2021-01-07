
const cLinks = ['http://udottraffic.utah.gov/1_devices/RWIS%20US89%20@%20Logan%20Summit.jpg',
    'http://udottraffic.utah.gov/1_devices/US-89-mp470.GIF',
    'http://udottraffic.utah.gov/1_devices/aux14585.jpeg',
    'http://udottraffic.utah.gov/1_devices/SR-101-MP-13.gif']

const linkNames = ['Logan Canyon Summit', 'Logan Canyon - Right Hand Fork', 'Sardine Canyon Summit', 'Blask Smith Fork - Left Hand']

const delayT = [3000, 9000, 3000, 9000]

var i = 0;

function loopCameras() {
    // initial state
    document.getElementById('cName').innerHTML = linkNames[i]
    document.getElementById('cImage').src = cLinks[i];

    // update image after delay
    setTimeout(function () {
        document.getElementById('cName').innerHTML = linkNames[i]
        document.getElementById('cImage').src = cLinks[i];
        i++;
        if (i > 3) { // reset i
            i = 0;
        }
        loopCameras();
    }, delayT[i])
}

loopCameras();                                  