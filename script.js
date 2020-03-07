function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += 20;
    };
    this.moveLeft = function () {
        this.left -= 20;
    };
    this.moveUp = function () {
        this.top -= 20;
    };
    this.moveDown = function () {
        this.top += 20;
    }

}

var hero = new Hero('image/megaman.gif', 10, 10, 150, 1000);

function run() {
    let borderRunRight = window.innerWidth - hero.size;
    let borderRunLeft = 0;
    let borderRunTop = 0;
    let borderRunBot = window.innerHeight - hero.size;

    if (hero.left < borderRunRight && hero.top === 10) {
        hero.moveRight();
    }
    if (hero.top < borderRunBot && hero.left >= borderRunRight) {
        hero.moveDown();
    }
    if (hero.left > borderRunLeft && hero.top >= borderRunBot) {
        hero.moveLeft();
    }
    if (hero.top > borderRunTop && hero.left <= borderRunLeft) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    console.log(hero.speed);
    setTimeout(run, hero.speed)
}

function downSpeed() {
    hero.speed++;
    run();
}

function upSpeed() {
    hero.speed--;
    console.log(hero.speed);
    run();
}

run();