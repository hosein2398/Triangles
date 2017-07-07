        (function () {


            var start_x_1 = -35;
            var start_x_2 = -70;
            var start_x_3 = 0;
            var start_x_1_even = -70;
            var start_x_2_even = -105;
            var start_x_3_even = -35;
            var y_position = 0;
            var counter = 0;
            var const_height = parseInt(window.innerHeight / 12);
            console.log(const_height + "wee" + window.innerWidth);
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
                console.log(const_height + "wee" + window.innerWidth);
                for (var i = 1; i < 890; i++) {
                    if (i % 2 && i !== 1) {
                        $.beginPath();
                        $.fillStyle = "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) +
                            "," +
                            parseInt(Math.random() * 255) +
                            ",0.14)";
                        $.moveTo(start_x_1 + 75, 0 + y_position);
                        $.lineTo(start_x_2 + 75, 50 + y_position);
                        $.lineTo(start_x_3 + 80, 50 + y_position);
                        $.fill();
                        $.closePath();
                        start_x_1 += 75;
                        start_x_2 += 75;
                        start_x_3 += 75;
                        // console.log(window.innerWidth)
                        // console.log(start_x_1)
                        if (start_x_1 > window.innerWidth && counter < 14) {
                            counter++;
                            // alert("alerted!");
                            y_position += 50;
                            start_x_1 = -35;
                            start_x_2 = -70;
                            start_x_3 = 0;
                            start_x_1_even = -70;
                            start_x_2_even = -105;
                            start_x_3_even = -35;

                        }

                    } else if (i !== 2) {
                        $.beginPath();
                        $.fillStyle = "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) +
                            "," +
                            parseInt(Math.random() * 255) +
                            ",0.16)";

                        $.moveTo(start_x_1_even + 75, 50 + y_position);
                        $.lineTo(start_x_2_even + 70, 0 + y_position);
                        $.lineTo(start_x_3_even + 75, 0 + y_position);
                        $.fill();
                        $.closePath();
                        start_x_1_even += 75;
                        start_x_2_even += 75;
                        start_x_3_even += 75;



                    }

                }
            }
            // setInterval(function () {
            //     create()
            // }, 5000);
            window.addEventListener('resize', function () {
                c.width = window.innerWidth;
                c.height = window.innerHeight;
                create()
            }, false);
            create();

        })();