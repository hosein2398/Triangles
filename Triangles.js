(function (undefined) {
    Triangles = function (effect) {

        var start_x_1 = -35;
        var start_x_2 = -70;
        var start_x_3 = 0;
        var start_x_1_even = -70;
        var start_x_2_even = -105;
        var start_x_3_even = -35;
        var y_position = 0;
        var counter = 0;
        var number_for_effect = {
            0: [75, 75, 80, 0, 50, 50, 75, 70, 75, 50, 0, 0],
            1: [75, 80, 4, 0, 50, 50, 75, 70, 75, 50, 0, 0],
            2: [75, 80, 75, 0, 50, 50, 75, 70, 75, 50, 0, 0],
            3: [75, 75, 80, 0, 50, 50, 75, 73, 72, 50, 0, 0],
            4: [75, 75, 80, 0, 50, 50, 75, 70, 75, 55, 0, 0],
            5: [75, 10, 84, 0, 90, 90, 75, -7, 75, 90, 0, 0, {
                y_position: 90
            }],
            6: [75, 10, 84, 0, 90, 96, 75, -7, 75, 90, 0, 0, {
                y_position: 90
            }]
        }
        var overarray;
        for (eff in number_for_effect) {
            if (eff == effect) {
                overarray = number_for_effect[eff];

            }
        }
        if (typeof effect === 'undefined') {
            overarray = number_for_effect[0];
        }

        /*
         *Trying to calculate proper number of triangles we should put in the page 
         * 
         */
        var constHeight = parseInt(window.innerHeight / 45);
        var constWidth = parseInt(window.innerWidth / 75)*2;
        var calculatedNumber = constHeight * constWidth;
        var c = document.getElementById("canv");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        $ = c.getContext("2d");

        function create() {
            var start_x_1 = -35;
            var start_x_2 = -70;
            var start_x_3 = 0;
            var start_x_1_even = -70;
            var start_x_2_even = -105;
            var start_x_3_even = -35;
            var y_position = 0;
            var counter = 0;
            for (var i = 1; i < calculatedNumber; i++) {
                if (i % 2 && i !== 1) {
                    $.beginPath();
                    $.fillStyle = "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() *
                            255) +
                        "," +
                        parseInt(Math.random() * 255) +
                        ",0.14)";
                    $.moveTo(start_x_1 + overarray[0], overarray[3] + y_position);
                    $.lineTo(start_x_2 + overarray[1], overarray[4] + y_position);
                    $.lineTo(start_x_3 + overarray[2], overarray[5] + y_position);
                    $.fill();
                    $.closePath();
                    start_x_1 += 75;
                    start_x_2 += 75;
                    start_x_3 += 75;
                    if (start_x_1 > window.innerWidth && counter < 14) {
                        counter++;
                        if (overarray[12]) {
                            y_position += overarray[12].y_position;
                        } else {
                            y_position += 50;
                        }
                        start_x_1 = -35;
                        start_x_2 = -70;
                        start_x_3 = 0;
                        start_x_1_even = -70;
                        start_x_2_even = -105;
                        start_x_3_even = -35;

                    }

                } else if (i !== 2) {
                    $.beginPath();
                    $.fillStyle = "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() *
                            255) +
                        "," +
                        parseInt(Math.random() * 255) +
                        ",0.16)";

                    $.moveTo(start_x_1_even + overarray[6], overarray[9] + y_position);
                    $.lineTo(start_x_2_even + overarray[7], overarray[10] + y_position);
                    $.lineTo(start_x_3_even + overarray[8], overarray[11] + y_position);
                    $.fill();
                    $.closePath();
                    start_x_1_even += 75;
                    start_x_2_even += 75;
                    start_x_3_even += 75;



                }

            }
        }
        window.addEventListener('resize', function () {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            create()
        }, false);
        create();
    }
})(undefined);