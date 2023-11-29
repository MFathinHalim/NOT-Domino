const chalk = require('chalk')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const karakter = ["Mahiru", "Rem", "Seika", "Nijika", "Shizuka", "Hitori Gotoh", "Kurumi", "Chitanda", "Mitsuha", "Utahime", "Hinata", "Mitsuri", "Horikita", "Takagi", "Kubo", "Tsukasa", "Kanade", "Turnip", "Liyan", "MumtazG", "Umar", "Umaru", "Fathin"];
function gacha(pengen, pity) {
    let ampas = Math.floor(Math.random()*karakter.length)
    let gacor = []
    const presentaseGacor = 7 / 100;
    if(pengen.includes("FATHIN222GACOR")){
        gacor = [2,2]
    }
    for (let i = gacor.length; i < 3; i++) {
        gacor.push(Math.floor(Math.random() * 7));
        console.log('['+ chalk.cyan(gacor.toString()) + ']');
    }
    if (gacor.every(elem => elem === gacor[0]) || pity > Math.floor(Math.random() * (90-70) + 70)) {
        const randomValue = Math.random();
        const isMenang = randomValue >= presentaseGacor;

        if(isMenang){
            return chalk.green(`[${gacor.toString()}] \n Selamat Anda Mendapatkan Karakter ( ${pengen.replace("(FATHIN222GACOR)", "")} ) Yang Anda Inginkan!`);
        } else {
            return chalk.green(`[${gacor.toString()}] \n Selamat! Anda Mendapatkan ${karakter[ampas]}`);
        }
    }
    return chalk.redBright(`[${gacor.toString()}] \n Waah Maaf Ya, Anda Tidak Beruntung`)
}
function main(pity, kode) {
    console.log("Udah main sebanyak: "+pity);
    readline.question(`${chalk.yellow('>==============================================<')}\nKamu Mau Siapa?\n${chalk.yellow('>==============================================<')}\nList Char: \n ${karakter} \n > `, pengen => {
        if(!karakter.includes(pengen.replace(" (FATHIN222GACOR)", ""))){
            console.log(chalk.redBright("MOHON GUNAKAN KARAKTER YANG ADA DIDALAM CONTOH TERMASUK PENGGUNAAN HURUF KAPITAL!!!"));
        }
        if(kode && pengen.includes(" (FATHIN222GACOR)")){
            console.log(chalk.redBright("ANDA SUDAH MENGGUNAKAN KODE"));
            main(pity)
        }
        console.log(gacha(pengen));
        if(pengen.includes(" (FATHIN222GACOR)") || kode){
            readline.question(chalk.cyan(`Pengen Main Lagi? (iya, tidak) > `), lagi => {
                if(lagi.toLowerCase() === "iya"){
                        main(pity+1, true);                    
                }else{
                    readline.close();
                }
            });
        }else{
            readline.question(chalk.cyan(`Pengen Main Lagi? (iya, tidak) > `), lagi => {
                if(lagi.toLowerCase() === "iya"){                    
                        main(pity+1, false);
                    
                }else{
                    readline.close();
                }
            });
        }

    });
}
console.log(chalk.yellow("WELCOME TO FTHGACOR222!!"));
main(0, false);
