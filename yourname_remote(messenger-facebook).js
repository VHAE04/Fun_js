try {
    while (true) {
        if (document.getElementsByClassName("ztn2w49o n3t5jt4f k1z55t6l ne6e0wym pbevjfx6").length > 1 && document.getElementsByClassName("ztn2w49o n3t5jt4f k1z55t6l ne6e0wym pbevjfx6")[document.getElementsByClassName("ztn2w49o n3t5jt4f k1z55t6l ne6e0wym pbevjfx6").length - 1] !== "") {
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            function makeid(length) {
                var result = '';
                var characters = '₮《⟴웃⋥⅝⍂⍁〶〄Ⓐʊəㄶが🪥🪥🪥???⅍‱꙰௹₪㏒⤁💔⊠⊠⊠㊃??';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() *
                        charactersLength));
                }
                return result;
            }

            count_text = document.getElementsByClassName("ztn2w49o n3t5jt4f k1z55t6l ne6e0wym pbevjfx6").length

            for (ii = count_text - 1; ii > count_text - 3; ii--) {

                data = document.getElementsByClassName("ztn2w49o n3t5jt4f k1z55t6l ne6e0wym pbevjfx6")[ii]
                text = data.textContent
                console.log(text)
                max = text.length
                console.log("vong lap ngoai")

                max = text.length;
                for (var a = [], i = 0; i < max; ++i) {
                    a[i] = i;


                    String.prototype.replaceAt = function(index, replacement) {
                        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
                    }



                    function shuffle(array) {
                        var tmp, current, top = array.length;
                        if (top)
                            while (--top) {
                                current = Math.floor(Math.random() * (top + 1));
                                tmp = array[current];
                                array[current] = array[top];
                                array[top] = tmp;
                            }
                        return array;
                    }
                }
                a = shuffle(a);
                for (i = 0; i < max; ++i) {
                    await sleep(50 - ((30 / max) * i));

                    text = text.replaceAt(a[i], makeid(1));
                    data.innerHTML = text;
                    console.log(a[i])
                    console.log(text)

                    console.log(text);







                }




                for (i = 0; i < max; i++) {
                    await sleep(30 - ((20 / max) * i));
                    text = text.substr(0, max - i - 1)

                    data.innerHTML = makeid(max - i - 1);
                    console.log(data.innerHTML)
                }

                document.getElementsByClassName("ztn2w49o n3t5jt4f k1z55t6l ne6e0wym pbevjfx6")[ii].remove();
                console.log(ii);


            }
        } else {
            await sleep(1000);
            console.log("doi")
        }
    }
} catch (err) {
    console.log(err);
}
