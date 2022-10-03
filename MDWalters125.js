const uptime = new Date();
const help = ["~hello", "~help", "~str", "~amazing", "~uptime", "~uwu", "~8ball", "~motd", "~restart"];
const eightBall = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
const motd = ["Meower is not dead", "Furries can do infinite crime", "~8ball get a life?", "Never gonna give you up", "usebottles", "Why did the chicken cross the road? To get to the other side", "Made in Canada", "The question that I always ask Bill Gates is why Windows is closed-source", "M.D. created Markdown, you can't deny that", "Proudly Furry"];
const muted = ["Eris"];
const admins = ["MDWalters124", "m"];

post("MDWalters125 is now online! Use ~help to see a list of commands.");

window.handlePost = function(bundle) {
    if (bundle[0] == "Discord") {
        bundle = bundle[1].split(": ");
    }

    if (bundle[0] == "MDWalters125") {
        return;
    }

    if (bundle[1].startsWith("~") && muted.includes(bundle[0])) {
        post("You are currently muted from MDWalters125.");
        return;
    }

    if (bundle[1].startsWith("~") && !(help.includes(bundle[1].split(" ")[0]))) {
        post("That command doesn't exist! Use ~help to see a list of commands.");
        return;
    }

    if (bundle[1].startsWith("~hello")) {
        if (bundle[1].split(" ")[1] === undefined) {
           post(`Hello, ${bundle[0]}!`);
        } else {
           post(`Hello, ${bundle[1].split(" ")[1]}!`);
        }
    }

    if (bundle[1].startsWith("~help")) {
        post(`${help}`);
    }

    if (bundle[1].startsWith("~str")) {
        post(`${bundle[1].split(" ")[1]}`);
    }

    if (bundle[1].startsWith("~amazing")) {
        post(`Amazing ${bundle[1].split(" ")}`);
    }

    if (bundle[1].startsWith("~uptime")) {
        post(uptime);
    }

    if (bundle[1].startsWith("~uwu")) {
        post("UwU");
    }

    if (bundle[1].startsWith("~8ball")) {
    	var num = Math.floor(Math.random() * eightBall.length);
    	post(eightBall[num]);
    }

    if (bundle[1].startsWith("~motd")) {
    	var num = Math.floor(Math.random() * motd.length);
    	post(motd[num]);
    }

    if (bundle[1].startsWith("~restart")) {
        if (admins.includes(bundle[0])) {
            startws();
        } else {
            post("You do not have the permissions to run this command.");
        }
    }
}