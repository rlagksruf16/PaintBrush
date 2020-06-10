var canvas = document.getElementById("myCanvas");
            var myContext = canvas.getContext("2d");
            var drawing = false;
            
            function start() {
                e = window.event;
                myContext.beginPath();
                myContext.moveTo(e.clientX - 10, e.clientY - 10);
                drawing = true;
            }

            function draw() {
                if(drawing) {
                    e = window.event;
                    myContext.lineTo(e.clientX - 10, e.clientY - 10);
                    myContext.strokeStyle = changeColor(); // 색상
                    myContext.lineWidth = changeWidth(); // 굵기
                    myContext.lineCap = "round"; // 양쪽 끝 모양
                    myContext.lineJoin = "round"; // 모서리 모양 
                    myContext.stroke();
                    
                }
            }
            function stop() { drawing = false; }

            function changeColor() { // 색상 변경 
                var cols = document.getElementsByName("color_name");
                for(var i = 0; i < cols.length; i++) {
                    if(cols[i].checked === true)
                        return cols[i].value;
                }
            }

            function changeWidth() { // 굵기 
                var widths = document.getElementsByName("slider");
                // console.log(widths[0].value);  // 테스트
                return widths[0].value;
            }

            function redraw() {
                myContext.clearRect(0, 0, canvas.width, canvas.height);
            }
            function saveIMG() {
                var dataURL = canvas.toDataURL();
                document.getElementById("canvasImage").src = dataURL;
            }